// Fix the Header
window.onscroll = function() {fixHeader()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function fixHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Buttons
function buyClick() {
    console.log("Товар добавить в корзину");
}

var discountMenuBtn = document.getElementById("discountMenu");

discountMenuBtn.onclick = function() {
    console.log('Open discounts');
}

var btnMoreDetails = document.querySelector('.btn__more');

btnMoreDetails.onclick = function() {
    console.log("Get more details")
}