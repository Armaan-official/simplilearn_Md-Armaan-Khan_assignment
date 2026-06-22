// Normal function
function simpleInterest1(p, r, t){
    return (p * r * t) / 100;
}
console.log('Normal function: ' + simpleInterest1(1000, 5, 3))

// Function expression
let simpleInterest2 = function(p, r, t){
    return (p * r * t) / 100;
}
console.log('Function expression: ' + simpleInterest2(1000, 5, 3))

// Arrow function
let simpleInterest3 = (p, r, t) => (p * r * t) / 100;
console.log('Arrow function: ' + simpleInterest3(1000, 5, 3))