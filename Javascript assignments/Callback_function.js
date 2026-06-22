// multiply two numbers
function multiple(a, b) {
    return a * b;
}


function add(a, b, callback) {
    const sum = a + b;
    callback(sum);
}

function area(a, b, callback) {
    setTimeout(() => {
        const result = a * b;
        callback(result);
    }, 3000);
}

// calling multiple with callback within the add function
// calling add with callback within the area function
area(10, 20, (res) => {
    add(res, 0, (num) => {
        console.log(multiple(num, 1));
    })
});





