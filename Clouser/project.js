
function Createtoeaster(config) {
    return function(str){
    let div=document.createElement("div")
    div.className=`${config.theme==="dark"?"bg-gray-800 text-white":"bg-gray-100 text-black"}     rounded py-3 px-6 shadow-
    lg pointer-events-none`
    div.textContent=str;



    if (config.positionX !=="left" || config.positionY !=="top") {
        document.querySelector(".parent").className +=`${config.positionX==="right"?"right-10":"left-10"} ${config.positionY==="top"?"top-10":"bottom-10"}`

        
    }

    document.querySelector(".parent").appendChild(div)

    setTimeout(() => {
        document.querySelector(".parent").removeChild(div)
    }, config.duration*1000);

    }
}

let toeaster =Createtoeaster({
  positionX:"right",
  positionY:"top",
  theme:"dark",
  duration:3
})

toeaster("download done")
setTimeout(() => {
    toeaster("saad accept request")
}, 2000);