/* BEGIN:JAVACRIPT FUNCTIONS */

window.onscroll = function() {
    menuSticky()
};
var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function menuSticky() {
    if (window.pageYOffset >= 0.5) {
        navbar.classList.add("scrolling");
    } else {
        navbar.classList.remove("scrolling");
    }
}

/* END:JAVACRIPT FUNCTIONS */