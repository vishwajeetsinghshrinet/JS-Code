// Memory in JavaScript

// 1. Stack Memory (Primitive → copy)
let a = 10;
let b = a;
b = 20; // a not affected

// 2. Heap Memory (Non-primitive → reference)
let obj1 = { name: "Vishwajeet" };
let obj2 = obj1;

obj2.name = "Singh"; // obj1 also changes
