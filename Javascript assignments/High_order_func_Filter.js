let arr = [34, 78, 12, 11, 67, 55, 42, 89, 60];

// filtering the even numbers and then multipying by 2
let arr1 = arr.filter(num => num % 2 == 0).map(num => num * 2);
console.log(arr1);

// filtering the odd numbers and then multipying by 3
let arr2 = arr.filter(num => num % 2 !== 0).map(num => num * 3);
console.log(arr2);

