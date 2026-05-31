//if

if(true){
//execute this
}

if(false){
//doesn't execute this 
}


// === - strict equality (checks both value and type)
// !== - strict inequality (checks both value and type) 

// const score = 100
// if(score > 50){
//     const power = "fly"
//     console.log(`user power is : ${power}` );
// }
// console.log(`user power is : ${power}` ); //error because its in scope of if block 

const balance = 1000
if(balance > 100) console.log("less than 100"); //implicit

if(balance > 100){
    console.log("less than 100");
} else if(balance === 500){
    console.log("equals to 500");
} else {
    console.log("greater than 500");
}

