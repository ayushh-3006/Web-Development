// function declaration

function ansj(){
    console.log();
}
ansj();

// function expression

let fun  = function() {
    console.log();
}
fun();

// fat arrow function

let func = ()=>{
    console.log();
}
func();

// parameter function

function add(v1,v2){
    console.log(v1+v2);
}
add(1,2);

// defult 
function add(v1=1,v2=2) {
    console.log(v1+v2);
}
add();

// rest 

function add(...numbers){
    console.log(add);
}
add(1,2,3,4,6);

// return values

function numbers(){
    if(15>12) return true;
    else return false;
}



// object method

const obj = {
  myFunction(x, y) {
    return x * y;
  },
};

let x = myFunction(4, 3);

function myFunction(a, b) {
  return a * b;
}

const sum = add(2, 3); 

function add(a, b) 
{return a + b;}


// object method

const obj1= {
  myFunction(x, y) {
    return x * y;
  },
};

let x1 = myFunction(10, 20);

function myFunction(a, b) {
  return a * b;
}

const sum1 = add(40, 50); 

function add(a, b) 
{return a + b;}
