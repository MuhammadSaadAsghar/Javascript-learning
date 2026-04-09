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

// 5- slice();
//  ye orignal array ko change ni krtA ha copy bana kr new array me save krta ha

let marks1=[1,2,3,4,5,6];
let arr=marks1.slice(0,4);
console.log(arr);
// result 
// let arr=[1,2,3,4]
// 0 index se shroo hokr 4 value new array me save krta ha


