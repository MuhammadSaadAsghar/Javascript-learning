let arrays=["saad","faisal","adeel"];
console.log(arrays);

// Arrays methods in js
// push();
// Jb humy array ka end me koi value add krni ho 

let students = ["saad", "faisal", "adeel"];
// Ye ak array ha jis me 3 students enroll ha 
students.push("ali hassan");
    console.log(students)

// Result:-
// Let students= ["saad", "faisal", "adeel",”ali hassan”];
// Is me ali hassan add hogya ha

// 2-pop();
// Jb humy array  me end se koi value remove  krni ho 
let students1= ["saad", "faisal", "adeel","ali hassan", "arsalan" ];
students1.pop();
console.log(students1)
// Result:-
// Let students1= ["saad", "faisal", "adeel",”ali hassan”];
// Arsalan  array me se remove hogya

// 3-shift();
// Jb humy array  me shroo se koi value remove  krni ho 
let students2= ["saad", "faisal", "adeel","ali hassan", "arsalan" ];
students2.shift();
console.log(students2)
// Result:-
// Let students2= [ "faisal", "adeel",”ali hassan”,”arsalan”];
// saad  array me se remove hogya

// 4-unshift();
// Jb humy array ka shroo me koi value add krni ho 

let students3= ["saad", "faisal", "adeel"];
// Ye ak array ha jis me 3 students enroll ha 
students3.unshift("ali hassan");
console.log(students3)

// Result:-
// Let students3= [“ali hassan”,"saad", "faisal", "adeel",];
// Is ka shroo me ali hassan add hogya ha

// 5- splice();
// jab humy array me darmayan me kisi bi jagha se value remove krni ho

let marks=[1,2,3,4,5,6];
marks.splice(3,2);
console.log(marks);
// result 
// [1,2,3,6]
// matlb  index 3 se remove kro or 2 value ko remove kro


// 6- slice();
//  ye orignal array ko change ni krtA ha copy bana kr new array me save krta ha

let marks1=[1,2,3,4,5,6];
let arr=marks1.slice(0,4);
console.log(arr);
// result 
// let arr=[1,2,3,4]
// 0 index se shroo hokr 4 value new array  me copy bana kr save krta ha


// 7-sort();
// sort() array ke elements ko order me lagata hai (ascending ya descending).
let numbers4 = [10, 5, 20, 1];

numbers4.sort((a, b) =>
 a - b
);

console.log(numbers4);
//  Output:
// [1, 5, 10, 20]

// 8-foreach();

// forEach() array ke har element par ek function run karta hai (one by one).

let numbers5 = [1, 2, 3, 4];

numbers5.forEach(function(num) {
    console.log(num);
});

//  Output:
// 1
// 2
// 3
// 4

// 9-map();
// map() array ke har element par function chalata hai aur ek naya array return karta hai.

let numbers6 = [1, 2, 3, 4];

let results = numbers6.map((num) => {
   return num * 2;
});

console.log(results);
// ✅ Output:
// [2, 4, 6, 8]

// // 10-filter();
// filter() method array se sirf woh elements nikalta hai jo condition ko pass karte hain
//  New array return karta hai (original change nahi hota)

let numbers7 = [1, 2, 3, 4, 5];
let results1 = numbers7.filter((num) => {
 return num > 2;
});

console.log(results1);
//  Output:
// [3, 4, 5]
//  Sirf woh numbers aaye jo 2 se bade hain

// 11-reduce();
// reduce() method array ke sab elements ko combine karke ek single value bana deta hai

//  Syntax


// array.reduce((accumulator, currentValue) => {
//  return updatedValue;
// }, initialValue);


let numbers8 = [1, 2, 3, 4];

let sum = numbers8.reduce((acc, num) => {

 return acc + num;
}, 0);

console.log(sum);
//  Output:
// 10
// 12- Find();

// find() method array me se pehla element return karta hai jo condition ko match kare
// Sirf 1 item return karta hai (poora array nahi)

let numbers = [5, 10, 15, 20];

let result = numbers.find(num => num > 10);

console.log(result);
 Output:
15





