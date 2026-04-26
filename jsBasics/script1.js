// question 1

for(let i = 1; i<=10; i++)
{
   console.log(i);
   console.log("hello");
}



// question3

for(let i=1; i<=21; i++){
    if(i%2==0){

         console.log(i);

    }
     
}

// qusetion4

let i = 1;
while(i<16){
    if(i%2==1){
        console.log(i);
    }

    i++;

}

// question5

for(let i=1; i<=10; i++){
    console.log(`5*${i} = ${5*i}`);
}

// question6
let sum = 0;
for(let i =1; i<=100; i++){
sum = sum+i;
console.log(sum);
}

// question7

for(let i=1; i<=50; i++){
    if(i%3==0){
        console.log(i);
    }
}

// question8

let val = prompt("give a number");
for(let i=1; i<=val; i++){
    if(i%2==0){
        console.log(`${i} is even`)
    }
    else{
        console.log(`${i} is odd`)
    }
}


// question9

for(let i= 1; i<=100; i++){
    if(i%3==0 && i%5==0)
    {
        console.log(i);
    }
}

// question1 using break

for(let i= 1; i<=100; i++){
    console.log(i);
    if(i%7==0){
        break;
    }

}

// question2 using continue

for(let i=1; i<21; i++){
    
    if(i%3==0)
        continue;
         console.log(i);
    
   
}

// question3 use continue,break

let count = 0;
for(let i=1; i<101; i++){
    if(i%2===1){
        count++;
        console.log(i);
    }

    if(count===5)
        break;
}// question 1

for(let i = 1; i<=10; i++)
{
   console.log(i);
   console.log("hello");
}



// question3

for(let i=1; i<=21; i++){
    if(i%2==0){

         console.log(i);

    }
     
}

// qusetion4

let i = 1;
while(i<16){
    if(i%2==1){
        console.log(i);
    }

    i++;

}

// question5

for(let i=1; i<=10; i++){
    console.log(`5*${i} = ${5*i}`);
}

// question6
let sum = 0;
for(let i =1; i<=100; i++){
sum = sum+i;
console.log(sum);
}

// question7

for(let i=1; i<=50; i++){
    if(i%3==0){
        console.log(i);
    }
}

// question8

let val = prompt("give a number");
for(let i=1; i<=val; i++){
    if(i%2==0){
        console.log(`${i} is even`)
    }
    else{
        console.log(`${i} is odd`)
    }
}


// question9

for(let i= 1; i<=100; i++){
    if(i%3==0 && i%5==0)
    {
        console.log(i);
    }
}

// question1 using break

for(let i= 1; i<=100; i++){
    console.log(i);
    if(i%7==0){
        break;
    }

}

// question2 using continue

for(let i=1; i<21; i++){
    
    if(i%3==0)
        continue;
         console.log(i);
    
   
}

// question3 use continue,break

let count1 = 0;
for(let i=1; i<101; i++){
    if(i%2===1){
        count1++;
        console.log(i);
    }

    if(count1===5)
        break;
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let i1 = 2;

let text = "";
for (; i1 < len; i1++) {
  text += cars[i1] + "<br>";
}