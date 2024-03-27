function saveCart() {
    var item = {};
    productName = document.getElementById('nazwa').value;
    item.cena = document.getElementById('cena').value;
    item.nazwa = document.getElementById('nazwa').value;
    item.kolor = document.getElementById('kolor').value;
    item.liczbasztuk = document.getElementById('liczbasztuk').value;
    console.log(item)
    localStorage.setItem(productName, JSON.stringify(item));
}

function showCart() {
    var cartList = document.getElementById('cartList');
    cartList.innerHTML = '';

    for (var i = 0; i < localStorage.length; i++) {
        var item = localStorage.key(i);
        var product = JSON.parse(localStorage.getItem(item));

        var listItem = document.createElement('li');
        listItem.textContent = product;
        cartList.appendChild(listItem);
    }
}

function clearCart() {
    localStorage.clear();
    showCart();
}