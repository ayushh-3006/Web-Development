// hoisting

"use strict";

// let a; // effect of strict gives error
let a;
let b;
let c;

a = 10;
console.log(a);
console.log(b);
console.log(c);

b = 15;
console.log(a);
console.log(b);
console.log(c);

c = 20;
console.log(a);
console.log(b);
console.log(c);

abc();

function abc() {
  console.log("i am the function");
}

