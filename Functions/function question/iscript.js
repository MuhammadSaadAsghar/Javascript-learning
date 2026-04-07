// function multiply(a,b) {
//     return a*b;
// }
// convert to arrow function

const multiply=(a,b)=>{
    return a*b;

}

console.log(multiply(4,5))

// what does the ... operator mean in parameter

function kfc(...value) {
    console.log(value)
}

kfc(1,2,3,4,5,6)

// use rest parameter to accept any number of scores and return the total

function getscore(...scores) {
    let total=0;
    scores.forEach(function (value) {
    total=total+value;
        
    })
    return total;
}

console.log(getscore(32,43,345,2,54))

// write a bmi calculator

function calculator(weight,height) {
    return weight / (height*height)
}

console.log(calculator(64,1.5).toFixed(2))



// write a discount calculator

function discountCalculator(discount) {
    return function (price) {
        return price-price*(discount/100)
    }
}
let discounter=discountCalculator(50)
console.log(discounter(200))