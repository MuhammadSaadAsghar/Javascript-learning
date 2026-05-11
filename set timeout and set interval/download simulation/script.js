let count=0
 let progress=document.querySelector(".progress")
 let progressresult=document.querySelector(".text")
 

 let intv=setInterval(() => {
    if (count < 100) {
        count++;
     progress.style.width=`${count}%`  
     progressresult.textContent=`${count}%`
    }
    else{
        document.querySelector("h2").textContent="downloaded."
    clearInterval(intv)
    }
 }, (10*1000)/100);