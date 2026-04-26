// create an array with 3 fruits and print second fruits

let fruits =["apple","banana","orange"];

console.log(fruits[1]);

// add "mango" at the end and "pineapple" at the beginning  of this array 
let fruits1 =["apple","banana","orange"];

fruits1.push("mango")
fruits1.unshift("pineapple")
console.log(fruits1)

// replace "banana" with "kiwi" in the array above

let fruits2 =["apple","banana"];
fruits2.pop();
fruits2.push("kiwi")
console.log(fruits2)

// 4- whats defferince between push() and unshift();
// push();
// push jo end me value add krta ha

// unshift();
// unshift jo shroo me value add krta ha

// 5- remove the last item from this array using a method 
let numbers=[1,2,3,4,5];
numbers.pop();
console.log(numbers)
// 6- insert "red" and "blue" at index 1 in this array
let color=["white","black"]
color.splice(1,0 ,"red","blue")
console.log(color)

// 7- exrtact only the middle 3 elements for this array

let numbers1 =[1,2,3,4,5,6,7]
let arr=numbers1.slice()
console.log(arr)

// sort this array alphabetically and then reverse it 
let names = ["saad","faisal","zubair","muddesar"]
names.sort().reverse();
console.log(names);

// use .map() to sequare each numbers

let numbers2=[1,2,3,4,5,6];
let newarr=numbers2.map((val)=>{
    return val * val;
})

console.log(newarr)

// use .filter() to keep numbers greater then 100
let numbers3=[5,10,32,14,15,16]
let newarr1=numbers3.filter((val)=>{
    return val>10;
});
console.log(newarr1);

// use reduce() to find of sum this array

let numbers4=[5,6,8,12,15]
let newarr3=numbers4.reduce((acc, val)=>{
return acc+val;
},0)
console.log(newarr3)

// use .find() to get the first number less then 10
let numbers5=[2,3,5,7,9,10,23,21,32]
let newarr4= numbers5.find(val =>{
    return val < 10;
})
console.log(newarr4)

// use .some() to check if any student has scored below to 35;
let numbers6=[23,45,5,53,60]
let newarr5=numbers6.some(val =>{
    return val <35;
})
console.log(newarr5)

// use .every() to check if all number even

let numbers7=[4,64,32,54]
let newarr6=numbers7.every(val =>{
    return val %2===0;
})
console.log(newarr6)

// destructure this array to get firstname and lastname

let fullname=["saad","asghar"]
let [firstname,lastname]=fullname

// marge to array using spread operator
let a =[1,2,3,4]
let b=[5,6,7,8]
let c =[...a,...b];

// add "pakistan" to start this array using spread operator
 let countries=["USA","chaina"]
 countries=["pakistan",...countries]
 console.log(countries)

 
