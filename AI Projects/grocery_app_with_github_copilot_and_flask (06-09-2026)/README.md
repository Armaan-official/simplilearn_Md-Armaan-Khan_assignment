# Gather Grocery App

A modern grocery shopping app built with Flask. Browse fresh products, filter by category, search the market, add items to a basket, and save favourites.

## Features

- Responsive home page with featured products and grocery categories
- Product browsing with category filters
- Product search
- Persistent cart using browser `localStorage`
- Quantity controls and order summary
- Persistent favourites using browser `localStorage`
- Reusable Jinja templates
- Responsive modern styling for desktop and mobile

## Tech stack

- Python
- Flask
- Jinja2
- HTML5
- CSS3
- Vanilla JavaScript

## Project structure

```text
grocery_app_with_github_copilot_and_flask/
├── app.py
├── requirements.txt
├── static/
│   ├── app.js
│   └── style.css
└── templates/
    ├── base.html
    ├── index.html
    ├── products.html
    ├── cart.html
    ├── favourites.html
    └── _product_card.html
```

## Getting started

### 1. Create a virtual environment

Windows:

```powershell
python -m venv .venv
.venv\Scripts\activate
```

macOS/Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Start the development server

```bash
flask --app app run --debug
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in a browser.

## Available routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/products` | Product catalogue |
| `/products?category=Fruits` | Filter products by category |
| `/products?q=banana` | Search products |
| `/cart` | Shopping basket |
| `/favourites` | Saved favourite products |

## Notes

Product data is currently seeded in `app.py`. Cart and favourites are stored in the browser, so no database is required for the current version.
