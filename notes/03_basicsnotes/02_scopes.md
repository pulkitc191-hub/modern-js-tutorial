# JavaScript Scopes

## What is Scope?
Scope determines **where a variable is accessible** in your code.
`{}` curly braces define a **block scope**.

---

## `var` vs `let` / `const` in Block Scope

| Keyword | Block Scoped? | Behavior |
|---------|--------------|----------|
| `var`   | ❌ No        | Leaks out of blocks (becomes global/function-scoped) |
| `let`   | ✅ Yes       | Limited to the block `{}` it's declared in |
| `const` | ✅ Yes       | Limited to the block `{}` it's declared in |

```js
let a = 300;

if (true) {
    const a = 10;         // block-scoped, doesn't affect outer `a`
    console.log("Inner", a); // 10
}

console.log(a); // 300 (outer `a` is unchanged)
```

> ⚠️ If you use `var` inside the block instead of `const/let`, it overwrites the outer `a`.

---

## Nested Functions (Lexical Scope / Closure)
An **inner function has access to the outer function's variables**, but not vice versa.

```js
function one() {
    const username = "John";

    function two() {
        const website = "youtube";
        console.log(username); // ✅ can access outer variable
    }

    // console.log(website); // ❌ Error — `website` is out of scope here
    two();
}

one();
```

This is called **lexical scoping** — scope is determined by where the function is **defined**, not where it's called.

---

## Hoisting

### Function Declarations are Hoisted
A regular function declaration is **moved to the top** of its scope at runtime, so you can call it **before** its definition.

```js
newone(5); // ✅ Works fine — hoisting

function newone(num) {
    return num + 1;
}
```

### Function Expressions are NOT Hoisted
When a function is stored in a variable (`const/let/var`), only the **variable declaration** is hoisted — not its value.

```js
newtwo(5); // ❌ Error: Cannot access 'newtwo' before initialization

const newtwo = function(num) {
    return num + 2;
};
```

> **Rule of thumb:** Always define function expressions **before** calling them.

---

## Quick Summary

| Concept | Key Point |
|---------|-----------|
| `let`/`const` | Block-scoped |
| `var` | Function/globally scoped, avoid in modern JS |
| Lexical Scope | Inner functions access outer variables, not vice versa |
| Hoisting | Function declarations hoisted ✅ / Function expressions NOT ❌ |
