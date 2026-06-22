function product(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;

    this.discountedPrice = function(){
        let discountPrice = this.price * this.discount/100
        return (this.price - discountPrice)
    }
}

// create objects for each products
const prod1 = new product('Watch', 5000, 10);
const prod2 = new product('LED TV', 10000, 20);
const prod3 = new product('Oven', 20000, 30);
const prod4 = new product('Shoes', 8000, 5);

// displaying product name, price and discounted price
console.log("Product 1: " + prod1.name);
console.log("Price: " + prod1.price);
console.log("Discounted price: " + prod1.discountedPrice() + '\n');

console.log("Product 2: " + prod2.name);
console.log("Price: " + prod2.price);
console.log("Discounted price: " + prod2.discountedPrice() + '\n');

console.log("Product 3: " + prod3.name);
console.log("Price: " + prod3.price);
console.log("Discounted price: " + prod3.discountedPrice() + '\n');

console.log("Product 4: " + prod4.name);
console.log("Price: " + prod4.price);
console.log("Discounted price: " + prod4.discountedPrice() + '\n');
