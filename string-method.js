// Useful String Method in JS

// length - returns string length
let str = "Hello";
console.log(str.length); // 5

// toUpperCase() - converts to uppercase
console.log(str.toUpperCase()); // "HELLO"

// toLowerCase() - converts to lowercase
console.log(str.toLowerCase()); // "hello"

// charAt() - returns character at index
console.log(str.charAt(1)); // "e"

// charCodeAt() - returns Unicode of character
console.log(str.charCodeAt(1)); // 101

// at() - returns character at index (supports negative)
console.log(str.at(-1)); // "o"

// slice(start, end) - extracts part of string
console.log(str.slice(1, 4)); // "ell"
console.log(str.slice(-3)); // "llo"

// substring(start, end) - similar to slice (no negative)
console.log(str.substring(1, 4)); // "ell"

// substr(start, length) - extracts based on length
console.log(str.substr(1, 3)); // "ell"

// indexOf() - returns first occurrence index
console.log(str.indexOf("l")); // 2

// lastIndexOf() - returns last occurrence index
console.log(str.lastIndexOf("l")); // 3

// includes() - checks if substring exists
console.log(str.includes("ell")); // true

// startsWith() - checks if starts with substring
console.log(str.startsWith("He")); // true

// endsWith() - checks if ends with substring
console.log(str.endsWith("lo")); // true

// replace() - replaces first match
let text = "Hello World";
console.log(text.replace("World", "JS")); // "Hello JS"

// replaceAll() - replaces all matches
let text2 = "red red red";
console.log(text2.replaceAll("red", "blue")); // "blue blue blue"

// split() - splits string into array
console.log(text.split(" ")); // ["Hello", "World"]

// join() - joins array into string (array method)
console.log(["a", "b", "c"].join("-")); // "a-b-c"

// trim() - removes whitespace from both ends
let spaced = "  Hello  ";
console.log(spaced.trim()); // "Hello"

// trimStart() - removes whitespace from start
console.log(spaced.trimStart()); // "Hello  "

// trimEnd() - removes whitespace from end
console.log(spaced.trimEnd()); // "  Hello"

// padStart() - pads string from start
console.log("5".padStart(3, "0")); // "005"

// padEnd() - pads string from end
console.log("5".padEnd(3, "0")); // "500"

// repeat() - repeats string
console.log("Hi".repeat(3)); // "HiHiHi"

// concat() - joins strings
console.log(str.concat(" ", "World")); // "Hello World"

// match() - matches regex
console.log("Hello123".match(/\d+/)); // ["123"]

// matchAll() - returns iterator of all matches
let matches = "abc123def456".matchAll(/\d+/g);
for (let m of matches) console.log(m[0]); // "123" "456"

// search() - searches regex and returns index
console.log("Hello123".search(/\d+/)); // 5

// toString() - converts to string
let num = 123;
console.log(num.toString()); // "123"

// valueOf() - returns primitive value
console.log(str.valueOf()); // "Hello"

// toLocaleUpperCase() - locale-specific uppercase
console.log("istanbul".toLocaleUpperCase("tr")); // "İSTANBUL"

// toLocaleLowerCase() - locale-specific lowercase
console.log("İSTANBUL".toLocaleLowerCase("tr")); // "istanbul"

// normalize() - Unicode normalization
console.log("\u00F1".normalize("NFC")); // "ñ"

// codePointAt() - returns Unicode code point
console.log("😊".codePointAt(0)); // 128522

// fromCodePoint() - creates string from code points
console.log(String.fromCodePoint(128522)); // "😊"

// raw() - returns raw string
console.log(String.raw`Hello\nWorld`); // "Hello\\nWorld"
