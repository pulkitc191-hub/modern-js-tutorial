//string interpolation 
let name = "Pulkit"
let age = 21
console.log(`Hello my name is ${name} and I am ${age} years old`);

//for key value pairs 
const gamename = new String("Pulkit");
console.log(gamename.length);  // gives length of string not the number of words
console.log(gamename[0]);   // gives the value at index 0
console.log(gamename.toUpperCase());  // converts the string to uppercase
console.log(gamename.charAt(0));  // gives the value at index 0
console.log(gamename.indexOf('t')); //gives the index of the first occurrence of the character
console.log(gamename.substring(0, 3));  // returns the substring from index 0 to 3
console.log(gamename.slice(0, 3));  // returns the substring from index 0 to 3 and can take -ve values also to return from the end of the string 
console.log(gamename.trim()); //to remove extra space
console.log(gamename.replace( 'P', 'K')); // to replace the value

