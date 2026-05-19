let users = [
    {
        name: "saad",
        pic: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        bio: "Frontend developer | Learning JavaScript"
    },
    {
        name: "ali",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        bio: "Graphic designer | Photoshop expert"
    },
    {
        name: "ahmad",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        bio: "Backend developer | Node.js lover"
    },
    {
        name: "usman",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        bio: "UI/UX designer | Figma specialist"
    },
    {
        name: "hamza",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        bio: "Mobile app developer | Flutter"
    },
    {
        name: "zain",
        pic: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
        bio: "MERN stack developer"
    },
    {
        name: "bilal",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        bio: "Student | Learning web development"
    }
]

let showusers=(arr)=>{
arr.forEach(user => {
    // 🔹 Card
let card = document.createElement("div")
card.classList.add("card")

// 🔹 Image
let img = document.createElement("img")
img.src = user.pic
img.classList.add("bg-img")

// 🔹 Blur layer
let blur = document.createElement("div")
blur.style.backgroundImage=`url(${user.pic})`
blur.classList.add("blurred-layer")

// 🔹 Content div
let content = document.createElement("div")
content.classList.add("content")

// 🔹 h3
let h3 = document.createElement("h3")
h3.textContent = user.name

// 🔹 p
let p = document.createElement("p")
p.textContent = user.bio

// 🔹 Append structure
content.appendChild(h3)
content.appendChild(p)

card.appendChild(img)
card.appendChild(blur)
card.appendChild(content)



document.querySelector(".cards").appendChild(card)
});

}
showusers(users)

let inp=document.querySelector(".inp");
inp.addEventListener("input", () => {

    let value = inp.value.toLowerCase()

    let newusers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(value)
    })

    document.querySelector(".cards").innerHTML = ""
    showusers(newusers)
})



// saare user show krna 
// filter krna har bar input krna pr
// show krna filterd users