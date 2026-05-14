# JavaScript Arrays - Part 1

Arrays are resizable and can contain a mix of different data types in JavaScript. They are **objects** under the hood and use zero-based indexing.

---

## 1. Array Basics

### Declaration
```javascript
const myArr = [0, 1, 2, 3, 4, 5];
const myArr2 = new Array(1, 2, 3, 4);
```

### Shallow vs Deep Copies
- **Shallow Copies:** In JavaScript, array-copy operations create shallow copies. This means the copy shares the same **reference** as the original. Changing a nested value in the copy will affect the original.
- **Deep Copies:** Properties do not share the same references.

---

## 2. Common Array Methods

| Method | Description |
| :--- | :--- |
| `.push(val)` | Adds `val` to the **end** of the array. |
| `.pop()` | Removes the **last** element. |
| `.unshift(val)` | Adds `val` to the **start** (shifts all other elements). |
| `.shift()` | Removes the **first** element. |
| `.includes(val)`| Returns `true` if element exists, else `false`. |
| `.indexOf(val)` | Returns the index of `val`. Returns `-1` if not found. |
| `.join()` | Converts array to a string (comma-separated by default). |

---

## 3. Slice vs Splice (Interview Favorite)

Understanding the difference between these two is crucial:

### `slice(start, end)`
- Returns a **section** of an array.
- **Original array:** Remains **UNCHANGED**.
- **Range:** Includes `start`, but **excludes** `end`.
```javascript
const arr = [0, 1, 2, 3, 4, 5];
const sliceArr = arr.slice(1, 3); // [1, 2]
// arr is still [0, 1, 2, 3, 4, 5]
```

### `splice(start, count)`
- Removes (or replaces) elements from the array.
- **Original array:** **IS MODIFIED** (elements are physically removed).
- **Range:** Includes `start` and removes `count` number of items.
```javascript
const arr = [0, 1, 2, 3, 4, 5];
const spliceArr = arr.splice(1, 3); // [1, 2, 3]
// arr is now [0, 4, 5]
```

---

## 4. Important Considerations
- **Performance:** `unshift()` and `shift()` are slower than `push()` and `pop()` because they require re-indexing the entire array.
- **Prototypes:** Arrays have access to `Array.prototype` methods, but they also inherit from `Object`.

# JavaScript Arrays - Part 2

This section covers merging arrays, dealing with nested structures, and static array methods.

---

## 1. Merging Arrays

### The `concat()` Method
Combines two or more arrays and returns a **new** array.
```javascript
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const allHeros = marvel_heros.concat(dc_heros);
```

### The Spread Operator (`...`) - Preferred
A more modern and flexible way to merge multiple arrays.
```javascript
const all_new_heros = [...marvel_heros, ...dc_heros];
```
> **Tip:** Spread is preferred because it can combine more than two arrays easily: `[...arr1, ...arr2, ...arr3]`.

---

## 2. Handling Nested Arrays

### Accessing Values
For arrays inside arrays, use multiple square brackets:
```javascript
const nested = [1, 2, [3, 4], 5];
console.log(nested[2][0]); // 3
```

### Flattening Arrays (`flat`)
The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); 
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
```

---

## 3. Static Array Methods

| Method | Description | Example |
| :--- | :--- | :--- |
| `Array.isArray()` | Checks if the value is an array. | `Array.isArray([])` -> `true` |
| `Array.from()` | Creates an array from an iterable (string, set, etc.). | `Array.from("ABC")` -> `['A','B','C']` |
| `Array.of()` | Creates an array from a set of values. | `Array.of(1, 2, 3)` -> `[1,2,3]` |

### The `Array.from()` Object Quirk
When trying to convert an object to an array using `Array.from()`, it returns an **empty array `[]`** unless you specify whether to create the array from the keys or the values.
```javascript
console.log(Array.from({name: "Pulkit"})); // Output: []
```

---

## 4. Summary Table: Concat vs Push vs Spread

| Action | Modifies Original? | Result |
| :--- | :--- | :--- |
| `arr1.push(arr2)` | **YES** | Nested array: `[1, 2, [3, 4]]` |
| `arr1.concat(arr2)`| **NO** | New merged array: `[1, 2, 3, 4]` |
| `[...arr1, ...arr2]`| **NO** | New merged array: `[1, 2, 3, 4]` |
