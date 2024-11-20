var myDog = {
    "name": "Coder", // Here it will work if you write -  name: "Coder", as well
    "legs": 4,
    "tails": 2,
    "friends": ["Debugger", "Designer"],
}
myDog.name = "Pro Coder" // Changing a property value
myDog.bark = "Bow Bow" // Adding a new Property 

console.log(myDog.name) // Pro Coder
console.log(myDog.friends[1]) // Designer
console.log(myDog["legs"]) // 4
console.log(myDog["friends"][0]) // Debugger
console.log(myDog[0]) // undefined
console.log(myDog.bark) // Bow Bow
console.log(myDog['bark']) // Bow Bow
// console.log(myDog[bark]) // it will through an error saying bark is not defined 

// Delete a property from an object 
console.log(myDog)
delete myDog.bark
console.log(myDog)
