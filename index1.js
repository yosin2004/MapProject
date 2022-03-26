const images = ["image.png", "image2.png", "image3.png", "image4.png", "image5.png"]

const back = document.querySelector(".back")
const next = document.querySelector(".next")
const s = document.querySelector(".a")
const b = document.querySelector(".b")

const container = document.querySelector("#container")
const img = container.querySelector("img")
let a = 1

setInterval(function (){
    img.src = images[a]
        a++
        if(a == images.length){
            a = 0
        }
}, 1000)

next.addEventListener("click", function(){
    a++
    if(a>=images.length) a = 0
    img.src = images[a]
})
back.addEventListener("click", function(){
    a--
    if(a<0) a = images.length-1
    img.src = images[a]
})
a.addEventListener("click", function(){
    images[0]
})


