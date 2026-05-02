// 1. Create a simple function that prints "Hello World".
const sayHello = function () {
  console.log("Hello World");
};

// 2. Write a function that displays your name in the console.
const displayName = function () {
  console.log("My Name is John");
};

// 3. Create a function that prints "Welcome to College".
const welcomeMessage = function () {
  console.log("Welcome to College");
};

// 4. Write a function that takes a name as a parameter and prints "Hello [name]".
const greetUser = function (name) {
  console.log("Hello " + name);
};

// 5. Create a function that takes two numbers and prints their sum.
const printSum = function (num1, num2) {
  console.log(num1 + num2);
};

// 6. Write a function that takes a number and prints its square.
const printSquare = function (num) {
  console.log(num * num);
};

// 7. Create a function that takes two numbers and returns their addition.
const addNumbers = function (a, b) {
  return a + b;
};

// 8. Write a function that returns the multiplication of two numbers.
const multiplyNumbers = function (a, b) {
  return a * b;
};

// 9. Create a function that takes a name and age and prints a message.
const describePerson = function (name, age) {
  console.log(name + " is " + age + " years old.");
};

// 10. Write a function that returns the average of three numbers.
const getAverage = function (a, b, c) {
  return (a + b + c) / 3;
};

// 11. Create a function and call it multiple times with different values.
const showValue = function (value) {
  console.log("The value is: " + value);
};

showValue(50);
showValue("Mango");
showValue(100);

// 12. Build a function that takes two numbers and returns the greater number.
const getGreater = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
