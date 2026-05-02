// 1. Create a function expression and store it in a variable, then call it.
const startTask = function() {
  console.log("Task Started");
};
startTask();

// 2. Write a function expression and execute it using the variable name.
const runAction = function() {
  console.log("Action Executing");
};
runAction();

// 3. Create a function expression that takes one value and displays it.
const displayValue = function(item) {
  console.log("The item is: " + item);
};
displayValue("Laptop");

// 4. Write a function expression that stores and prints a message.
const showMessage = function() {
  const msg = "This is a stored message";
  console.log(msg);
};
showMessage();

// 5. Create a function expression with two parameters and display both values.
const showPair = function(val1, val2) {
  console.log("Value 1: " + val1 + ", Value 2: " + val2);
};
showPair("Red", "Blue");

// 6. Write two function expressions with different variable names and call both.
const firstFunction = function() {
  console.log("First function called");
};
const secondFunction = function() {
  console.log("Second function called");
};
firstFunction();
secondFunction();

// 7. Create a function expression and assign it to another variable, then call both.
const original = function() {
  console.log("Running the function...");
};
const copy = original;
original();
copy();

// 8. Write a function expression and print its returned value using console.log().
const getGreeting = function() {
  return "Hello from the return statement!";
};
console.log(getGreeting());

// 9. Call a function expression multiple times with different values.
const multiplyByTen = function(num) {
  console.log(num * 10);
};
multiplyByTen(2);
multiplyByTen(5);
multiplyByTen(12);

// 10. Try calling a function expression before declaring it and observe what happens.
// Note: This will cause an error (ReferenceError) because function expressions are not hoisted.
// console.log(callMeBefore()); 

const callMeBefore = function() {
  return "You can only call me after I am defined";
};
console.log(callMeBefore());

// Extra: Function expression that returns the average of three numbers.
const calculateAverage = function(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
};
console.log("Average is: " + calculateAverage(10, 20, 30));