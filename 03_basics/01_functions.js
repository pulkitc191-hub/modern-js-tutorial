//function is a block of code that performs a specific task

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2);
// }

//arguments and parameters(in the declaration)
// addTwoNumbers(); // NaN
// addTwoNumbers(3 , 4); // 7
// addTwoNumbers(3 , "4"); // "34"
// addTwoNumbers(3 , "a"); //3a

// function addTwoNumbers(num1 , num2){
//     let result = num1 + num2
//     return result;  //return statement is used to return a value from a function and exit from that function call   
// }
// const result = addTwoNumbers(3 , 5)
// console.log("Result is :", result)

function greetingMessage(username){
    if(!username){
        return 'Please provide a username'
    }
    return `Hello ${username} , Welcome to our website`
}

// console.log(greetingMessage("John")); //returns the statement with name
// console.log(greetingMessage("")); //returns the statement with empty string
// console.log(greetingMessage()); //if statement is executed

//username = "sam" is the default value of username , if no value is passed it will take the default value otherwise the value passed


function calculateCartPrice(...num1){
    //... is the rest operator used to pass multiple arguments 
    // it collects all the arguments in the form of an array
    return num1;
}

// console.log(calculateCartPrice(200 , 500 , 600 , 234));

const user = {
    username : "john",
    price : 999,
    ages : 20
}

function handleobject (anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)   
}

//handleobject(user);
// handleobject({
//     username : "sam",
//     age : 20
// });

const newarray= [200 , 300 , 409 , 500]

function getvalue(getarr){
    return getarr[2];
}

console.log(getvalue(newarray));
console.log(getvalue([400, 500]));


