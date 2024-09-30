// 1 - Write a function that takes an array of numbers and returns a new array containing only the positive numbers.
function getPositive(arr) {
    return arr.filter(num => num > 0);
}

// Example usage:
let numbers = [-5, 10, -2, 3, -1, 7];
console.log(getPositive(numbers)); // [ 10, 3, 7 ]


// 2 - Write a function that takes an array of numbers and returns the sum of all the numbers.(reduce)

function getSum (arr) {
    return arr.reduce((sum, num) => sum+num, 0)
}

let nums = [1, 5, 0, 4];
console.log(getSum(nums)); // 10 


// 3 - Write a function that takes an array of names and returns a new array with each name capitalized.

function capitalized (arr) {
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1));
}

let names = ["sylvia", "yousif", "fahmy"];
console.log(capitalized(names)); // [ 'Sylvia', 'Yousif', 'Fahmy' ]

// 4 - Write a JavaScript program to check whether a string is lower case or not.

function isLower (str) {
    return str == str.toLowerCase();
}

console.log(isLower("sylvia yousif")); // true
console.log(isLower("Sylvia Yousif")); // false

// 5 - Write an arrow function that takes an array of strings and a length, and returns a new array containing only the strings with length greater than the specified value.

let greaterLength = (arr, len) => {
    return arr.filter(str => str.length > len);
}

let words = ["apple", "banana", "kiwi", "strawberry"];
console.log(greaterLength(words, 5)); // ["banana", "strawberry"]
console.log(words);