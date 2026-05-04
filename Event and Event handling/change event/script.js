 
// change

let btn = document.querySelector("#btn")
 let fileinp=document.querySelector("inputinp")
 btn.addEventListener("click",function() {
fileinp.click();
    
 })

 fileinp.addEventListener("change",function(detail){
    console.log(detail);
    
// let file =detail.target.files[0];
// if(file){
// btn.textContent=file.name
// }
 })

 // change
// change event tb chalta ha jb apka koi input select ya textera me koi change hojaya

let select =document.querySelector("select")

let device = document.querySelector("#device")

select.addEventListener("change", function(detail) {

    device.textContent=`${detail.target.value} device selected`
})
