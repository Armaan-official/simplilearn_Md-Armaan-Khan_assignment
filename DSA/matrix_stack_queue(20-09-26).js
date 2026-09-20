// ================== matrix addition ===========================
let arr1 = [
    [1, 2],
    [4, 8]
];

let arr2 = [
    [3, 5],
    [7, 9]
];

let res = [];
for (let i = 0; i < arr1.length; i++) {
    res[i] = [];
    for (let j = 0; j <arr1.length; j++) {
        res[i][j] = arr1[i][j] + arr2[i][j];
    }    
}

console.log('After adding two arrays:')
for (let i = 0; i < res.length; i++) { 
    console.log(res[i]);       
}

// ================== stack logic ===========================
let stack = [];
for (let i = res.length - 1; i >= 0; i--) {
    for (let j = res[i].length - 1; j >= 0; j--) {
        stack.push(res[i][j]);       
    }   
}
console.log('Stack: ' + stack);

// ================== queue logic ===========================
let queue = [];
for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
        queue.push(res[i][j]);       
    }   
}
console.log('Queue: ' + queue);




