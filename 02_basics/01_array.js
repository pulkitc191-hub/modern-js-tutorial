//dynamic and store multiple data types
//create shallow copies i.e. share same reference
// deep copies i.e. no sharing of reference 

const arr = new Array(0 , 1 , 2 , 3 , 4 , 5 );
const arr2 = [1 , 2 , 3 ,4 , 5];

//array methods
// arr.push("Pulkit"); //push elements into array
// console.log(arr);

// arr2.pop(); //remove the last element from array
// console.log(arr);


//arr.unshift(2); //add element at the beginning
//arr2.shift(); //remove element from the beginning

//console.log(arr.includes(2)); //gives true or false
// console.log(arr.indexOf(1)); //gives index of the element and -1 if does not exist

// const newarr = arr.join();  //Adds all the elements of an array into a string
// console.log(newarr);

console.log("A" , arr);

const newarr = arr.slice(1, 3); // slice(start, end): Returns a portion of the array. The original array remains UNCHANGED. End index is NOT included.
console.log(newarr);
console.log("B", arr);
``
const newarr2 = arr.splice(1, 3); // splice(start, count): Removes elements from the original array. The original array IS MODIFIED. Second parameter is the count of elements to remove.
console.log("C", arr);
console.log(newarr2);

