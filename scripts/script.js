'use strict'
document.addEventListener("DOMContentLoaded", function () {
    $(".category-slider").owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left vertical-nav-left'></i>", "<i class='fa fa-angle-right vertical-nav-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 4,
            }
        }
    });

    $(".brand-carousel").owlCarousel({
        items: 6,
        nav: false,
        dots: false,
        margin: 10,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left vertical-nav-left'></i>", "<i class='fa fa-angle-right vertical-nav-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 3,
            },
            700: {
                items: 5,
            }
        }
    })

    $(".vertical-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left vertical-nav-left'></i>", "<i class='fa fa-angle-right vertical-nav-right'></i>"]
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          let navbar_height = document.querySelector('header').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });

    document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {

        element.addEventListener('click', function (e) {
            let nextEl = element.nextElementSibling;
            let parentEl = element.parentElement;

            if (nextEl) {
                e.preventDefault();
                let mycollapse = new bootstrap.Collapse(nextEl);

                if (nextEl.classList.contains('show')) {
                    mycollapse.hide();
                } else {
                    mycollapse.show();
                    // find other submenus with class=show
                    var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                    // if it exists, then close all of them
                    if (opened_submenu) {
                        new bootstrap.Collapse(opened_submenu);
                    }
                }
            }
        }); // addEventListener
    }) // forEach
});
  // DOMContentLoaded  end