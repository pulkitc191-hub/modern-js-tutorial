# JavaScript Objects - Part 1

Objects are the most fundamental part of JavaScript. They are used to store keyed collections of various data and more complex entities.

---

## 1. Creating Objects

### Object Literal (Non-Singleton)
This is the most common way to create an object.
```javascript
const myUser = {
    name: "Pulkit",
    age: 25,
    location: "Delhi",
    email: "pulkit@google.com",
    isLoggedIn: false
};
```

### Singleton (Constructor)
When an object is created using a constructor, it is a **Singleton**.
```javascript
// Singleton
const tinderUser = new Object(); 
// OR
const singletonUser = Object.create(null);
```

---

## 2. Accessing & Modifying Data

### Dot vs Bracket Notation
- **Dot Notation (`obj.key`):** Simple and common.
- **Bracket Notation (`obj["key"]`):** Required for keys with spaces, special characters, or **Symbols**.

```javascript
console.log(myUser.name);      // Pulkit
console.log(myUser["email"]);  // pulkit@google.com
```

### Using Symbols as Keys
To use a Symbol as an object key, you **must** use square brackets in the declaration.
```javascript
const mySym = Symbol("key1");

const user = {
    [mySym]: "myValue" // Correct way
};

console.log(user[mySym]); // Accessing the symbol
```

---

## 3. Object Immutability

### `Object.freeze()`
Used to "lock" an object. Once frozen, you cannot add, delete, or change any properties.
```javascript
Object.freeze(myUser);
myUser.email = "new@google.com"; // This change will fail silently
```

---

## 4. Functions in Objects

You can add functions to objects just like any other property.

### The `this` Keyword
To access properties of the **same object** from within its own method, use the `this` keyword.
```javascript
myUser.greeting = function() {
    console.log(`Hello, my name is ${this.name}`);
};
```
> **Note:** If you use an arrow function `() => {}`, the `this` keyword will not work as expected because arrow functions do not have their own `this` binding.

---

## 5. Important Differences

| Method | Type | Notes |
| :--- | :--- | :--- |
| `Object.create` | Singleton | Created via constructor. |
| `{}` Literal | Non-Singleton | Standard literal declaration. |
| `Object.freeze()` | Immutable | No changes allowed at all. |
| `Object.seal()` | Semi-Immutable | Can change values, but cannot add/delete keys. |


# JavaScript Objects - Part 2

This section covers nested objects, merging strategies, utility methods, and destructuring.

---

## 1. Nested Objects
Objects can contain other objects. You access them by chaining dots.
```javascript
const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pulkit",
            lastname: "Chawla"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
```

---

## 2. Merging Objects

### `Object.assign()`
Combines multiple source objects into a target object.
```javascript
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// Syntax: Object.assign(target, source1, source2)
const obj3 = Object.assign({}, obj1, obj2);
```

### Spread Operator (`...`) - Preferred
Just like arrays, the spread operator is the most modern and readable way to merge objects.
```javascript
const obj4 = { ...obj1, ...obj2 };
```

---

## 3. Object Utility Methods

These methods are static and are called from the `Object` constructor.

| Method | Returns | Description |
| :--- | :--- | :--- |
| `Object.keys(obj)` | Array | Returns all the keys in the object. |
| `Object.values(obj)`| Array | Returns all the values in the object. |
| `Object.entries(obj)`| Array | Returns nested arrays of `[key, value]` pairs. |
| `obj.hasOwnProperty('p')`| Boolean | Checks if 'p' is a direct property of the object. |

---

## 4. Object Destructuring

Destructuring makes it easy to extract values from objects and assign them to variables, including the ability to create **aliases**.

```javascript
const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
};

// Standard Destructuring
const { courseInstructor } = course;

// Destructuring with an Alias
const { courseInstructor: instructor } = course;

console.log(instructor); // "Hitesh"
```

---

## 5. Important Information

### Optional Chaining (`?.`)
When dealing with deeply nested objects (like data from an API), if a middle property is missing, the code will crash. Optional chaining prevents this.
```javascript
// If fullname doesn't exist, this returns undefined instead of crashing
console.log(regularUser?.fullname?.firstname); 
```

### JSON (JavaScript Object Notation)
In modern web development, data from APIs is usually received in JSON format. JSON is essentially a string representation of an object where **both keys and values (if strings) must be wrapped in double quotes**.
```json
{
    "name": "Pulkit",
    "coursename": "JS",
    "price": "free"
}
```
---
