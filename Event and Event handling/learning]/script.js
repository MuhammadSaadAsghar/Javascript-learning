// addEventListener
// Jb hum click keypress ye mouse movement krta ha to jo reaction hota ha wo eventlistener ki waja se hota

let button=document.querySelector("p")
button.addEventListener("dblclick",function() {
  
    button.style.color=button.style.color==="black"?"red":"black"

    
})

// comman event

// input 

let inp = document.querySelector("input")
inp.addEventListener("input", function() {
    document.body.style.background=inp.value;
})
let input = document.querySelector("input")
input.addEventListener("input", function(eve) {
  input.style.color=input.value;
})

