/* BEGIN:JAVACRIPT FUNCTIONS */

window.onscroll = function() {
    menuSticky()
};

function menuSticky() {
    var navbar = document.querySelector("nav");
    if (window.pageYOffset >= 0.5) {
        navbar.classList.add("scrolling");
    } else {
        navbar.classList.remove("scrolling");
    }
}

/* END:JAVACRIPT FUNCTIONS */