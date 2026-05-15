let a = 300

// if(true){
//     const a = 10  //if const/let not used then it will take a as var and turn it global
//     console.log("Inner " , a);
// }
// console.log(a);

// {} are the scope
// in block scope only let and const are limited to that block but var is not

function one(){
    const username = "John"
    
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website) will give error as out of scope  
    two() //will print username , if not executed then won't return anything
}   
//one();
  

// +++++++++++++++ Interesting Concept++++++++++++++++++++


newone(5) //declaration hone se pehle bhi call kar sakte hain because hoisting
function newone(num){
    return num+1;
}

const newtwo = function(num){
    return num+2;
} 

newtwo(5) //if function is declared using a variable then it cannot be called before declaration

 

