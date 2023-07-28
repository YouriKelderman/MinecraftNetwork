window.addEventListener('load', init);


let coinsSpan;
let costSpan;
let range;
let flood;
let parent;
let prices = [
    [60, 1.49],
    [300, 6.99],
    [980, 19.99],
    [1980, 39.99],
    [3280, 66.99],
    [6480, 133.49]
]

function init() {
    range = document.getElementById("coinRange");
    coinsSpan = document.getElementById("coins");
    costSpan = document.getElementById("cost");
    parent = document.getElementById("amount")
    flood = document.getElementById("flood");
    range.max = (prices.length -1).toString();
    sliderChange(0)
    range.value = 0;
}

function sliderChange(e) {
    coinsSpan.innerHTML = `Coins: ${prices[e][0]}`
    costSpan.innerHTML = `$${prices[e][1]}`;
    let heightToUse = (e/prices.length) * parent.getBoundingClientRect().height +50;
    console.log(heightToUse);
    flood.style.height = `${heightToUse}px`;
}