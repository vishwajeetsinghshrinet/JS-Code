// Object Method in JS 

// Object.keys() - returns array of keys
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]

// Object.values() - returns array of values
console.log(Object.values(obj)); // [1, 2, 3]

// Object.entries() - returns array of [key, value] pairs
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]

// Object.fromEntries() - creates object from entries
let entries = [["a", 1], ["b", 2]];
console.log(Object.fromEntries(entries)); // { a: 1, b: 2 }

// Object.assign() - copies properties
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }

// Object.freeze() - prevents modifications
let frozen = { a: 1 };
Object.freeze(frozen);
frozen.a = 2; // fails silently
console.log(frozen.a); // 1

// Object.seal() - prevents adding/deleting properties
let sealed = { a: 1 };
Object.seal(sealed);
sealed.b = 2; // fails
sealed.a = 3; // works
console.log(sealed); // { a: 3 }

// Object.preventExtensions() - prevents adding new properties
let obj2 = { a: 1 };
Object.preventExtensions(obj2);
obj2.b = 2; // fails
console.log(obj2); // { a: 1 }

// Object.is() - compares values
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false

// Object.hasOwn() - checks own property
console.log(Object.hasOwn(obj, "a")); // true
console.log(Object.hasOwn(obj, "d")); // false

// hasOwnProperty() - same as above (instance method)
console.log(obj.hasOwnProperty("a")); // true

// Object.defineProperty() - defines property with descriptors
let person = {};
Object.defineProperty(person, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: true
});
console.log(person.name); // "John"
person.name = "Jane"; // fails silently
console.log(person.name); // "John"

// Object.defineProperties() - defines multiple properties
Object.defineProperties(person, {
  age: { value: 25, writable: true },
  city: { value: "NYC", writable: false }
});

// Object.getOwnPropertyDescriptor() - gets property descriptor
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// { value: "John", writable: false, enumerable: true, configurable: true }

// Object.getOwnPropertyDescriptors() - gets all property descriptors
console.log(Object.getOwnPropertyDescriptors(person));

// Object.getOwnPropertyNames() - returns all property names
console.log(Object.getOwnPropertyNames(obj)); // ["a", "b", "c"]

// Object.getOwnPropertySymbols() - returns symbol properties
let sym = Symbol("id");
obj[sym] = 123;
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(id)]

// Object.keys() - enumerable property names
// Object.values() - enumerable property values
// Object.entries() - enumerable key-value pairs

// Object.create() - creates object with prototype
let proto = { greet() { return "Hello"; } };
let newObj = Object.create(proto);
newObj.name = "John";
console.log(newObj.greet()); // "Hello"

// Object.getPrototypeOf() - gets prototype
console.log(Object.getPrototypeOf(newObj)); // { greet: [Function: greet] }

// Object.setPrototypeOf() - sets prototype
let newProto = { bye() { return "Bye"; } };
Object.setPrototypeOf(newObj, newProto);
console.log(newObj.bye()); // "Bye"

// Object.isExtensible() - checks if object can have new properties
console.log(Object.isExtensible(obj2)); // false

// Object.isFrozen() - checks if object is frozen
console.log(Object.isFrozen(frozen)); // true

// Object.isSealed() - checks if object is sealed
console.log(Object.isSealed(sealed)); // true

// Object.groupBy() - groups object properties
let inventory = [
  { name: "apple", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "banana", type: "fruit" }
];
let grouped = Object.groupBy(inventory, item => item.type);
console.log(grouped);
// { fruit: [{...}, {...}], vegetable: [{...}] }

// Object.values() - values array
// Object.entries() - entries array

// toString() - converts object to string
console.log(obj.toString()); // "[object Object]"

// toLocaleString() - locale-specific string
let dateObj = { date: new Date() };
console.log(dateObj.toLocaleString()); // locale format

// valueOf() - returns primitive value
console.log(obj.valueOf()); // { a: 1, b: 2, c: 3 }


// Function Method in JS

// call() - calls function with this value and arguments
function greet(greeting) {
  return `${greeting}, ${this.name}`;
}
let user = { name: "John" };
console.log(greet.call(user, "Hello")); // "Hello, John"

// apply() - same as call but arguments as array
console.log(greet.apply(user, ["Hi"])); // "Hi, John"

// bind() - returns new function with bound this
let boundGreet = greet.bind(user, "Hey");
console.log(boundGreet()); // "Hey, John"

// toString() - returns function code
function add(a, b) { return a + b; }
console.log(add.toString()); // "function add(a, b) { return a + b; }"

// name - returns function name
console.log(add.name); // "add"

// length - returns number of parameters
console.log(add.length); // 2
