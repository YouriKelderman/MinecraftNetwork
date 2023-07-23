window.addEventListener('load', init);


let navbar;
let hamburger;

function init() {
    navbar = document.getElementById("navbar")
    hamburger = document.getElementById("hamburger");

    window.addEventListener("scroll", windowScroll);
    hamburger.addEventListener("click", menu);
    windowScroll();
}

function menu(){
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