//Immediately Invoked Function Expression (IIFE)
//purpose : to avoid the global scope pollution and execute function immediately 

(function monster(){
    console.log(`hello world`);
})(); //wrapping the function in {} and calling it right after is IIFE

//it is wrapped in () so that it is not considered as a function declaration....IT IS TREATED AS AA SEPERATE SCOPE and iife function should always contain a ; to mark where the code should end
(() => {
    console.log(`hello world 2`);
})(); //IIFE using arrow function

((name) => {
    console.log(`Welcome , Master ${name}`);
})("Pulkit"); //passing the parameter here


const price = 100;
