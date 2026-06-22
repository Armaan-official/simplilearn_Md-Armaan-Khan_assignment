const normalCart = [200, 300, 250, 120, 400];
const premiumCart = [100, 400, 550, 100, 400];
const goldenCart = [300, 370, 350, 130, 450];
const normalDisc = 5;
const premiumDisc = 15;
const goldenDisc = 20;
 

// calculating discounts with forEach function

normalCart.forEach(price => console.log(price - price * (normalDisc/100)));

premiumCart.forEach(price => console.log(price - price * (premiumDisc/100)));

goldenCart.forEach(price => console.log(price - price * (goldenDisc/100))); 


// creating a new array with discounted values

let normalUpdated = normalCart.map(price => (price - price * (normalDisc/100)));
console.log(normalUpdated)

let premiumUpdated = premiumCart.map(price => (price - price * (premiumDisc/100)));
console.log(premiumUpdated)

let goldenUpdated = goldenCart.map(price => (price - price * goldenDisc/100));
console.log(goldenUpdated) 
