// Boolean Method in JS

// toString() - converts boolean to string
let bool = true;
console.log(bool.toString()); // "true"

// valueOf() - returns primitive value
console.log(bool.valueOf()); // true

// Null Method in JS

// No methods - both are primitives without methods
// But you need to know how to check them:

// Check for null
let n = null;
console.log(n === null); // true

// Check for undefined
let u;
console.log(u === undefined); // true

// Check for null or undefined
console.log(n == null); // true
console.log(u == null); // true

// Nullish coalescing - handles null/undefined
let value = n ?? "default"; // "default"

// Optional chaining - safe property access
let obj = null;
console.log(obj?.name); // undefined (no error)
