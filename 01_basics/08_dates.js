// all dates are calculated from Jan 1 1970 , UTC 


let  myDate = new Date(); //type of date is object
console.log(myDate); //gives the full date with time
console.log(myDate.toDateString()); //gives the date in string format
console.log(myDate.toString()); //gives the date in string format
console.log(myDate.toJSON()); //gives the date in json format
console.log(myDate.toLocaleString()); //gives the date in local format

let newdate = new Date(2023 , 0 , 12) //months starts from 0 and format is year , month , date
console.log(newdate.toDateString()); //gives the date in string format 

newdate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "numeric",
})

