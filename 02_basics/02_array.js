//if you push an array into an array then it will create a nested array in which a whole array will represented as an element.
// to acess value of the nested array : array_name[index_of_outer_array][index_of_inner_array]
//concat() is used to join two arrays and return the new array

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
// const arr3 = [...arr1 , ...arr2]; //spread operator used to join two or more arrays and return a new array
// console.log(arr3);



// const fake_array = [1, [2, 3, 4, 5], 6, 7, [8, [9, 10]]];
// const real_array = fake_array.flat(3);
// console.log(real_array);
//flat() is used to flatten the array and return the new array....have to put depth of the array but can use infinity is depth is too high

console.log(Array.isArray("Pulkit")); //checks if it is an array or not
console.log(Array.from("Pulkit")); //converts string into array
console.log(Array.from({name: "Pulkit"})); //empty array as it cannot create array from object directly   

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1 , score2 , score3)); //creates an array with the given values



