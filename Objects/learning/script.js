// Object in js
//  ek cheez ki details ko ek jagah rakhna
// Object hum tb banata ha jb ak entity ka bara me sb kuch chaia

let student = {
name: "Saad",
age: 18,
course: "DAE"
};

console.log(student.age); // 18

// Key value structure

let student1 = {
name: "Saad",
age: 18,
course: "DAE"
};
console.log(student1.course); // DAE

// Is me name key ha or saad value ha

// Dot vs bracket notation

// Dot notation (.)
// Ye simple or zayda use hota ha
let student2 = {
name: "Saadasghar",
age: 18
};

console.log(student2.name); // Saad
// Ye direct access hota ha

// Bracket notation([ ])
// Quotes ke andar likho:

let student3 = {
name: "Saad",
age: 18
};

console.log(student3["name"]); // Saad
// Ye variable ko access krta  ha


//dono ka kam same ha 

// nesting and deep access
// nesting
// Object ka ander object ko nesting kehta ha

let student4 = {
  name: "Saad",
  address: {
    city: "kamalia",
    zip: 36350
  }
};
// student → main object
// address → andar wala object (nested object)
//  Deep Access (andar ka data lena)
//  Andar wali value lene ke liye chain use karte hain
// console.log(student.address.city);
// 👉 Output: kamalia

// Object Destructuring kya hota hai?

// Object se values nikalna easy tareeke se
//   bina baar baar object.name likhe
let student5 = {
name: "Saad",
age: 18
};

let { name, age } = student5;

console.log(name); // Saad
console.log(age); // 18
// let { name } = student5;

//   student.name nikal ke direct name variable me rakh do

// For in
// Object ki keys ko Loop krna ka lia  use hota ha 
let obj={
Name:"saad",
Age:18,
}
for(let key in obj){
console.log(key)
}

//  Output:
// name
// age
// course

for (let key in obj) {
  console.log(key,":",obj[key]);
}

// 👉 Output:

// Saad
// 18
// DAE

//  Object.keys() kya hota hai?
//  Ye method object ke saare keys nikalta ha aur unko array me return karta hai
let student6 = {
name: "Saad",
age: 18,
course: "DAE"
};

let keys = Object.keys(student6);

console.log(keys);



//  Object.entries() kya hai?

// object ko array me convert karta hai aur har cheez ko [key, value] pair bana deta hai
let student7 = {
  name: "Saad",
  age: 18
};
console.log(Object.entries(student7));

// copy object using spread opreator

let student8 = {
  name: "Saad",
  age: 18
};

let copy = { ...student8 };

console.log(copy);

// Deep clone
// Spread operator srif main object copy krta ha nested object ko copy ni krta balkay reference pass krta ha 
// Deep clone pura object ko nested ko bi copy krta ha

// Spread se copy (problem)
let user = {
  name: "Saad",
  address: {
    city: "Lahore"
  }
};
// Yahan address ke andar ek aur object hai (nested)
let deepcopy = { ...user };
deepcopy.address.city = "Karachi";
console.log(user.address.city);
// Output: Karachi 
// Ye user wala object or copy wala object ka ander jo nested object ha wo ak hi box share kr rha ha same same dono ki city change hogyi
// Deep Clone (solution)
let user1 = {
  name: "Saad",
  address: {
    city: "Lahore"
  }
};

let deepcopy1 =JSON.parse(JSON.stringify(user1))
deepcopy1.address.city="karachi";
console.log(user1.address.city)

// Output: Lahore

