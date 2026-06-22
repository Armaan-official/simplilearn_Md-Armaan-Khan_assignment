let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('This is the p1-10')
        resolve(10);
    }, 2000);           
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('This is the p2-20')
        resolve(20);
    }, 3000);           
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('This is the p3-30')
        resolve(30);
    }, 1000);       
})
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('This is the p4-40')
        reject(40);
    }, 5000);      
})
let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('This is the p5-50')
        resolve(50);
    }, 6000);       
})
let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('This is the p6-60')
        reject(60);
    }, 4000); 
})

// running with .all method
Promise.all([p5, p2, p3, p1, p6, p4])
    .then((result) => console.log(`This is for the (.all) method: ${result}`))
    .catch((error) => console.log(error));

// running with .rate method
Promise.race([p5, p2, p3, p1, p6, p4])
    .then((result) => console.log(`This is for the (.race) method: ${result}`))
    .catch((error) => console.log(error));

// running with .any method
Promise.any([p5, p2, p3, p1, p6, p4])
    .then((result) => console.log(`This is for the (.any) method: ${result}`))
    .catch((error) => console.log(error));