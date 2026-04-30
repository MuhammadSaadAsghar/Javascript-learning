// dom= document object model

// dom manipulation
// html se element select krna
// text badlna
// html badlna
// css badlna
// attribute badlna
// event listener add krna

// selecting elements

// getElementbyid
let abcd=document.getElementById("abcd");
console.log(abcd)

//  getElementsByClassName
let abc = document.getElementsByClassName("txt");
console.log(abc)

//  query selector
let h1=document.querySelector("h1")
console.log(h1)

//  queryselectorall

let saad = document.querySelectorAll("h1")
console.log(saad);

// text badlna 

// inner text

let hey=document.querySelector("h1")
hey.innerText="saad kabi bi give up na krna"
console.log(hey)

// textContent

let h2 = document.querySelector(".txt")
h2.textContent="success me kabi bi full stop ni hota"
console.log(h2)

// html badlna

let pcb= document.querySelector("#rao")
pcb.innerHTML="<i>saad</i> "
console.log(pcb)

// attribute manipulation

// set attributes
// kis bi attribute ki value set krna 
let img=document.querySelector("img")
img.setAttribute("src","https://images.unsplash.com/photo-1773332585861-72cf1558a6fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8")
console.log(img);

// get attribute 

let a=document.querySelector("a")
console.log(a.getAttribute("href"))

// remove attribute
let a1=document.querySelector("#saad");
a1.removeAttribute("href");
console.log(a1)


// dynamic dom manipulation

// neya element banana
let p =document.createElement("p")
p.innerText="selfrespect is most important in life"
document.body.append(p)
console.log(p)

// js se css badlna
let pera=document.querySelector("h1")
pera.style.color="green"
pera.style.backgroundColor="black"
pera.style.fontFamily="serif"
pera.style.textTransform="Capitalize"

// js ka zariya class add krna

let holo=document.querySelector("p")
holo.classList.add("peragraph")

