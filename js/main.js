window.addEventListener('load', init);


let navbar;
let hamburger;
let backdrop;
// Image carousel
let imageIndex = 1;
let dots = [];
let images = [];
let games = [];
let gameButtons = [];
let dotsHolder;
let currentGame = 0;

function init() {
    navbar = document.getElementById("navbar")
    hamburger = document.getElementById("hamburger");
    backdrop = document.getElementById("games")
    images = document.getElementsByClassName("slide");
    games = document.getElementsByClassName("game");
    gameButtons = document.getElementsByClassName("gameButton");
    dotsHolder = document.getElementById("dots");
    window.addEventListener("scroll", windowScroll);
    hamburger.addEventListener("click", menu);
    windowScroll();
    dotSetup();
    switchActive();
    autoSlide();
    changeCurrentGame(0)
    autoSlideGames();
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

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

reveal();
window.addEventListener("scroll", reveal);

function dotSetup() {
    for (let i = 1; i <= images.length; i++) {
        let span = document.createElement('span');
        span.classList.add("dot");
        span.onclick = function () {
            currentSlide(i);
        }
        dotsHolder.appendChild(span);
        dots.push(span);

    }
}

function currentSlide(n) {
    switchActive(imageIndex = n);
}

function plusSlides(n, swapSide) {
    switchActive(imageIndex += n, swapSide);
}

function switchActive(x, swapSide) {
    let i;

    if (x > images.length) {
        imageIndex = 1
    }
    if (x < 1) {
        imageIndex = images.length
    }

    if (imageIndex > images.length) {
        imageIndex = 1
    }
    console.log(imageIndex)
    Array.prototype.forEach.call(images, function (slide, index) {
        // Do stuff here
        slide.style.transform = `translateX(${(index - imageIndex + 1) * 100}%)`;
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    })
    dots[imageIndex - 1].classList.add("active");
    backdrop.style.backgroundImage = images[imageIndex - 1].style.backgroundImage;


}

function changeCurrentGame(gameToGet) {
    currentGame = gameToGet;

    Array.prototype.forEach.call(gameButtons, function (button, index) {
        button.className = button.className.replace(" active", "");
    })
    gameButtons[gameToGet].classList.add("active");
    Array.prototype.forEach.call(games, function (game, index) {
        // Do stuff here
        console.log(index - gameToGet);
        game.style.transform = `translateY(${(index - gameToGet) * 100}%)`;
    });
}


function autoSlide() {
    plusSlides(1, 0)
    setTimeout(autoSlide, 10000);
}

function autoSlideGames() {
    currentGame++;
    if (currentGame > games.length -1) {
        currentGame = 0;
    }
    changeCurrentGame(currentGame);
    setTimeout(autoSlideGames, 20000)
}