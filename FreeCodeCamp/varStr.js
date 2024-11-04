var myName = "Chitta"
let yourName = "Ramesh"
const pi = 3.14; // can never change
// var - used accorss program
// let - inside the block only

var a; //declaring
var b = 2; //declaraing + assigning
a = b; //assigning
console.log(a)

a = a+1;
myName = myName + " Hello" //The result of + is conact and - is NaN
myName += " Hello " + yourName
console.log(a, myName)

a = a+1;
a++; //increamenting
a--; //decreamenting a = a-1

var dec = 0.3333;
console.log( dec * 0.5)

var remainder;
remainder = 11 % 3; 
console.log(remainder)

var div;
div = 11 / 3; 
console.log(div)

var myStr = "I am a very good boy. My Name is \"Ramesh\"."
console.log(myStr) // \" - escaping the next character 
var myLink = `https://www.google.com/'"search?q=what+%26operator+does+in`
// so if you use `` then you can use '' & "" inside it
/*
\\ - Backlash
\n - newline
\t - toolbar
\b - backspace
\r, \f
*/

//indexing
console.log(myStr);
console.log(myStr[0]); // Prints first character
console.log(myStr[myStr.length-1]); // Prints Last character
console.log(myStr[myStr.length-3]); // Prints 3rd last character






















 