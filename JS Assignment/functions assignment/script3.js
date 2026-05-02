// 1. Create an arrow function that prints “Welcome to JavaScript”.
const welcomeJS = () => {
  console.log("Welcome to JavaScript");
};
welcomeJS();

// 2. Write an arrow function that takes a name and prints a greeting message.
const greetUser = (name) => {
  console.log("Hello, " + name + "! Hope you are doing well.");
};
greetUser("Alice");

// 3. Create an arrow function that adds two numbers and returns the result.
const addNumbers = (a, b) => {
  return a + b;
};
console.log(addNumbers(10, 5));

// 4. Write an arrow function that multiplies two numbers and prints the output.
const multiplyNumbers = (a, b) => {
  console.log(a * b);
};
multiplyNumbers(4, 5);

// 5. Create an arrow function that returns the square of a number.
const squareNumber = (num) => {
  return num * num;
};
console.log(squareNumber(6));

// 6. Write an arrow function that takes three numbers and returns their sum.
const sumOfThree = (a, b, c) => {
  return a + b + c;
};
console.log(sumOfThree(10, 20, 30));

// 7. Create an arrow function that returns the length of a given string.
const getStringLength = (text) => {
  return text.length;
};
console.log(getStringLength("JavaScript"));

// 8. Create an arrow function that checks whether a number is positive or negative.
const checkSign = (num) => {
  if (num >= 0) {
    return "Positive";
  } else {
    return "Negative";
  }
};
console.log(checkSign(-5));

// 9. Write an arrow function that finds the difference between two numbers.
const findDifference = (a, b) => {
  return a - b;
};
console.log(findDifference(20, 8));

// 10. Create an arrow function that returns a message like “Learning Arrow Functions”.
const learningMessage = () => {
  return "Learning Arrow Functions";
};
console.log(learningMessage());

// Extra: Create an arrow function that returns the average of three numbers.
const calculateAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
console.log(calculateAverage(10, 20, 30));
