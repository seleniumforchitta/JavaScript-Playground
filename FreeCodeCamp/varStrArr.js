var myName = "Nitin"
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
myStr = "Automation";
console.log(myStr);
console.log(myStr[0]); // Prints first character
console.log(myStr[myStr.length-1]); // Prints Last character
console.log(myStr[myStr.length-3]); // Prints 3rd last character

myStr[0] = 'H';
console.log(myStr);
/* Strings in JavaScript are immutable. This means that once a string is created, its value cannot be changed.

### Key Points:
1. **No Direct Modification:** If you try to change a character in a string, it won’t work. For example:
   ```javascript
   let str = "hello";
   str[0] = "H"; // Does nothing - It is doesn't change the existing value and it doesn't throw any error also. 
   console.log(str); // Output: "hello"
   ```

2. **New String Creation:** Any operation that appears to modify a string actually creates a new string. For example:
   ```javascript
   let str = "hello";
   let newStr = str.toUpperCase(); // Creates a new string
   console.log(newStr); // Output: "HELLO"
   console.log(str);    // Original remains "hello"
   ```

3. **Reason for Immutability:**
   - Strings are designed this way for performance optimization, especially since they are heavily used in programming.
   - Immutability helps with string interning and makes strings more predictable in concurrent or multi-threaded environments.

### If You Need Mutability:
If you need to modify a string frequently, consider using a mutable structure like an **array**:
```javascript
let arr = ["h", "e", "l", "l", "o"];
arr[0] = "H";
console.log(arr.join("")); // Output: "Hello"
```
*/

// ARRAY
var myArray = [44, 33, 55];
console.log(myArray[0]); // To get the 1st element in the array
console.log(myArray[myArray.length - 1]); // To get the last element in the array

// Push - Pop
myArray.push(88) // push() = Adds an element to end of the array
// Array.push([66, 77, 88]) // Push another array
console.log(myArray)
var popped = myArray.pop(); // pop() = Removes an element to end of the array
console.log(myArray)
console.log(popped)

// Shift - Unshift
myArray.shift(); // shift() - Removes 1st element from the array
console.log(myArray); 
myArray.unshift(66); // unshift() - Adds an element to the beginning of the array
console.log(myArray); 














 

















 