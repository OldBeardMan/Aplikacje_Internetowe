// Funkcja do zapisu pary koloru w sessionStorage
function saveColorPair() {
    var hexColor = document.getElementById('hexColorInput').value;
    var colorName = document.getElementById('colorNameInput').value;
    localStorage.setItem(hexColor, colorName);
}

// Funkcja do wyświetlenia wszystkich zapisanych par kolorów
function showAllPairs() {
    var colorList = document.getElementById('colorList');
    colorList.innerHTML = '';

    for (var i = 0; i < localStorage.length-1; i++) {
        var hexColor = localStorage.key(i);
        var colorName = localStorage.getItem(hexColor);

        var listItem = document.createElement('li');
        listItem.textContent = colorName + ', kolor kodu: ' + hexColor;
        colorList.appendChild(listItem);
        listItem.style.backgroundColor = '#' + hexColor;
    }
}

// Funkcja do usuwania wszystkich danych z sessionStorage
function clearStorage() {
    localStorage.clear();
    showAllPairs(); // Aktualizacja wyświetlania listy
}