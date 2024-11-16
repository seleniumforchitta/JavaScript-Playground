function myAdd(a, b) {
    // var oopsGlobal = 5; // This is local 
    oopsGlobal = 5; // This is global
    return a + b;
}

console.log(myAdd(100, 189.987))


// Global Scope 
var myGlobal = 10;
function myNewAdd(a, b) {
    if (typeof myGlobal != undefined) {
        output = a + b + myGlobal;
    }
    if (typeof oopsGlobal != undefined) {
        output = a + b + oopsGlobal;
    }
    return output;

}
console.log(myNewAdd(100, 189.987))


// Local variable take precedence over global variable 
var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "Sweater";
    return outerWear;
}
console.log(myOutfit()); // Sweater


// A program to move the list by 1 element 
function nextItem(list, item) {

    list.push(item);
    list.shift();
    return list;
}
list = [2, 3, 4, 5, 6]
// Expected output = [3, 4, 5, 6, 7]
console.log("Before - ", JSON.stringify(list));
console.log(nextItem(list, 7));
console.log("After - ", JSON.stringify(list));


//Working with Boolean
function welcomeToBoolean() {
    return false;
}
if (!welcomeToBoolean()) {
    console.log(welcomeToBoolean());
}


// Equality and Strict-Equality
console.log(3 == 3);
console.log(3 === 3);
console.log(3 == '3');
console.log(3 === '3'); // Strict equality opertaor 

val = 75
if(val >= 18 && val <=60){
    console.log("You can drive.")
}
else console.log("You can't drive.")

/*
&& - Logical Anb
|| - Logical OR
*/





