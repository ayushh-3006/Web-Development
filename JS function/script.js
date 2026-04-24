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