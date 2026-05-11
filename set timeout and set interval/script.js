
// setTimeout 
// time ko delay krna ka lia
let tm=setTimeout(() => {
    console.log("saad kasa ho");
    
},5000);

// for example ye message 5 second bad print hoga 
// is me srif ak bar print hoga 

// clearTimeout
clearTimeout(tm)
// ye clear krna lia use hota ha

// setInterval
// ye bi time delay ka lia hi use hota ha 
let im=setInterval(() => {
    console.log("hello 3 second bad print ho or ye har 3 second bad print hota rha ga");
    
}, 3000);
    
// ye hr 3 second bad print hoga ye infine loop ki tra chla ga 

// clearInterval
clearInterval(im);
// ye clear krna ka lia 

// counter 10 se 0 tk

let counter=10;

let interval= setInterval(() => {
    if (counter>0) {
        counter--;
        console.log(counter)
    }
    else{
        clearInterval(interval)
    }

}, 1000);


