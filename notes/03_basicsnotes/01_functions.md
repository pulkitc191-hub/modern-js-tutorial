# JavaScript Functions

## What is a Function?
A **function** is a reusable block of code that performs a specific task.

```js
function functionName(parameters) {
    // code
    return value;
}
```

---

## Parameters vs Arguments
- **Parameters** → placeholders defined in the function declaration
- **Arguments** → actual values passed when calling the function

```js
function addTwoNumbers(num1, num2) {  // num1, num2 are parameters
    return num1 + num2;
}

addTwoNumbers(3, 4);   // 3, 4 are arguments → 7
addTwoNumbers(3, "4"); // type coercion → "34"
addTwoNumbers();       // NaN (no args passed)
```

---

## `return` Statement
- Returns a value from the function **and exits** the function call immediately.
- Without `return`, the function returns `undefined`.

```js
function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}
const result = addTwoNumbers(3, 5); // 8
```

---

## Default / Guard Check with `if(!param)`
If no argument is passed, JavaScript sets it to `undefined` (falsy). You can guard against this:

```js
function greetingMessage(username) {
    if (!username) {
        return 'Please provide a username';
    }
    return `Hello ${username}, Welcome to our website`;
}
```

> **Tip:** You can also use default parameters: `function greet(username = "Guest")` — if no value is passed, it falls back to `"Guest"`.

---

## Rest Operator (`...`)
The `...` (rest operator) collects **all passed arguments** into a single array.

```js
function calculateCartPrice(...num1) {
    return num1; // returns an array
}

calculateCartPrice(200, 500, 600, 234); // [200, 500, 600, 234]
```

> **Note:** The rest parameter must always be the **last** parameter.

---

## Passing Objects to Functions
Objects are passed **by reference** — the function works on the same object in memory.

```js
const user = { username: "john", price: 999, age: 20 };

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user);
handleObject({ username: "sam", age: 20 }); // can also pass inline
```

---

## Passing Arrays to Functions
Arrays are also passed by reference. Access elements using index.

```js
const newarray = [200, 300, 409, 500];

function getvalue(getarr) {
    return getarr[2]; // returns 3rd element
}

getvalue(newarray);    // 409
getvalue([400, 500]);  // undefined (index 2 doesn't exist)
```
