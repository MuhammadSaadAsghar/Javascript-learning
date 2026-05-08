let inp=document.querySelector("#inp1")
let span = document.querySelector("#span1")

inp.addEventListener("input",function(){
    span.textContent=inp.value.length
})

let inp1=document.querySelector("#inp2")
let span1 = document.querySelector("#span2")

inp1.addEventListener("input",function(){
    let left=20-inp1.value.length;
    span1.textContent=left;
    if (left < 0) {
        span1.style.color="red";
    }
    else{
        span1.style.color="black";

    }

})

