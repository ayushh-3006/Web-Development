// 1. Create an anonymous function and assign it to a variable.
const myTask = function () {
  console.log("Task is assigned");
};

// 2. Create an anonymous function that prints "Hello" using a variable.
const sayHello = function () {
  console.log("Hello");
};
sayHello();

// 3. Create an anonymous function that adds two numbers and returns the result.
const add = function (a, b) {
  return a + b;
};

// 4. Call an anonymous function stored in a variable and print the output.
const getGreeting = function () {
  return "Hi there!";
};
console.log(getGreeting());

// 5. Pass an anonymous function inside setTimeout().
setTimeout(function () {
  console.log("This is a simple timeout");
}, 1000);

// 6. Use setTimeout() with an anonymous function to print a message after 2 seconds.
setTimeout(function () {
  console.log("Message after 2 seconds");
}, 2000);

// 7. Create an Immediately Invoked Function (IIFE) using an anonymous function.
(function () {
  const secret = "IIFE is running";
  console.log(secret);
})();

// 8. Write an IIFE that prints a message instantly.
(function () {
  console.log("I am running instantly!");
})();

// 9. Create an anonymous function and store it in a variable, then call it multiple times.
const logCounter = function () {
  console.log("Calling this function...");
};
logCounter();
logCounter();
logCounter();

// 10. Pass an anonymous function as a callback inside another function.
const runProcess = function (callback) {
  console.log("Process started...");
  callback();
};

runProcess(function () {
  console.log("Callback (Anonymous) executed!");
});

// 11. Create an anonymous function that: takes parameters and returns a value.
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(5, 4));

// 12. Write a program that demonstrates anonymous function in variable & callback.
const mainFunction = function (action) {
  console.log("Starting Main Program");
  action(); // Calling the callback
};

const myActionVariable = function () {
  console.log("Running from a variable inside a callback!");
};

mainFunction(myActionVariable);
