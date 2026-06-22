let employee = new Map();

employee.set(1, "Armaan");
employee.set(2, "Sanjay");
employee.set(3, "Rina");
employee.set(4, "Tapan");
employee.set(5, "Mahesh");
employee.set(6, "Priya");

// delete 5th employee
employee.delete(5);
console.log(employee);

// add 2 more employee
employee.set(7, 'Karan');
employee.set(8, 'Dinesh')
console.log(employee);

// checking for 4th employee
employee.has(4);
console.log(employee.has(4))

// checking for 11th employee
employee.has(11);
console.log(employee.has(11))

// fetching the ids
for (let id of employee.keys()) {
    console.log(id);
}

// fetching the names
for (let emp of employee.values()) {
    console.log(emp);
}

// fetching the 8th and 3rd employees
console.log(employee.get(8));
console.log(employee.get(3));

// deleting all the data from the Map
employee.clear();
console.log(employee);
