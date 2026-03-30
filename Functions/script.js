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