// if else program to find you are voteable or not in Java Script
let Age = 17;

if(Age>=18){
    console.log("you're eligible for vote");
} else{
    console.log("you're not eligible for vote");
}
//output : you're not eligible for vote



// alternative way to use ternary operator:

let age = 20;
let voteable = (age>=18)? "you're eligible for vote" : "you're not eligible for vote"
console.log(voteable);

// output : you're eligible for vote