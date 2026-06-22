function Student(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// creating 3 objects
let stud1 = new Student('Pankaj', 23, 'Male');
let stud2 = new Student('Reena', 25, 'Female');
let stud3 = new Student('Ranjeev', 26, 'Male');

// printing all the properties of 3 objects
console.log(stud1.name, stud1.age, stud1.gender);
console.log(stud2.name, stud2.age, stud2.gender);
console.log(stud3.name, stud3.age, stud3.gender);

// adding common properties branch and college 
Student.prototype.branch = 'CSE';
Student.prototype.colllege = 'ABC';

console.log(stud1.branch, stud1.colllege);
console.log(stud2.branch, stud2.colllege);
console.log(stud3.branch, stud3.colllege);