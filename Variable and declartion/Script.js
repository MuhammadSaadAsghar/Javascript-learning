// var let const 

// Declaration and initialization

// var
var a = 13;

// window me add hota hota
// Function scoped hota ha 
// ap firse declare kr sakta ho same name se error ni ayga

// let
let b= 12 ;

// block scoped hota ha
// modern or safe hota ha
// ye reassigned hota ha lakin redeclare ni hota ha

let age = 25;
age = 30; // ✅
// let age = 40; // ❌ Error (same block)

// const

const PI = 3.14;
// PI = 3.14159; // ❌ Error

// Cannot be reassigned or redeclared
// Value must be assigned at declaration
// TDZ applies here too


// Hoisting

// Javascript me jb hum ak variable banata ha to wo variable do hisso me toot jata ha or us ka declare part uper chla jata or initialization part nicha reh jata ha
// JavaScript moves declarations of variables and functions to the top of their scope before executing the code.

// Example:
 console.log(a);  // undefined
 var a = 10;

// Why no error ? 

// Because JavaScript treats it like this:


 var a;                      // hoisted
console.log(a);      // undefined
 a = 10;                 // initialization


//  practice

console.log(a);
var a= 12;

// anwser aygya undefined

console.log(c);
let c = 23;

// anwser ayga error

var x =1;
{
 var x= 2;
}
console.log(x);


