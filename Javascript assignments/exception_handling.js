let number = 45;

try {
    if (number > 10 && number <= 20) {
        console.log('The number is smaller');  
    } else if (number > 21 && number <= 40) {
        console.log('The number is little bigger');
    } else {
        throw new Error('The number is more than 41')
    }
} catch(error) {
    console.log(error.message);
    
} finally {
    console.log('This will always execute');
}