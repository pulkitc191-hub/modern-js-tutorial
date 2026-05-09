let num = "42";
console.log(typeof num);  //gives the data type

let valuenum = Number(num);   //converts the value from string to number
console.log(valuenum);     
console.log(typeof valuenum);

let score = null
console.log(typeof score);
console.log(Number(score));   //converted null to number and gives output 0

let Score = undefined 
console.log(typeof Score);
console.log(Number(Score));   //converted undefined to number and gives output NaN (Not a Number)

let marks = true
console.log(typeof marks);
console.log(Number(marks));  //converted true to number and gives output 1

let IsLoggedIn = 1
console.log(typeof IsLoggedIn);
console.log(Boolean(IsLoggedIn));  //converted 1 to boolean and gives output true

let farmer = "hitesh"
console.log(typeof farmer);
console.log(Boolean(farmer));  //converted non empty string to boolean and gives output true

let emptyString = ""
console.log(typeof emptyString);
console.log(Boolean(emptyString)); //converted empty string to boolean and gives output false   


let random = 33
stringnumber = String(random)      //converts the value from number to string
console.log(typeof stringnumber);  //gives the data type  
