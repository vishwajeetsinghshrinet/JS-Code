# JavaScript Quick Revision Guide

**Author:** Vishwajeet Singh  
**Purpose:** Quick Revision

---

## Comments

### Single Line Comment
- Starts with `//`

### Multi-line Comment
- Starts with `/*` and ends with `*/`

---

## Operators in JavaScript

### 1. Arithmetic Operators
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (remainder)
- `**` Exponent (power)

### 2. Assignment Operators
- `=` Assign
- `+=` Add & assign
- `-=` Subtract & assign
- `*=` Multiply & assign
- `/=` Divide & assign
- `%=` Modulus & assign
- `**=` Power & assign

### 3. Comparison Operators
- `==` Equal to
- `===` Strict equal (value & type)
- `!=` Not equal
- `!==` Strict not equal
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal
- `<=` Less than or equal

### 4. Logical Operators
- `&&` AND
- `||` OR
- `!` NOT

### 5. Unary Operators
- `++` Increment
- `--` Decrement
- `typeof` Check type

### 6. Ternary Operator
- `condition ? value1 : value2`

### 7. Nullish Coalescing Operator
- `??`

### 8. Optional Chaining
- `?.`

### 9. Bitwise Operators
- `&` AND
- `|` OR
- `^` XOR
- `~` NOT
- `<<` Left shift
- `>>` Right shift
- `>>>` Zero-fill right shift

### 10. String Operator
- `+` Concatenation (e.g., `"Hello" + " World"`)

### 11. Type Operators
- `typeof`
- `instanceof`

## Creating Dates
- `new Date()` - Current date and time
- `new Date(year, month, day)` - Month 0-11 (January = 0)
- `new Date("2024-01-15")` - Date string
- `new Date(timestamp)` - Milliseconds since Jan 1, 1970

---

## Get Methods

### Date Components
- `getFullYear()` - Year (4 digits)
- `getMonth()` - Month (0-11)
- `getDate()` - Day of month (1-31)
- `getDay()` - Day of week (0-6, Sunday = 0)
- `getHours()` - Hours (0-23)
- `getMinutes()` - Minutes (0-59)
- `getSeconds()` - Seconds (0-59)
- `getMilliseconds()` - Milliseconds (0-999)
- `getTime()` - Timestamp (milliseconds since epoch)
- `getTimezoneOffset()` - Timezone offset in minutes

### UTC Methods (Universal Time)
- `getUTCFullYear()`
- `getUTCMonth()`
- `getUTCDate()`
- `getUTCHours()`
- `getUTCMinutes()`
- `getUTCSeconds()`

---

## Set Methods

- `setFullYear(year, month, day)`
- `setMonth(month, day)`
- `setDate(day)`
- `setHours(hours, minutes, seconds, ms)`
- `setMinutes(minutes, seconds, ms)`
- `setSeconds(seconds, ms)`
- `setMilliseconds(ms)`
- `setTime(timestamp)`

### UTC Set Methods
- `setUTCFullYear()`
- `setUTCMonth()`
- `setUTCDate()`
- `setUTCHours()`
- `setUTCMinutes()`
- `setUTCSeconds()`

---

## Conversion Methods

- `toString()` - Full date string
- `toDateString()` - Date only
- `toTimeString()` - Time only
- `toISOString()` - ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
- `toUTCString()` - UTC format
- `toLocaleString()` - Locale-specific full string
- `toLocaleDateString()` - Locale-specific date
- `toLocaleTimeString()` - Locale-specific time

---

## Static Methods

- `Date.now()` - Current timestamp
- `Date.parse(dateString)` - Parse date to timestamp
- `Date.UTC(year, month, day, hours, minutes, seconds, ms)` - UTC timestamp

---

## Date Arithmetic

### Add Days
```js
date.setDate(date.getDate() + 7);
