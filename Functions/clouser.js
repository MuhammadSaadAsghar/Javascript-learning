// clouser 
// asa function jo return kra ak or function return kiya howa function use kra ga parent function variabe

function hero() {
    let a =12;
return function() {
    console.log(a);
}    
}

const myHero = hero();        // hero() ek function return karta hai
myHero();    
// lexical scopping


// Function ke andar ka function apne bahar ke variables ko access kar sakta hai

// function home() {
//     let b =12;
//      function saad() {
//     console.log(b);
// }    
// saad()
// }
// home()

// IIFE= immediately invoked function expression

// asa function jo declare hota hi run ho jata hai

( function() {
console.log("hi saad");
})();
