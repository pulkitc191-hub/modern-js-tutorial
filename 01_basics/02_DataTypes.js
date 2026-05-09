"use strict";    //to ensure engine treats your file as newer model script

//pre defined data types
Number     //to store integer and float with a max limit of 2^53
String     //to store text
BigInt     //to store large numbers beyond the range of Number
Boolean    //to store true or false
Symbol     //to store unique values
null       //to store null value
undefined  //to store undefined value

console.log(typeof 10);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof null);          
console.log(typeof undefined);
console.log(typeof 10n);           
console.log(typeof Symbol("id"));
