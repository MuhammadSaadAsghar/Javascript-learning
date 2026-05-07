
let ul=document.querySelector("ul");
ul.addEventListener("click", function(dets){
    dets.target.classList.toggle("lit")
})

// is me li pr click kiya jata to li pr addEventListener ni hota to vo ap parent ul pr jata ha or waha addEventListener doondta ha or function apply hota ha



document.querySelector("#nav").addEventListener("click",function() {
    alert("this is event bubbling");
    
})


let a=   document.querySelector(".a")
let b=   document.querySelector(".b")
let c=   document.querySelector(".c")
let button=   document.querySelector(".btn2")

button.addEventListener("click",function(){
    alert("button clicked")
})
c.addEventListener("click",function(){
    alert("c clicked")
})
b.addEventListener("click",function(){
    alert("b clicked")
})
a.addEventListener("click",function(){
    alert("a clicked")
} )

// agr child pr event laga bi ha to ye ruka ga ni blaka parent pr phir bi jaya ga


// jb bi ap click kkrta ho ya event raise krta ho to ap ka event flow 2 phasese me chalta ha

// phase 1:-
// event  top level se nicha ki trf aya ga
// phase 2:-
// event raise element se parent ki trf jaya ga
// or phly phase 1 hota ha

// hamesha phly phase 1 hi hoti ha per vo by default off hi rehti ha agr hum usa on krde to phly phase 1 ka answer mila ga