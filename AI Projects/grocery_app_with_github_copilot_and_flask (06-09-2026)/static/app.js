const STORAGE_KEYS = { cart: "gather-cart", favourites: "gather-favourites" };

const readStorage = (key) => {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); }
  catch (error) { return []; }
};
const writeStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let cart = readStorage(STORAGE_KEYS.cart);
let favourites = readStorage(STORAGE_KEYS.favourites);

const toast = (message) => {
  const element = document.querySelector(".toast");
  if (!element) return;
  element.textContent = message;
  element.classList.add("show");
  window.setTimeout(() => element.classList.remove("show"), 2200);
};

const updateCounts = () => {
  document.querySelectorAll(".cart-count").forEach((el) => { el.textContent = cart.reduce((sum, item) => sum + item.quantity, 0); });
  document.querySelectorAll(".fav-count").forEach((el) => { el.textContent = favourites.length; });
};

const productFromCard = (card) => ({
  id: Number(card.dataset.productId),
  name: card.dataset.name,
  price: Number(card.dataset.price),
  image: card.querySelector("img").src,
  quantity: 1,
});

document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = productFromCard(button.closest(".product-card"));
    const existing = cart.find((entry) => entry.id === item.id);
    if (existing) existing.quantity += 1;
    else cart.push(item);
    writeStorage(STORAGE_KEYS.cart, cart);
    updateCounts();
    toast(`${item.name} added to your basket`);
  });
});

document.querySelectorAll("[data-favourite]").forEach((button) => {
  const id = Number(button.dataset.favourite);
  if (favourites.includes(id)) button.classList.add("is-favourite");
  button.addEventListener("click", () => {
    favourites = favourites.includes(id) ? favourites.filter((item) => item !== id) : [...favourites, id];
    button.classList.toggle("is-favourite");
    writeStorage(STORAGE_KEYS.favourites, favourites);
    updateCounts();
    renderFavourites();
    toast(favourites.includes(id) ? "Saved to your favourites" : "Removed from your favourites");
  });
});

const renderFavourites = () => {
  const grid = document.querySelector(".favourites-grid");
  const empty = document.querySelector(".favourites-empty");
  if (!grid || !empty) return;
  grid.querySelectorAll(".product-card").forEach((card) => {
    card.hidden = !favourites.includes(Number(card.dataset.productId));
  });
  empty.style.display = favourites.length ? "none" : "block";
};

const renderCart = () => {
  const container = document.querySelector(".cart-items");
  if (!container) return;
  const empty = container.querySelector(".cart-empty");
  if (!cart.length) return;
  if (empty) empty.remove();
  container.innerHTML = cart.map((item) => `<div class="cart-item" data-cart-id="${item.id}"><img src="${item.image}" alt="${item.name}"><div class="cart-item-details"><h3>${item.name}</h3><p>Freshly gathered</p><strong>$${item.price.toFixed(2)}</strong></div><div class="quantity"><button data-decrease="${item.id}">−</button><span>${item.quantity}</span><button data-increase="${item.id}">+</button></div><button class="remove-item" data-remove="${item.id}" aria-label="Remove ${item.name}">×</button></div>`).join("");
  container.querySelectorAll("[data-increase], [data-decrease], [data-remove]").forEach((button) => button.addEventListener("click", () => {
    const id = Number(button.dataset.increase || button.dataset.decrease || button.dataset.remove);
    const item = cart.find((entry) => entry.id === id);
    if (button.dataset.remove || button.dataset.decrease && item.quantity === 1) cart = cart.filter((entry) => entry.id !== id);
    else if (button.dataset.decrease) item.quantity -= 1;
    else item.quantity += 1;
    writeStorage(STORAGE_KEYS.cart, cart); updateCounts(); renderCart(); updateSummary();
  }));
};
const updateSummary = () => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelectorAll(".summary-subtotal, .summary-total-value").forEach((el) => { el.textContent = `$${subtotal.toFixed(2)}`; });
  const checkout = document.querySelector(".checkout-button");
  if (checkout) checkout.disabled = !cart.length;
};
updateCounts(); renderFavourites(); renderCart(); updateSummary();
