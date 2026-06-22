let number = 22;

let numberChecker = new Promise ((resolve, reject) => {
    if (number < 0) {
        reject('The number is negative - rejected')  
    } 
    else if (number % 2 !== 0) {
        resolve('The number is odd - resolved')
    } else if (number % 2 === 0) {
        resolve('The number is even - resolved')
    }
})
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('Bye')
});