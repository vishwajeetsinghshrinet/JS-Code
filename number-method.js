// Here are the some common number + math + bigint methods

// Number Properties (on Number object, not instance)
Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_VALUE; // 5e-324
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.POSITIVE_INFINITY; // Infinity
Number.NEGATIVE_INFINITY; // -Infinity
Number.NaN; // NaN
Number.EPSILON; // 2.220446049250313e-16

// isNaN() - checks if value is NaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false

// isFinite() - checks if value is finite
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false

// isInteger() - checks if value is integer
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false

// isSafeInteger() - checks if value is safe integer
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false

// parseFloat() - parses string to float
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("10px")); // 10

// parseInt() - parses string to integer
console.log(Number.parseInt("10")); // 10
console.log(Number.parseInt("10.99")); // 10
console.log(Number.parseInt("1010", 2)); // 10 (binary)

// toString() - converts number to string
let num = 255;
console.log(num.toString()); // "255"
console.log(num.toString(16)); // "ff" (hexadecimal)
console.log(num.toString(2)); // "11111111" (binary)

// toFixed() - formats with decimal places
let pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14"
console.log(pi.toFixed(0)); // "3"

// toPrecision() - formats to specified length
console.log(pi.toPrecision(2)); // "3.1"
console.log(pi.toPrecision(4)); // "3.142"

// toExponential() - returns exponential notation
console.log(pi.toExponential(2)); // "3.14e+0"
console.log((12345).toExponential(2)); // "1.23e+4"

// toLocaleString() - returns string with locale formatting
let largeNum = 1234567.89;
console.log(largeNum.toLocaleString()); // "1,234,567.89" (US)
console.log(largeNum.toLocaleString("de-DE")); // "1.234.567,89"
console.log(largeNum.toLocaleString("en-IN")); // "12,34,567.89"

// valueOf() - returns primitive value
let numObj = new Number(100);
console.log(numObj.valueOf()); // 100

// Math object methods (most common)
Math.round(4.7); // 5 (rounds to nearest)
Math.floor(4.7); // 4 (rounds down)
Math.ceil(4.2); // 5 (rounds up)
Math.trunc(4.9); // 4 (removes decimal)
Math.abs(-5); // 5 (absolute value)
Math.min(1, 2, 3); // 1
Math.max(1, 2, 3); // 3
Math.random(); // 0.0 to 0.999
Math.pow(2, 3); // 8
Math.sqrt(16); // 4
Math.cbrt(27); // 3 (cube root)
Math.exp(1); // 2.71828
Math.log(10); // natural log
Math.log10(100); // 2 (base 10)
Math.log2(8); // 3 (base 2)
Math.sin(0); // 0
Math.cos(0); // 1
Math.tan(0); // 0
Math.asin(0); // 0
Math.acos(1); // 0
Math.atan(0); // 0
Math.atan2(0, 1); // 0
Math.sign(-5); // -1 (returns -1, 0, or 1)
Math.hypot(3, 4); // 5 (Euclidean distance)
Math.clz32(1); // 31 (leading zeros in 32-bit)
Math.imul(2, 3); // 6 (32-bit multiplication)
Math.fround(1.337); // 1.3370000123977661 (32-bit float)

// BigInt (for large integers)
BigInt(9007199254740991); // 9007199254740991n
BigInt("9007199254740991"); // 9007199254740991n
9007199254740991n + 1n; // 9007199254740992n
