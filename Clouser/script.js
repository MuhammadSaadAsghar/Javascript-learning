// clouser--> clouser se murad wo function jo apna parent function ka variable ko yad rakhta ha  chaha parent function execute hona ka bad band hi ku na ho jaya. parent function ak inner function return krta ha 

function outer(){
    let count =0;
    return function inner(params) {
        count++;
        console.log(count);
        
    }
}
const counter = outer()
counter()
counter()
// counter()


let bankaccount=(balance)=>{

    return widrawamount=(amount)=>{
    balance -= amount;
    console.log(balance);
    
    }
}

const myaccount=bankaccount(2000)

myaccount(100);
myaccount(400);
myaccount(400);