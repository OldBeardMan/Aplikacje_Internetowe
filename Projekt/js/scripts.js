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

    // Odczytywanie geolokalizacji i ustalanie języka na podstawie kraju
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyA3cH-xDSjsL38hxB9apy_rHUbkr5vEJRU`)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const country = data.results[0].address_components.find(comp => comp.types.includes("country")).long_name;
                    setLanguageBasedOnCountry(country);
                } else {
                    throw new Error('No results found in the geolocation response.');
                }
            })
            .catch(error => {
                console.error('Failed to retrieve location or country:', error);
                setLanguageBasedOnCountry('default'); // Użyj domyślnego języka w przypadku błędu
            });
        }, error => {
            console.error('Geolocation error:', error);
            setLanguageBasedOnCountry('default'); // Use default language on geolocation failure
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
        setLanguageBasedOnCountry('default'); // Use default language if geolocation not supported
    }
});

// Funkcja zmiany języka strony na podstawie kraju
function setLanguageBasedOnCountry(country) {
    const language = (country === 'Polska') ? 'pl' : 'en';
    loadLanguage(language);
}

// Funkcja załadowania języka
function loadLanguage(lang) {
    fetch(`locales/${lang}.json`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(translations => {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            el.textContent = translations[key] || "Missing translation";
        });
    })
    .catch(error => {
        console.error('Error loading the translation file:', error);
    });
}

//formularz
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = this;

    // Zbieranie danych z formularza
    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
        ageRange: form.querySelector('input[name="ageRange"]:checked') ? form.querySelector('input[name="ageRange"]:checked').value : '',
        country: form.country.value,
        favoriteAlbums: Array.from(form['favoriteAlbum[]']).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value)
    };

    // Zapisywanie danych do localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Wyświetlanie komunikatu o sukcesie i resetowanie formularza
    alert('Your message has been saved successfully!');
    form.reset();
});
