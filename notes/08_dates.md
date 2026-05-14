# Dates in JavaScript - Notes

Dates in JavaScript are represented by the `Date` object. They are calculated from the Unix Epoch (January 1, 1970, UTC).

---

## 1. Creating Dates

### Current Date & Time
```javascript
let myDate = new Date();
console.log(typeof myDate); // "object"
```

### Specific Dates
You can create a date by passing arguments (Year, Month, Date, Hours, Minutes, etc.).
```javascript
// Months are 0-indexed (0 = Jan, 1 = Feb, etc.)
let myCreatedDate = new Date(2023, 0, 12); 
console.log(myCreatedDate.toDateString()); // "Thu Jan 12 2023"

// Passing a string (usually 1-indexed for months if in "YYYY-MM-DD" format)
let anotherDate = new Date("2023-01-12");
```

---

## 2. Date Methods (Formatting)

| Method | Output Example |
| :--- | :--- |
| `.toString()` | `Wed May 14 2026 16:41:19 GMT+0530...` |
| `.toDateString()` | `Wed May 14 2026` |
| `.toLocaleString()` | `14/5/2026, 4:41:19 pm` |
| `.toLocaleDateString()`| `14/5/2026` |
| `.toJSON()` | `2026-05-14T11:11:19.000Z` |
| `.toISOString()` | `2026-05-14T11:11:19.000Z` |

---

## 3. Timestamps

Timestamps are used to compare dates or measure time differences. They represent the number of **milliseconds** elapsed since Jan 1, 1970.

```javascript
let myTimeStamp = Date.now(); // Current time in ms
console.log(myTimeStamp);

let myCreatedDate = new Date(2023, 0, 12);
console.log(myCreatedDate.getTime()); // ms value of specific date
```

> **Tip:** To get seconds instead of milliseconds: `Math.floor(Date.now() / 1000)`

---

## 4. Extraction (Getters)

```javascript
let newDate = new Date();

console.log(newDate.getDate());      // Day of month (1-31)
console.log(newDate.getDay());       // Day of week (0-6, 0 is Sunday)
console.log(newDate.getMonth() + 1); // Month (0-11, add 1 for human reading)
console.log(newDate.getFullYear());  // 4-digit year
```

---

## 5. Advanced Formatting (`toLocaleString`)

The `.toLocaleString()` method is highly customizable using an options object.

```javascript
newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "numeric",
})
```

---

## 6. Important Notes

- **0-Indexing:** In `new Date(Y, M, D)`, the month is 0-indexed. In a string format like `"2023-01-12"`, it is 1-indexed.
- **Complexity:** The built-in `Date` object is often considered difficult to work with due to timezone issues and its "mutable" nature.
- **Future:** The **Temporal API** is currently a proposal (and available via polyfills) meant to eventually replace the `Date` object with a much more robust system.
