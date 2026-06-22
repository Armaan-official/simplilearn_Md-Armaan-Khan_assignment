
function area(length, breadth) {
    return length * breadth;
}

let variable = () => 50;

let perimeter = () => 30;

function calculate (a, b = 20, c = b * area(10, 2), d = c + perimeter()) {
    return a + b + c + d;
}

console.log(calculate(20));
console.log(calculate(40, 50, 70, 60));
console.log(calculate(40, 50));