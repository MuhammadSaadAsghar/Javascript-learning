// create an object for a student with name ,age and is enrolled
let student ={
    name:"saad",
    age:18,
    isEnrolled:true
}
console.log(student)

// access the value first-name from this object
let obj={
    "first-name":"saad"
}
console.log(obj["first-name"])

// given a dynamic key let key = age how  will you access user [key]
let key="age";
let object ={
    age:18
}
console.log(object[key])
// from the object below , print the lattitude
let  locations={
    city:"kamalia",
    cordinates:{
        lat:23.3,
        lan:37.4

    },
}

console.log(locations.cordinates.lat)

// destructring the city and lat from the location object
let {city}=locations;
let {lat}=locations.cordinates;

// destructring the key "first-name" as a variable called firstname 
let fullname={
    "first-name":"saad"
}
let {"first-name":firstname}=fullname;

// use for-in log to all keys in this object
let user={
    name:"saad",
    age:18,
    isEnrolled:false
}

for(let key in user){
    console.log(key,":",user[key])
}
// use object.entries() to print all key-value pair as
const course={
    title:"javascript",
    doration: "4 weeks"
}
Object.entries(course).forEach(val=>{
    console.log(`${val[0]} : ${val[1]}`)
})
 
// deep clone the obj1 safly
let obj1={
    info:{
        score:80
    }
}
let newobj=JSON.parse(JSON.stringify(obj1))
newobj.info.score=100;
console.log(obj1.info.score)

// rewarite this safley using optional changing
let changing={};
console.log(changing?.profile?.name)

// use a variable to dynamically assaign a property
let key1="role";
let saad={
    name:"saad",
    [key1]:"admin"
}
