// console.log("in var");

// var a = 10;
// console.log(a);
// console.log(b);

// var b = 20;
// console.log(a);
// console.log(b);

// console.log("in let");

// let a1 = 10;
// console.log(a1);
// console.log(b1);

// let b1 = 20;
// console.log(a1);
// console.log(b1);

// console.log("in const");

// const a2 = 10;
// console.log(a2);
// console.log(b2);

// const b2 = 20;
// console.log(a2);
// console.log(b2);


 let test = "this is local variable"

function classA() {
   
    console.log("classA", test);


}

function classB() {
    console.log("classB", test);
}

function classC() {
    let test2 = "this is a local variable"
    console.log("classC", test);
    console.log("classC", test2);
    
}

function classD() {
    console.log("classD", test);

    {
        let v=10;
        console.log(v);
    }
  
    
}

function classE() {
    console.log("classE", test);
    //console.log(v);
    
}

function classF() {
    console.log("classF", test);
}

function classG() {
    console.log("classG", test);
}

classA()
classB()
classC()
classD()
classE()
classF()
classG()


