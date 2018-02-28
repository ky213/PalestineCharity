/* Slider */
var controls = document.querySelector("#controls");
var slides = document.querySelectorAll(".slides");

controls.addEventListener("click", function (event) {
    var slideLeft = 0;
    var button = event.target;
    /* Setting slide buttons colors */
    if (button.id !== "controls") {
        for (var el of this.children) {
            if (el.id === button.id)
                el.style.background = "#ff3450"
            else
                el.style.background = "white"
        }
        /* determine each slide horizontal position */
        if (button.id === "c1") slideLeft = 0;
        if (button.id === "c2") slideLeft = -100;
        if (button.id === "c3") slideLeft = -200;
        /* moving the slides along the horizontal axis */
        slides[0].style.left = slideLeft + "%";
        slides[1].style.left = slideLeft + 100 + "%";
        slides[2].style.left = slideLeft + 200 + "%";
    }
});

/* Menu hide on scroll */
var menu = document.querySelector("#menu");
var lastScroll = 0;
document.addEventListener('scroll', function (event) {
    if (event.pageY - lastScroll > 0 && event.pageY > 135)
        menu.style.top = "-135px";
    else if (event.pageY - lastScroll < -10)
        menu.style.top = "0";

    lastScroll = event.pageY;
})