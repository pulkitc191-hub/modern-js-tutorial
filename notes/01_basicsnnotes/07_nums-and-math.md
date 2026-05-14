# Numbers and Maths in JavaScript - Notes

In JavaScript, numbers are a primitive data type. Like strings, they have a wrapper object (`Number`) that provides various utility methods. The `Math` object is a built-in object that has properties and methods for mathematical constants and functions.

---

## 1. Numbers

### Creating Numbers
```javascript
const score = 400;                     // Primitive (Number)
const balance = new Number(100);        // Number Object
```
> **Note:** Using `new Number()` creates an object. It is generally recommended to use number literals.

### Common Number Methods

| Method | Description | Example |
| :--- | :--- | :--- |
| `.toString()` | Converts a number to a string | `balance.toString()` |
| `.toFixed(n)` | Returns string with `n` decimal places (useful for prices) | `(10).toFixed(2)` -> `"10.00"` |
| `.toPrecision(n)` | Returns string formatted to `n` significant figures | `19.99.toPrecision(3)` -> `"20.0"` |
| `.toExponential()`| Returns string in scientific notation | `123.toExponential()` -> `"1.23e+2"` |
| `.toLocaleString()`| Returns formatted string based on locale (adds commas) | `1000000.toLocaleString('en-IN')` |

### Important Constants & Methods
- `Number.MAX_VALUE`: Largest possible numeric value in JS.
- `Number.MIN_VALUE`: Smallest possible positive numeric value.
- `Number.MAX_SAFE_INTEGER`: `(2^53 - 1)`
- `Number.isInteger(val)`: Returns true if value is an integer.

---

## 2. Maths Object

The `Math` object is built-in and static (you don't create an instance of it).

### Common Math Methods

| Method | Description | Example |
| :--- | :--- | :--- |
| `Math.abs(x)` | Absolute (positive) value | `Math.abs(-5)` -> `5` |
| `Math.round(x)` | Rounds to nearest integer | `Math.round(4.6)` -> `5` |
| `Math.ceil(x)` | Rounds UP to nearest integer | `Math.ceil(4.2)` -> `5` |
| `Math.floor(x)` | Rounds DOWN to nearest integer | `Math.floor(4.9)` -> `4` |
| `Math.sqrt(x)` | Square root | `Math.sqrt(25)` -> `5` |
| `Math.pow(b, e)`| Power (base ^ exponent) | `Math.pow(2, 3)` -> `8` |
| `Math.min(...)` | Smallest value in a list | `Math.min(2, 5, 1)` -> `1` |
| `Math.max(...)` | Largest value in a list | `Math.max(2, 5, 1)` -> `5` |

---

## 3. Random Number Generation

`Math.random()` returns a floating-point, pseudo-random number in the range **[0, 1)** (0 inclusive, 1 exclusive).

### Generating Random Integers in a Range
To get a random integer between a `min` and `max` value (both inclusive):

```javascript
const min = 10;
const max = 20;

const result = Math.floor(Math.random() * (max - min + 1)) + min;
```

**Breaking down the formula:**
1. `Math.random()`: Gives value like `0.123...`
2. `* (max - min + 1)`: Scales the range to the desired number of integers.
3. `Math.floor(...)`: Removes decimals.
4. `+ min`: Shifts the range from `0` to the `min` value.

---

## 4. Important Gotchas

### Precision Issues
JavaScript uses the IEEE 754 standard for floating-point numbers. This can lead to precision errors with decimals.
```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
```

### NaN (Not a Number)
- `NaN` is technically a "number" type.
- Result of undefined mathematical operations (e.g., `0 / 0` or `Math.sqrt(-1)`).
- Use `Number.isNaN()` to check for it.
