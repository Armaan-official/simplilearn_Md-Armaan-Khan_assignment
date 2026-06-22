let string = 'Java Is open source language and Javascript is scripting language. java Is very user friendly and easy to use'

// replacing Java with Python on first search
let newString1 = string.replace('Java', 'Python');
console.log('1st --> ' + newString1 + '\n');

// replacing all words starting with java with python 
let newString2 = string.replace(/java/gi, 'python');
console.log('2nd --> ' + newString2 + '\n');

// replacing all Java with Hello
let newString3 = string.replace(/Java/g, 'Hello');
console.log('3rd --> ' + newString3 + '\n');

// replacing Is with are
let newString4 = string.replace(/\bis\b/gi, 'are');
console.log('4th --> ' + newString4 + '\n');
