//singleton : when an object is made using constructor then it is a singleton
//Object.create is used to create a singleton object
//object literals : when an object is made using object literals then it is not a singleton 

//creating new object , object contains key value pairs

const mysym = Symbol("key1");

const user = {
    name: "Pulkit",
    [mysym]: "key1",  //symbol is declared in [] and acessed in []
    age: 25,
    location: "Delhi",
    email: "pulkit191@google.com",
    isLoggedIn: true
}

// console.log(user.name); //inefficient method to access objects as it won't work when key is a symbol or string with space
// console.log(user[mysym]); //efficient method to access objects as it works for all types of keys(use " " for strings like user , age) 

//user.name = "Disha" //to change value of the key
//Object.freeze(user); //to freeze or lock the object i.e. no changes can be made in the object

user.greeting = function(){
    return `Hello JS, user is ${this.name}`;//called string interpolation
    //use this to access same object else use name of the object i.e. user
    //console.log(`Hello JS, user is ${user.name}`) will get undefined if used this
}

console.log(user.greeting()); //to call the function
//console.log(user.greeting); //to get reference to the function

