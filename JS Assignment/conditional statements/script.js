console.log("question 1");

let num = 10;
if (num > 0) {
  console.log(num + " is a positive number");
} else if (num == 0) {
  console.log(num + " is neither positive nor negative");
} else {
  console.log(num + " is a negative number");
}

console.log("question 2");

let age = 20;
if (age >= 20) {
  console.log("You are eligible to vote");
} else {
  console.log("you are not eligible to vote");
}

console.log("question 3");

let number = 20;
if (number % 2 == 0) {
  console.log(number + " is a even number");
} else {
  console.log(number + " is a odd number");
}

console.log("question 4");

let marks = 92;
if (marks > 90) {
  console.log("A grade");
} else if (marks > 75) {
  console.log("B grade");
} else if (marks > 50) {
  console.log("C grade");
} else {
  console.log("fail");
}

console.log("question 5");

let username = "admin";
let password = "1234";

if (username === "admin" && password === "123456") {
  console.log("Login successful");
} else {
  console.log("login failed");
}

console.log("question 6");

let data;
let user = "ayush";

data = user || "n/a";

// if(user)
// {
//     user=name;
// }
// else{
//     data="n/a"
// }

console.log(data);

// why we use break it is used to terminate that block of code

console.log("question 7");

let choice = 2;

switch (choice) {
  case 1:
    console.log("Tea");
    break;
  case 2:
    console.log("Coffee");
    break;
  case 3:
    console.log("Lassi");
    break;
  default:
    console.log("Water");
}
