/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
        // Skrypt JavaScript do zmiany tła w zależności od podstrony
        // Załóżmy, że mamy zmienne globalne lub inny sposób określania aktualnej podstrony

        // Zakładając, że mamy zmienną currentPage, która zawiera nazwę aktualnej podstrony
        // Możemy zmienić zmienną CSS w zależności od tej wartości

        // Przykład:
        var currentPage = "home"; // Przykładowa wartość, można ją ustawić na aktualną podstronę

        if (currentPage === "home") {
            document.documentElement.style.setProperty('--bg-image', 'url("../assets/img/bg-home.jpg")');
        } else if (currentPage === "about") {
            document.documentElement.style.setProperty('--bg-image', 'url("../assets/img/bg-about.jpg")');
        }