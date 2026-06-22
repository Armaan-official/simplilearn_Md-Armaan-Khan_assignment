let Product = {
    productName: ['TV', 'Mobile', 'Computer'],
    price: [10000, 20000, 30000],
    colors: ['black', 'white', 'red'],
    brandName: ['brand 1', 'brand 2', 'brand 3'],
    licence: ['LIC01AB', 'LIC02BB', 'LIC03CC'],
    discount: ['10%', '8%', '5%'],
    distributor: [
        {
            name: 'ABC',
            code: 100,
        },
        {
            name: 'ABC1',
            code: 101,
        },
        {
            name: 'ABC2',
            code: 102,
        },
    ],
    platforms: ['Amazon', 'Flipkart', 'ebay'],
    country: 'India'
};


// printing the product name, price and color separately
console.log(`P-1: ${Product.productName[0]}, ${Product.price[0]}, ${Product.colors[0]} `);
console.log(`P-2: ${Product.productName[1]}, ${Product.price[1]}, ${Product.colors[1]}`);
console.log(`P-3: ${Product.productName[2]}, ${Product.price[2]}, ${Product.colors[2]}`);

// printing the distributor details and license number
console.log(`P-1: ${Product.distributor[0].name}, ${Product.distributor[0].code}, ${Product.licence[0]}`);
console.log(`P-2: ${Product.distributor[1].name}, ${Product.distributor[1].code}, ${Product.licence[1]}`);
console.log(`P-3: ${Product.distributor[2].name}, ${Product.distributor[2].code}, ${Product.licence[2]}`);

// printing the product name, platfrom, color and price
console.log(`P-1: ${Product.productName[0]}, ${Product.platforms[0]}, ${Product.colors[0]}, ${Product.price[0]} `);
console.log(`P-2: ${Product.productName[1]}, ${Product.platforms[1]}, ${Product.colors[1]}, ${Product.price[1]} `);
console.log(`P-3: ${Product.productName[2]}, ${Product.platforms[2]}, ${Product.colors[2]}, ${Product.price[2]} `);

// printing the rest of the details with rest operator
const { productName, price, colors, distributor, platforms, ...rest } = Product;
console.log(rest);