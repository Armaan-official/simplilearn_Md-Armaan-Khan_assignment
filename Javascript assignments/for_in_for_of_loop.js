let products = [
    {
    name: 'HyperV projector',
    cost: 2500,
    shipping: 50
},
{
    name: 'Vision Cable',
    cost: 10,
    shipping: 0
},
{
    name: 'LED screen',
    cost: 5500,
    shipping: 10
},
];

// iterating through the object properties
for (let product of products){
    console.log(`This ${product.name} is costing you ${product.cost} with shipping charges extra as ${product.shipping}`)
}

// adding product cost and shipping cost
for (let product of products){
    console.log(`${product.name} --> ${product.cost + product.shipping}`)
}