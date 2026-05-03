

// use queryselectorall select all buttons with class" buy-now".
let button=document.querySelectorAll(".buy-now")
console.log(button);
// select the heading of a page by id and changes its text to "welcome to saad software house"
let headings=document.querySelector("#heading")
headings.innerHTML="welcome to saad software house"

// select all <li> elements and print their text using a loop
let lis=document.querySelectorAll("li")
for (let i = 0; i < lis.length; i++) {
    console.log(lis[i].textContent)

}
// diffrence between innertext,innerHTML,textContent
// innertext-> ye elements ka ander ka text change krna ka lia  use hota ha 
// innerHTML->ye elements or text dono ko change krta ha

// select a peragraph repalce this content with:
{/* <b>updated</b> by javascript */}

let peragraph=document.querySelector("p")
peragraph.innerHTML="<b>updated</b> by javascript"

// how do you get src of an image using javascript
let img =document.querySelector("img")
console.log(img.getAttribute("src"))

// what does setarrtibutes do?
// ye ap ki img ka kisi bi attribute ko change krta ha

// select  a link and update its href to point to "https://facebook.com"
let a = document.querySelector("a")
a.innerText="facebook"
a.setAttribute("href","https://www.facebook.com")

// create a new list items <li>new task</li> and add it to the end of a ul
let list = document.querySelector("ul")
let li =document.createElement("li")
li.textContent="New task"
list.appendChild(li)

// create a new image element with a placeholder source and add it at the top of a div

let img1=document.createElement("img")
img1.setAttribute("src","https://images.unsplash.com/photo-1773332611574-d73d8f5cea36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8")
document.querySelector("div").prepend(img1)
console.log()


// select the first item in the list and delete its from the dom
let lists=document.querySelector("ul")
let liss=document.querySelector("li")
lists.removeChild(liss)

// add a highlight class to every even items in the lists

let listss=document.querySelectorAll("ul li:nth-child(2n)")
listss.forEach(val => {
    val.classList.add("highlight")
});

