// let arr = [12, 23, 32, 36, 5, 544, 56];

// for (var i = 0; i < 7; i++) {
//   console.log(arr[i]);
// }

// console.log(arr);

// arr[2] = arr[2] + 10;

// console.log(arr);

// arr = [];

// console.log(arr);

let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];

console.log(arr);

arr.push(99);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(11);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.at(4));

console.log(arr.indexOf(78));
console.log(arr.includes(89));

let arr1 = [56, 23, 58, 48, 25, 65, 89, 75, 59, 36, 45];

console.log(arr1);
arr1.sort();
console.log(arr1);

arr1.reverse();
console.log(arr1);

let arr2 = [12, 23, 32, 36, 5];

for (var i = 0; i < 7; i++) {
  console.log(arr2[i]);
}

console.log("for each loop it is good and dynamic in size");


arr2.forEach((element) => {
  console.log(element);
});

// arr.splice(2,2);
// console.log(arr);

// arr.slice(0,4);
// console.log(arr);
