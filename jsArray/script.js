// Question1
let fruit = ["mango","apple","pear"];
fruit[1];

// question2
let fruit1 = ["apple","pear"];
fruit1.push("pineapple");
fruit1.unshift("Mango"); 

// question3
let fruits = ["apple","Banana"];
fruits.pop();
fruits.push("kiwi");

// Question4
let numbers = [1,2,3,4];
numbers.pop();

// Question5
let colors = ["Green","Yellow"];
colors.splice(1,0,"Red","blue");

// question6
let items = [1,2,3,4,5,6];
let newitems = items.slice(1,4);

// question7
let names = ["Zara","arra", "mira","Bhavya"];
names.sort().reverse();

// question8
let arr = [1,2,3,4];
let newarr = arr.map(function(val){
    return val*val;

});

// question9
let arr1 = [5,12,14,6];
let newarr1 = arr1.filter((val)=>{
    return val>10;

});

// question10
let arr2 = [10,20,30];
let ans = arr2.reduce(function(accumulator,val){
    
        return accumulator+val;
},0);

// question11
let arr3 = [45,38,97,67];
let ans1 = arr3.some(function(val){
    return val<35;

});

//Question12
let a = [2,4,6,8,10];
let b = a.every(function(val){
    return val%2==0;

});

//Question13
let fullname = ["Harsh","sharma"]
let[firstname,Lastname]=fullname;

//Question14
let a1 = [1,2];
let b1 = [2,3];
let array = [...a1,...a2];
//Question15
let countries = ["uk","us"]
let m = ["india",...countries];


