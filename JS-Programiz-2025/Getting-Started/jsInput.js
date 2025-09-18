const prompt = require('prompt-sync')();

const myName = prompt("Enter your Name: ");

const myAge = parseInt(prompt("Enter your Age: "));

const myHeight = parseFloat(prompt("Enter your Height: "));

console.log(`Hello ${myName}\nMy Age is ${myAge}\nMy Height is ${myHeight}`);

console.log(typeof(myAge), typeof(myName), typeof(myHeight));




