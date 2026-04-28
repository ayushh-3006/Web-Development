// arrayy
let arr = [22,3,34,67];
arr(2);

// push method
let arr1 = [1,2,3,4,5];
arr1.push(50090);

// pop method
let arr2 = [1,2,3,4,5];
arr2.pop();

//shift metthod
let a = [1,2,3,4,5];
a.shift();

//unshift mehod
let b = [1,2,3,4,5,6];
b.unshift(0);

//splice method
let c = [1,2,3,4,56];
c.splice(2,1);

//slice method
let array = [1,2,3,4,5];
let newarray = array.slice(0,4);

//reverse method
let array1 = [1,2,3,4,5];
array1.reverse();

//sort method
let array2 = [1,12,35,44,53,2,4,];
let sr = array2.sort(function(a,b){
    return a-b;
});

//for each
let arrays = [1,12,35,44,53,2,4,];
arrays.forEach(function(val){
    console.log(val+5);
});

//reduce method
let a2 = [1,2,3,4,5];
let ans = a2.reduce(function(accu,val){
    return accu+val;
},0);

//spread method
let b1 = [1,2,3,4,5,6];
let b2 = [...b1];

// 
