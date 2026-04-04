// 1. Function Declaration
//  simple way to write a function
function saad() {
 console.log("Hello");
}

// 2. Function Expression
// Function stored in a variable
const rfc = function() {
 console.log("saad");
};

// 3. Arrow Function (Modern way)
//  Short and clean syntax
const greet = () => {
 console.log("kasa ho");
}

// 4. Function with Parameters

//  Takes input

function stored(name) {
  console.log(`Hello ${name}`);
}

stored("saad")

// Default parameters
// Jab tum function ko value na do, to function khud ek default (pehle se set) value use kare.

function numbers(num1=1, num2=2) {
    console.log(num1,num2)
}

 numbers(4,5) // 4,5
 numbers() //default value set hogi 1,2


//  rest parameters
// Function mein jitni bhi extra values aati hain, un sab ko ek array mein collect kar lena.
// Jab argument zyda ho to humy utna hi parameters banana para ga us se bachna ka lia hum rest ka use krta ha  agr … function ka parameter space me laga to wo rest parameter ha 

function searchnumber(...nums) {
console.log(nums);
}

searchnumber(1, 2, 3, 4);

//  Output:
// [1, 2, 3, 4]

// First class functions
// Asa function jis jko hum value ki tra treat kr sakta ha
// variable mein store kar sakte ho
// kisi function ko argument ke taur pe pass kar sakte ho
// function se return kar sakte ho


const greet1 = function() {
console.log("Hello");
};

greet(); // Hello

// high order functions

// Asa function jo dosra function ko argument ka tor pr le
// Ya function ko return kra

function greet2() {
console.log("Hello");
}

function callFunction(fn) {
fn();
}

callFunction(greet2);

// callFunction ek Higher Order Function hai
// kyunki ye function receive kar raha hai

function outer() {
 return function() {
   console.log("Inner function");
 };
}
outer()()
// const result = outer();
// result();
//  outer bhi Higher Order Function hai
//  kyunki ye function return kar raha hai


// pure and impure function 
// asa function jo bhar ki value ko change na kra

let s = 12;

function hui() {
  console.log("hehehe")
}

// impure function
// asa function jo bhar ki value change kra 

let v = 10;

function haha() {
  v++;
}

haha()
console.log(v)

