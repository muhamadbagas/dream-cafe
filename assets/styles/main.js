// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior : "smooth"
        })
    })
})

// Responsive Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("li").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Slideshow Foto
var i = 0;
var images = [];
var time = 3000;

images[0] = 'assets/image/cafe1.jpg';
images[1] = 'assets/image/cafe2.jpg';
images[2] = 'assets/image/cafe3.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;