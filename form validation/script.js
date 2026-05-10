let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");

form.addEventListener("submit",function(dets){
dets.preventDefault()

const emailRegix=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegix=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

let emailans=emailRegix.test(email.value)
let passwordans=passwordRegix.test(password.value)

if (!emailans) {
    document.querySelector("#emailerror").textContent="email is incorrect"
    document.querySelector("#emailerror").style.display="initial"
    
}else{
    document.querySelector("#emailerror").style.display="none"
    

}

if (!passwordans) {
    document.querySelector("#passworderror").textContent="password is incorrect"
     document.querySelector("#passworderror").style.display="initial"
    }
    else{
    document.querySelector("#passworderror").style.display="none"

}


})


