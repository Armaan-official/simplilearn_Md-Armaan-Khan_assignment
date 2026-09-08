from flask import Flask, render_template, request

app = Flask(__name__)

PRODUCTS = [
    {
        "id": 1,
        "name": "Avocado Hass",
        "category": "Fruits",
        "price": 4.99,
        "unit": "per 2 pack",
        "rating": 4.9,
        "badge": "Best seller",
        "color": "green",
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=700&q=85",
    },
    {
        "id": 2,
        "name": "Organic Bananas",
        "category": "Fruits",
        "price": 2.49,
        "unit": "per bunch",
        "rating": 4.8,
        "badge": "Organic",
        "color": "yellow",
        "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=85",
    },
    {
        "id": 3,
        "name": "Farm Fresh Eggs",
        "category": "Dairy & Eggs",
        "price": 5.99,
        "unit": "12 pack",
        "rating": 4.9,
        "badge": "Local favorite",
        "color": "cream",
        "image": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=700&q=85",
    },
    {
        "id": 4,
        "name": "Sourdough Bread",
        "category": "Bakery",
        "price": 4.49,
        "unit": "1 loaf",
        "rating": 4.7,
        "badge": "Fresh today",
        "color": "orange",
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85",
    },
    {
        "id": 5,
        "name": "Baby Spinach",
        "category": "Vegetables",
        "price": 3.29,
        "unit": "5 oz bag",
        "rating": 4.8,
        "badge": "Organic",
        "color": "green",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=700&q=85",
    },
    {
        "id": 6,
        "name": "Wild Salmon Fillet",
        "category": "Meat & Seafood",
        "price": 12.99,
        "unit": "per lb",
        "rating": 4.9,
        "badge": "Chef's pick",
        "color": "coral",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=85",
    },
    {
        "id": 7,
        "name": "Cherry Tomatoes",
        "category": "Vegetables",
        "price": 3.99,
        "unit": "1 pint",
        "rating": 4.6,
        "badge": "Sweet & ripe",
        "color": "red",
        "image": "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=85",
    },
    {
        "id": 8,
        "name": "Greek Yogurt",
        "category": "Dairy & Eggs",
        "price": 6.49,
        "unit": "32 oz tub",
        "rating": 4.8,
        "badge": "High protein",
        "color": "blue",
        "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=85",
    },
]

CATEGORIES = [
    {"name": "Fruits", "icon": "🍎", "count": "42 items", "class": "fruit"},
    {"name": "Vegetables", "icon": "🥬", "count": "58 items", "class": "vegetable"},
    {"name": "Dairy & Eggs", "icon": "🥚", "count": "31 items", "class": "dairy"},
    {"name": "Bakery", "icon": "🥖", "count": "24 items", "class": "bakery"},
    {"name": "Meat & Seafood", "icon": "🥩", "count": "36 items", "class": "meat"},
]


@app.context_processor
def inject_shared_data():
    return {"categories": CATEGORIES}


@app.route("/")
def home():
    return render_template("index.html", featured=PRODUCTS[:4], page="home")


@app.route("/products")
def products():
    selected_category = request.args.get("category", "All")
    query = request.args.get("q", "").strip()
    visible_products = PRODUCTS
    if selected_category != "All":
        visible_products = [p for p in visible_products if p["category"] == selected_category]
    if query:
        visible_products = [
            p for p in visible_products
            if query.lower() in p["name"].lower() or query.lower() in p["category"].lower()
        ]
    return render_template(
        "products.html",
        products=visible_products,
        selected_category=selected_category,
        query=query,
        page="products",
    )


@app.route("/cart")
def cart():
    return render_template("cart.html", page="cart")


@app.route("/favourites")
def favourites():
    return render_template("favourites.html", products=PRODUCTS, page="favourites")


if __name__ == "__main__":
    app.run(debug=True)
