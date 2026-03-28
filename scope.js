// Scope in JavaScript

// Scope = where a variable can be accessed

// 1. Global Scope
let a = 10; // accessible everywhere

// 2. Function Scope
function test() {
  let b = 20; // accessible only inside function
}

// 3. Block Scope
if (true) {
  let c = 30; // only inside block
  const d = 40;
}
