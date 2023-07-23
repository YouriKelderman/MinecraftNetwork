window.addEventListener('load', init);


let navbar;
let hamburger;
let backdrop;
// Image carousel
let imageIndex = 1;
let dots;
let images;
function init() {
    navbar = document.getElementById("navbar")
    hamburger = document.getElementById("hamburger");
    backdrop = document.getElementById("backdrop")
    images = document.getElementsByClassName("slide");
    dots = document.getElementsByClassName("dot");
    window.addEventListener("scroll", windowScroll);
    hamburger.addEventListener("click", menu);
    windowScroll();
}

function menu() {
    hamburger.classList.toggle("mobile");
    navbar.classList.toggle("mobile");
}

function windowScroll() {
    if (window.scrollY > 0 && window.innerWidth > 750) {
        navbar.classList.add("active")
    } else {
        navbar.classList.remove("active")
    }
}
function currentSlide(n) {
    switchActive(imageIndex = n);
}

function plusSlides(n) {
    switchActive(imageIndex += n);
}

function switchActive(x) {
    let i;

    let dots = document.getElementsByClassName("dot");
    if (x > images.length) {
        imageIndex = 1
    }
    if (x < 1) {
        imageIndex = images.length
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    //}
    images[imageIndex - 1].style.display = "flex";
    console.log(images[imageIndex -1].style);
    //dots[imageIndex - 1].className += " active";
}