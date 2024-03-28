// Sprawdź czy DOM został załadowany:
document.addEventListener("DOMContentLoaded", function() {
    // Obsługa zdarzenia kliknięcia na b1:
    var but1 = document.getElementById("b1");
    but1.addEventListener('click', function(){
        fetch("http://localhost/testajax/dane/info.txt")
        .then(response => response.text())
        .then(data => { 
            document.getElementById("s1").innerHTML = data; 
        })
        .catch(error => console.error('Wystąpił błąd:', error));
    },
    false);

    // Obsługa zdarzenia kliknięcia na b2:
    var but2 = document.getElementById("b2");
    but2.addEventListener('click', function(){
        fetch("http://localhost/testajax/dane/act.txt")
        .then(response => response.text())
        .then(data => { 
            document.getElementById("s1").innerHTML = data; 
        })
        .catch(error => console.error('Wystąpił błąd:', error));
    },
    false);

    // Obsługa zdarzenia kliknięcia na b3:
    var but3 = document.getElementById("b3");
    but3.addEventListener('click', function(){
        fetch("http://localhost/testajax/dane/gallery.txt")
        .then(response => response.text())
        .then(data => { 
            document.getElementById("s1").innerHTML = data; 
        })
        .catch(error => console.error('Wystąpił błąd:', error));
    },
    false);

    // Obsługa zdarzenia kliknięcia na b4:
    var but4 = document.getElementById("b4");
    but4.addEventListener('click', function(){
        fetch("http://localhost/testajax/dane/form.txt")
        .then(response => response.text())
        .then(data => { 
            document.getElementById("s1").innerHTML = data; 
        })
        .catch(error => console.error('Wystąpił błąd:', error));
    },
    false);
});
