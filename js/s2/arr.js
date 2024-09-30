
    var arr = [];
    for (let i = 0; i < 5; i++) {
    var num = prompt("enter the numbers");
    arr.push(num);
    }

    function sortNumbers(arr) {

        const originalOutput = `u've entered the values of ${arr.join(', ')}`;

        const descending = [...arr].sort(function (a, b) {
        return b - a}).join(', ');
        const descendingOutput = `ur values after being sorted descending ${descending}`;

        const ascending = [...arr].sort(function (a, b) {
            return a - b}).join(', ');
        const ascendingOutput = `ur values after being sorted ascending ${ascending}`;

        document.getElementById('sorting').innerHTML = `
            <p>${originalOutput}</p>
            <p>${descendingOutput}</p>
            <p>${ascendingOutput}</p>
        `;
    }

    sortNumbers(arr);

// #############################################

    var arr2 = [];
    for (let i = 0; i < 3; i++) {
            var num = prompt("enter the numbers");
            arr2.push(num);
        }

    var adding = 0, multi = 1, divide = 1;
    function operateNumbers(numbers) {

        const sum = numbers.reduce(function (a, b) {return  Number(a) + Number(b)}, 0);
        const sumOutput = `sum of the 3 values ${numbers.join(' + ')} = ${sum}`;

        const multiplication = numbers.reduce(function (a, b) {return  a * b}, 1);
        const multiplicationOutput = `multiplication of the 3 values ${numbers.join(' * ')} = ${multiplication}`;

        const division = numbers.reduce(function (a, b) {return a / b});
        const divisionOutput = `division of the 3 values ${numbers.join(' / ')} = ${division}`;

        document.getElementById('operations').innerHTML = `
            <p>${sumOutput}</p>
            <p>${multiplicationOutput}</p>
            <p>${divisionOutput}</p>
        `;

    }

operateNumbers(arr2);


// ###############################################

// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers.


let input = prompt("Enter a list of items separated by spaces:"); 
let array = input.split(" ");

function display (arr) {
    return `the second lowest ${arr[1]}, the second greatest ${arr[arr.length - 2]}`;
}

document.writeln(display(array))

// #####################################################

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

let string = prompt("Enter a string to be capitalized"); 

function capitalized(string) {
    return string
        .split(' ') 
        .map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' '); 
}


document.writeln(capitalized(string))
