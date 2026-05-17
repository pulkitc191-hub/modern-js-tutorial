const user = {
    username : "Hitesh",
    price : 999,

    welcomemessage : function(){
        console.log(`${this.username} , welcome to website`);
    }
}
//this keyword is used for current context or current object

// user.welcomemessage();
// user.username = "Pulkit"; //changed the value in the context
// user.welcomemessage();

//console.log(this) //gives empty object in node 
//global object in browser is window

// function first(){
//     console.log(this) //gives global object in node and window object in browser
// }
// first(); 


// function chai(){
//     let username = "Hitesh"
//     console.log(this.username) //gives value undefined as this does not work in normal function
// }
// chai()

//arrow function

const chai = () => {
    let username = "Pulkit"
    console.log(this.username); //undefined

}
//chai();

// const addnum = (num1 , num2) => {
//     return num1 + num2;
// }

//console.log(addnum(3,4));

//Implicit return
const addnum = (num1 , num2) => (num1 + num2); //no need to use return keyword here

const objectreturn = (num1 , num2) => ({username : "Pulkit"});

console.log(objectreturn(3,4)); 

//need to use return in arrow function when using {}
//otherwise it's not needed
//to return objects they need to be in {} inside ()

