
let form= document.querySelector("form")
let inputs = document.querySelectorAll("input");

let main =document.querySelector(".main")

form.addEventListener("submit", function(detail){
    detail.preventDefault();
    
    let card=document.createElement("div")
    card.classList.add("card");
    
let profile = document.createElement("div")
profile.classList.add("profile")

let img = document.createElement("img")
img.setAttribute("src",inputs[0].value)

let age =document.createElement("p")
age.textContent=inputs[1].value;

let info = document.createElement("p")
info.textContent=inputs[2].value;

let contact = document.createElement("p")
contact.textContent=inputs[3].value;

profile.appendChild(img);
card.appendChild(profile);

card.appendChild(age)
card.appendChild(info)
card.appendChild(contact)

main.appendChild(card);

inputs.forEach(inps =>{
    if (inps.type !== "submit") {
        inps.value="";
    }
})
});