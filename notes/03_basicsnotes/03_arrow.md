# Arrow Functions & `this` Keyword

---

## `this` Keyword

`this` refers to the **current execution context** — i.e., the object that is currently calling the function.

### `this` inside an Object Method
When a regular function is used as an object method, `this` points to that **object**.

```js
const user = {
    username: "Hitesh",
    price: 999,

    welcomemessage: function () {
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomemessage(); // "Hitesh , welcome to website"

user.username = "Pulkit";  // context changes
user.welcomemessage();     // "Pulkit , welcome to website"
```

> `this.username` always picks up the **current value** of `username` in the object at the time of the call.

---

### `this` in Global Scope

| Environment | `console.log(this)` output |
|-------------|---------------------------|
| Node.js     | `{}` (empty object)       |
| Browser     | `window` object           |

```js
console.log(this); // {} in Node.js
```

---

### `this` in a Regular Function

Inside a regular (non-method) function, `this` refers to the **global object** — not the local variables inside the function.

```js
function chai() {
    let username = "Hitesh";
    console.log(this.username); // undefined — `this` is global, not this function
}
chai();
```

> ⚠️ Even though `username` is declared inside `chai()`, `this.username` looks for it on the **global object**, not inside the function scope.

---

## Arrow Functions

Arrow functions use the `=>` syntax and are a shorter way to write functions.

```js
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function equivalent
const add = (a, b) => {
    return a + b;
};
```

### `this` in Arrow Functions
Arrow functions **do NOT have their own `this`**. They inherit `this` from the surrounding (lexical) scope.

```js
const chai = () => {
    let username = "Pulkit";
    console.log(this.username); // undefined
    // `this` here is the outer/global context, NOT the arrow function itself
};
chai();
```

> This is why arrow functions are **not suitable as object methods** if you need `this` to refer to the object.

---

## Implicit Return in Arrow Functions

### Explicit Return (with `{}`)
When you use `{}`, you **must** write `return` explicitly.

```js
const addnum = (num1, num2) => {
    return num1 + num2; // explicit return required
};
```

### Implicit Return (with `()`)
When you skip `{}` and use `()` instead, the expression is **automatically returned** — no `return` keyword needed.

```js
const addnum = (num1, num2) => (num1 + num2); // implicit return

console.log(addnum(3, 4)); // 7
```

You can also skip the parentheses entirely for a single expression:
```js
const double = (n) => n * 2; // also valid
```

---

## Returning Objects from Arrow Functions

Objects use `{}` which conflicts with the function body syntax. To implicitly return an object, **wrap it in `()`**.

```js
// ❌ Wrong — JS thinks {} is the function body, not an object
const getUser = () => { username: "Pulkit" };

// ✅ Correct — wrap object in ()
const getUser = () => ({ username: "Pulkit" });

console.log(getUser()); // { username: 'Pulkit' }
```

---

## Quick Summary

| Feature | Regular Function | Arrow Function |
|---------|-----------------|----------------|
| `this` | Own `this` (dynamic) | Inherits from outer scope (lexical) |
| As object method | ✅ Works correctly | ❌ Avoid (`this` won't be the object) |
| Syntax | `function name() {}` | `const name = () => {}` |
| Implicit return | ❌ Not available | ✅ Use `()` instead of `{}` |
| Return object | `return { key: val }` | `() => ({ key: val })` |
