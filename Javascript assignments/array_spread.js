// creating an array of 3 cities
let cities = ['Mumbai', 'Bengaluru', 'Hyderabad'];

// adding 2 more cities at the end
cities.push('Kerala', 'Pune');

// printing the length of the city and the array
console.log(cities.length);
console.log(cities);

// adding Delhi first and Chennai as second element using spread operator
cities = ['Delhi', 'Chennai', ...cities];

// adding Kolkata as last element using spread operator
cities = [...cities, 'Kolkata'];

// popping 2 times
cities.pop();
cities.pop();

// printing the length of the city and the array
console.log(cities.length);
console.log(cities);






