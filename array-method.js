// Array Method in JS

// length - returns array length
let arr = [1, 2, 3];
console.log(arr.length); // 3

// push() - adds element to end, returns new length
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// pop() - removes last element, returns removed element
let last = arr.pop();
console.log(last); // 4
console.log(arr); // [1, 2, 3]

// unshift() - adds element to start, returns new length
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

// shift() - removes first element, returns removed element
let first = arr.shift();
console.log(first); // 0
console.log(arr); // [1, 2, 3]

// concat() - merges arrays
let arr2 = [4, 5];
let merged = arr.concat(arr2);
console.log(merged); // [1, 2, 3, 4, 5]

// join() - joins elements with separator
console.log(arr.join("-")); // "1-2-3"

// slice() - extracts portion, returns new array
let sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]

// splice() - adds/removes elements
arr.splice(1, 1, 99); // remove 1 element at index 1, add 99
console.log(arr); // [1, 99, 3]

// map() - creates new array with transformed elements
let doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 198, 6]

// filter() - creates new array with elements that pass test
let filtered = arr.filter(x => x > 2);
console.log(filtered); // [99, 3]

// reduce() - reduces array to single value
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 103

// reduceRight() - reduces from right to left
let sumRight = arr.reduceRight((acc, curr) => acc + curr, 0);
console.log(sumRight); // 103

// forEach() - executes function for each element
arr.forEach(x => console.log(x)); // 1, 99, 3

// find() - returns first element that passes test
let found = arr.find(x => x > 10);
console.log(found); // 99

// findIndex() - returns index of first element that passes test
let foundIndex = arr.findIndex(x => x > 10);
console.log(foundIndex); // 1

// findLast() - returns last element that passes test
let foundLast = arr.findLast(x => x > 1);
console.log(foundLast); // 3

// findLastIndex() - returns index of last element that passes test
let foundLastIndex = arr.findLastIndex(x => x > 1);
console.log(foundLastIndex); // 2

// indexOf() - returns first index of element
console.log(arr.indexOf(99)); // 1

// lastIndexOf() - returns last index of element
console.log(arr.lastIndexOf(3)); // 2

// includes() - checks if element exists
console.log(arr.includes(99)); // true

// some() - checks if any element passes test
console.log(arr.some(x => x > 50)); // true

// every() - checks if all elements pass test
console.log(arr.every(x => x > 0)); // true

// sort() - sorts array (mutates)
let unsorted = [3, 1, 4, 2];
unsorted.sort((a, b) => a - b);
console.log(unsorted); // [1, 2, 3, 4]

// reverse() - reverses array (mutates)
let reversed = [1, 2, 3];
reversed.reverse();
console.log(reversed); // [3, 2, 1]

// fill() - fills array with value
let filled = [1, 2, 3, 4];
filled.fill(0, 1, 3);
console.log(filled); // [1, 0, 0, 4]

// copyWithin() - copies portion within array
let copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(1, 3, 5);
console.log(copyArr); // [1, 4, 5, 4, 5]

// flat() - flattens nested arrays
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(1)); // [1, 2, [3, 4]]
console.log(nested.flat(2)); // [1, 2, 3, 4]

// flatMap() - maps then flattens
let words = ["hello", "world"];
let letters = words.flatMap(word => word.split(""));
console.log(letters); // ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]

// from() - creates array from iterable
let str = "hello";
let arrFrom = Array.from(str);
console.log(arrFrom); // ["h", "e", "l", "l", "o"]

// of() - creates array from arguments
let arrayOf = Array.of(1, 2, 3);
console.log(arrayOf); // [1, 2, 3]

// isArray() - checks if value is array
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false

// keys() - returns iterator of keys
let keys = arr.keys();
for (let key of keys) console.log(key); // 0, 1, 2

// values() - returns iterator of values
let values = arr.values();
for (let val of values) console.log(val); // 1, 99, 3

// entries() - returns iterator of key-value pairs
let entries = arr.entries();
for (let entry of entries) console.log(entry); // [0, 1], [1, 99], [2, 3]

// at() - returns element at index (supports negative)
console.log(arr.at(-1)); // 3

// with() - returns new array with element replaced
let newArr = arr.with(1, 100);
console.log(newArr); // [1, 100, 3]

// toReversed() - returns reversed array without mutating
let original = [1, 2, 3];
let reversedNew = original.toReversed();
console.log(original); // [1, 2, 3]
console.log(reversedNew); // [3, 2, 1]

// toSorted() - returns sorted array without mutating
let sortedNew = original.toSorted((a, b) => b - a);
console.log(original); // [1, 2, 3]
console.log(sortedNew); // [3, 2, 1]

// toSpliced() - returns spliced array without mutating
let splicedNew = original.toSpliced(1, 1, 99);
console.log(original); // [1, 2, 3]
console.log(splicedNew); // [1, 99, 3]

// group() - groups elements by condition
let people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 25 }
];
let grouped = people.group(person => person.age);
console.log(grouped);
// { 25: [{ name: "John", age: 25 }, { name: "Bob", age: 25 }], 30: [{ name: "Jane", age: 30 }] }

// groupToMap() - groups to Map
let groupedMap = people.groupToMap(person => person.age);
console.log(groupedMap); // Map { 25 => [...], 30 => [...] }

// toString() - converts to string
console.log(arr.toString()); // "1,99,3"

// toLocaleString() - converts to locale string
let dateArr = [new Date(), 1000];
console.log(dateArr.toLocaleString()); // locale-specific format
