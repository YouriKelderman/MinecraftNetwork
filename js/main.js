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
    backdrop = document.getElementById("games")
    images = document.getElementsByClassName("slide");
    dots = document.getElementsByClassName("dot");
    window.addEventListener("scroll", windowScroll);
    hamburger.addEventListener("click", menu);
    windowScroll();
    switchActive();
    dotSetup();
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
function dotSetup(){

}
function currentSlide(n) {
    switchActive(imageIndex = n);
}

function plusSlides(n) {
    switchActive(imageIndex += n);
}

function switchActive(x) {
    let i;

    if (x > images.length) {
        imageIndex = 1
    }
    if (x < 1) {
        imageIndex = images.length
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    imageIndex++;
    if (imageIndex > images.length) {
        imageIndex = 1
    }
    images[imageIndex - 1].style.display = "flex";
    console.log(backdrop.style.backgroundImage);
    backdrop.style.backgroundImage = images[imageIndex -1].style.backgroundImage;
}