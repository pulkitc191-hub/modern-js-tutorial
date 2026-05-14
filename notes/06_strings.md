# JavaScript Strings - Notes

A String is a sequence of characters used to represent text. In JavaScript, strings are a **PRIMITIVE** data type, but JavaScript temporarily wraps them in a String object when you call methods on them. This is called **"Auto-boxing"** or **"Primitive Wrapping"**.

---

## 1. Ways to Create Strings

### Method 1 — String Literal (most common):
```javascript
let name = "Pulkit";       // Double quotes
let city = 'Delhi';        // Single quotes
```

### Method 2 — String Object (using `new String()`):
```javascript
const gamename = new String("Pulkit");
```

> **Note:**
> - String literals are of type `"string"` (primitive).
> - String objects (`new String()`) are of type `"object"`.
> - Use string literals unless you specifically need an object.
> - `typeof "Pulkit"`           --> `"string"`
> - `typeof new String("Pulkit")` --> `"object"`

---

## 2. Template Literals (String Interpolation) — ES6+
Use backticks (`) instead of quotes to embed expressions directly inside a string using `${...}`.

**Syntax:**
```javascript
`Hello my name is ${name} and I am ${age} years old`
```

### Why use Template Literals?
- Avoids messy string concatenation with `+` operators.
- Supports multi-line strings without using `\n`.
- Can embed any JavaScript expression inside `${}`.

**Example:**
```javascript
let name = "Pulkit";
let age  = 21;
console.log(`Hello my name is ${name} and I am ${age} years old`);
// Output: Hello my name is Pulkit and I am 21 years old
```

---

## 3. Accessing String Properties

| Property | Description | Example |
| :--- | :--- | :--- |
| `.length` | Returns total number of characters | `"Pulkit".length`  --> `6` |
| `[index]` | Returns character at that index | `"Pulkit"[0]`      --> `"P"` |

*Strings are **ZERO-INDEXED** (first character is at index 0).*

---

## 4. Common String Methods

| Method | Description | Example (`gamename = "Pulkit"`) |
| :--- | :--- | :--- |
| `.toUpperCase()` | Converts entire string to uppercase | `"PULKIT"` |
| `.toLowerCase()` | Converts entire string to lowercase | `"pulkit"` |
| `.charAt(index)` | Returns character at the given index | `.charAt(0)` --> `"P"` |
| `.indexOf('char')` | Returns index of FIRST occurrence of char | `.indexOf('t')` --> `5` |
| `.lastIndexOf('char')` | Returns index of LAST occurrence of char | `.lastIndexOf('l')` --> `2` |
| `.includes('str')` | Returns true if string contains 'str' | `.includes('ul')` --> `true` |
| `.startsWith('str')` | Returns true if string starts with 'str' | `.startsWith('Pu')` --> `true` |
| `.endsWith('str')` | Returns true if string ends with 'str' | `.endsWith('it')` --> `true` |
| `.substring(start, end)` | Returns part of string (end NOT included) | `.substring(0, 3)` --> `"Pul"` |
| `.slice(start, end)` | Like substring but also accepts **NEGATIVE** index | `.slice(-3)` --> `"kit"` |
| `.trim()` | Removes whitespace from both ends | `"  hi  ".trim()` --> `"hi"` |
| `.trimStart()` | Removes whitespace from the START only | `"  hi  ".trimStart()` --> `"hi  "` |
| `.trimEnd()` | Removes whitespace from the END only | `"  hi  ".trimEnd()` --> `"  hi"` |
| `.replace('old','new')` | Replaces FIRST occurrence of 'old' with 'new' | `.replace('P','K')` --> `"Kulkit"` |
| `.replaceAll('old','new')`| Replaces ALL occurrences of 'old' with 'new' | `"aa".replaceAll('a','b')` --> `"bb"` |
| `.split('delimiter')` | Splits string into an Array by delimiter | `"a,b,c".split(',')` --> `["a","b","c"]` |
| `.concat(str1, str2)` | Joins strings together | `"Pul".concat("kit")` --> `"Pulkit"` |
| `.repeat(n)` | Repeats the string n times | `"ab".repeat(3)` --> `"ababab"` |
| `.padStart(len, 'char')` | Pads the START to reach total length | `"5".padStart(3,'0')` --> `"005"` |
| `.padEnd(len, 'char')` | Pads the END to reach total length | `"5".padEnd(3,'0')` --> `"500"` |
| `.charCodeAt(index)` | Returns UTF-16 code of character at index | `"A".charCodeAt(0)` --> `65` |
| `.at(index)` | Like `[index]` but supports negative index | `"Pulkit".at(-1)` --> `"t"` |

---

## 5. `substring()` vs `slice()` — Key Difference

### `substring(start, end)`:
- Cannot handle negative indices (treats them as 0).
- If start > end, it swaps the two arguments automatically.
- `gamename.substring(0, 3)`  --> `"Pul"`

### `slice(start, end)`:
- Supports **NEGATIVE** indices (counts from the end of the string).
- If start > end, it returns an empty string (does NOT swap).
- `gamename.slice(0, 3)`      --> `"Pul"`
- `gamename.slice(-3)`        --> `"kit"` (last 3 characters)
- `gamename.slice(-6, -3)`    --> `"Pul"`

---

## 6. String Immutability
Strings in JavaScript are **IMMUTABLE**. This means once a string is created, its characters cannot be changed. String methods do **NOT** modify the original string — they always return a **NEW** string.

**Example:**
```javascript
let str = "hello";
str.toUpperCase();    // Does NOT change 'str'
console.log(str);     // Still "hello"

let upper = str.toUpperCase();  // Correct way — store the result
console.log(upper);  // "HELLO"
```

---

## 7. Escape Characters

| Escape | Meaning |
| :--- | :--- |
| `\'` | Single quote |
| `\"` | Double quote |
| `\\` | Backslash |
| `\n` | New line |
| `\t` | Tab (horizontal) |
| `\r` | Carriage return |

---

## 8. String Concatenation (Old Way vs New Way)

### Old way (`+` operator):
```javascript
"Hello " + name + ", you are " + age + " years old."
```

### New way (Template Literals — Preferred):
```javascript
`Hello ${name}, you are ${age} years old.`
```

- Template literals are cleaner, more readable, and less error-prone, especially with multiple variables.

---

## SUMMARY
- Strings are primitive but have access to methods via auto-boxing.
- Use string literals (`""` or `''`) for regular strings.
- Use template literals (`` ` ``) for dynamic strings with variables/expressions.
- String methods **NEVER** modify the original — they return a new string.
- Use `.slice()` over `.substring()` when you need negative index support.
- `.trim()` is useful for cleaning user input from forms.
