const book1 = {
    name: 'Tomorrow Land',
    id: 'B01',
    price: 56.50,
}

const author = {
    auth_name: 'John',
    auth_id: 'AU01',
    age: 56,
}

const distribution = {
    id: 'D01',
    copies: 100,
}

// merging all objects into one
let library = {book1, author, distribution}
console.log(library);

// adding two more properties into library
library.location = 'India';
library.city = 'Bangaluru';

console.log(library);

// adding one property each into book1 and author
book1.pages = 500;
author.gender = 'Male';

// printing the library again
console.log(library);




