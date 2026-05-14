const student = new Object();

student.name = "Pulkit";
student.age = 25;
student.id = "123abc";
student.isLoggedIn = true;

//console.log(student);


const regular_user = {
    email: "someone@gmail.com",
    fullname: {   //nested object , use . to access nested objects
        firstname: "Divyanshu",
        middlename: "Singh",
        lastname: "Verma"
    }
}

// console.log(regular_user.fullname.firstname);

const obj1 = {1: 'a' , 2: 'b'}
const obj2 = {3: 'c' , 4: 'd'}
// const obj3 = Object.assign({},obj1 , obj2); //Objects.assign({}, obj1, obj2) is used to merge two or more objects into a new object. 
// console.log(obj3);
const obj4 = {...obj1 , ...obj2}; // spread operator is more preferred to merge objects
//console.log(obj4);


//console.log(Object.keys(student)); //returns array of keys
//console.log(Object.values(student)); //returns array of values
//console.log(Object.entries(student)); //returns array of key-value pairs

//console.log(student.hasOwnProperty('name')); //checks if object has a property

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor); //dot notation
// console.log(course['price']); //bracket notation
const {courseInstructor : Instructor} /*what needed from the object*/ = course /*from which object*/; // destructuring of object
console.log(Instructor);

