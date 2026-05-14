const score = 400
console.log(score); //gives value of score

const balance = new Number(10)
console.log(balance); //gives value of score as an object
console.log(balance.toString().length); //converts to string and gives length of string
console.log(balance.toFixed(3)); //returns upto 3 decimal places

const otherNumber = 19.9922
console.log(otherNumber.toPrecision(3)); //returns the number upto given no. of significant figs in string

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN')); //converts to string with comma separation based on Indian locale

const num = new Number(123.456)
console.log(num.toExponential()); //returns the number in scientific notation

//+++++++++++++          MATHS          ++++++++++++++

console.log(Math.abs(-19)); //gives absolute value i.e. convert -ve into +ve
console.log(Math.round(19.5)); //rounds to the nearest integer i.e. greater or smaller based on .5 and greater
console.log(Math.ceil(19.5)); //rounds to the nearest greater integer
console.log(Math.floor(19.5)); //rounds to the nearest smaller integer
console.log(Math.sqrt(25)); //square root
console.log(Math.pow(4, 2)); //power
console.log(Math.min(10 , 20 , 100)); //minimum value
console.log(Math.max(40 , 19 , 19.2)); //maximum value
console.log(Math.random()); //gives any random value between 0 and 1
console.log((Math.random() * 6) + 1); //random value between 1 and 6 (including both) "1 is added to avoid zero value"

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //random value between min and max (including both) "(max - min + 1) is added to include the max value and min is added to define the lowest value "
