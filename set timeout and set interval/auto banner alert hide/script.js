let main= document.querySelector(".main")

let iscomplete=true;
setInterval(() => {
    if (iscomplete) {
        
        main.style.display="none";
    }
}, 3000); 