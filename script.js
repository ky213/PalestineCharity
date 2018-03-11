/* Global */
//fix upcoming events section height
(function changeHeight () {
    var section = document.querySelector('#upcoming-events .section-body');
    setTimeout(() => {
        section.style.height = section.children[2].clientHeight - 6 + 'px';
        changeHeight ();
    }, 100);
})();


    /* Slider */
    (function () {
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
    })();

/* Menu hide on scroll */
(function () {
    var menu = document.querySelector("#menu");
    var lastScroll = 0;
    document.addEventListener('scroll', function (event) {
        if (event.pageY - lastScroll > 0 && event.pageY > 135)
            menu.style.top = "-135px";
        else if (event.pageY - lastScroll < -10 || event.pageY < 135)
            menu.style.top = "0";

        lastScroll = event.pageY;
    })
})();

/* Facts counters */
(function () {
    var numbers = document.querySelectorAll('#facts h1');
    //counts top distances
    var h1 = numbers[0].offsetTop + numbers[0].clientHeight;
    var h2 = numbers[1].offsetTop + numbers[1].clientHeight;
    var h3 = numbers[2].offsetTop + numbers[2].clientHeight;
    var h4 = numbers[3].offsetTop + numbers[3].clientHeight;

    function count(el, max) {
        var i = 0;
        var int = setInterval(function () {
            el.innerHTML = i.toLocaleString('en');
            if (i >= max) clearInterval(int);
            i += Math.floor(max / 50);
        }, 30)
    }

    //count roll up
    var count1 = false;
    var count2 = false;
    var count3 = false;
    var count4 = false;
    function counters(event) {
        var scroll = event.pageY;
        var view = window.innerHeight;

        if (scroll >= h1 - view && !count1) {
            count(numbers[0], 78250);
            count1 = true;
        }

        if (scroll >= h2 - view && !count2) {
            count(numbers[1], 34314);
            count2 = true;
        }

        if (scroll >= h3 - view && !count3) {
            count(numbers[2], 25458);
            count3 = true;
        }

        if (scroll >= h4 - view && !count4) {
            count(numbers[3], 103570);
            count4 = true;
        }

        if (count1 && count2 && count3 && count4)
            document.removeEventListener('scroll', counters);
    }
    document.addEventListener('scroll', counters);
})();

/* Ucoming Events Slider*/
(function () {
    var rightArrow = document.querySelector('#right');
    var leftArrow = document.querySelector('#left');
    var slides = document.querySelectorAll('.events-slide')
    var move = 0;

    rightArrow.addEventListener('click', function (e) {
        if (move === 0) {
            move = 100;
            slides[0].style.left = -move + "%";
            slides[1].style.left = -move + 100 + "%";
        }
    })

    leftArrow.addEventListener('click', function (e) {
        if (move === 100) {
            move = 0;
            slides[0].style.left = move + "%";
            slides[1].style.left = move + 100 + "%";
        }
    })





})();