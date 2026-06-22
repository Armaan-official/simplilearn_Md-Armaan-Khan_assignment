
// creating the parent class
class Product{
    constructor(prod_name, price, discount){
        this.prod_name = prod_name;
        this.price = price;
        this.discount = discount;
    }

    discountedPrice(){
        let reduceValue = (this.price * this.discount / 100);
        return this.price - reduceValue;
    }
}

// creating the child class
class ProductBrand extends Product{
        constructor(prod_name, price, discount, brand){
            super(prod_name, price, discount)
            this.brand = brand;
            
        }

        details(){
            return `Name: ${this.prod_name}, Price: ${this.price}, Discount: ${this.discount}, Brand: ${this.brand}`
        }
    }

// passing the values from the table
let product1 = new ProductBrand('Watch', 5000, 10, 'B-1');
let product2 = new ProductBrand('LED TV', 10000, 20, 'B-2');
let product3 = new ProductBrand('Oven', 20000, 30, 'B-3');
let product4 = new ProductBrand('Shoes', 8000, 5, 'B-4');

// printing the details of the four products
console.log('Product1 ==> ' + product1.details())
console.log('Product2 ==> ' + product2.details())
console.log('Product3 ==> ' + product3.details())
console.log('Product4 ==> ' + product4.details() + '\n')

// printing the discountedPrice() using the child classes
console.log('Product1 discount: ' + product1.discountedPrice())
console.log('Product2 discount: ' + product2.discountedPrice())
console.log('Product3 discount: ' + product3.discountedPrice())
console.log('Product4 discount: ' + product4.discountedPrice())