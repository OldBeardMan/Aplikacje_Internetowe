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
        var itemKey = localStorage.key(i);
        var product = JSON.parse(localStorage.getItem(itemKey));

        var listItem = document.createElement('li');
        var itemInfo = 'Nazwa: ' + product.nazwa + ', Cena: ' + product.cena + ', Kolor: ' + product.kolor + ', Liczba sztuk: ' + product.liczbasztuk;
        listItem.textContent = itemInfo;

        var editButton = document.createElement('button');
        editButton.textContent = 'Edytuj';
        editButton.setAttribute('data-key', itemKey);
        editButton.onclick = function() {
            editItem(this.getAttribute('data-key'));
        };

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Usuń';
        deleteButton.setAttribute('data-key', itemKey);
        deleteButton.onclick = function() {
            removeItem(this.getAttribute('data-key'));
        };

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        cartList.appendChild(listItem);
    }
}

function removeItem(key) {
    localStorage.removeItem(key);
    showCart();
}

function searchCart() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var cartList = document.getElementById('cartList');
    cartList.innerHTML = '';

    for (var i = 0; i < localStorage.length; i++) {
        var itemKey = localStorage.key(i);
        var product = JSON.parse(localStorage.getItem(itemKey));

        if (product.nazwa.toLowerCase().includes(searchTerm)) {
            var listItem = document.createElement('li');
            var itemInfo = 'Nazwa: ' + product.nazwa + ', Cena: ' + product.cena + ', Kolor: ' + product.kolor + ', Liczba sztuk: ' + product.liczbasztuk;
            listItem.textContent = itemInfo;

            var editButton = document.createElement('button');
            editButton.textContent = 'Edytuj';
            editButton.setAttribute('data-key', itemKey);
            editButton.onclick = function() {
                editItem(this.getAttribute('data-key'));
            };

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Usuń';
            deleteButton.setAttribute('data-key', itemKey);
            deleteButton.onclick = function() {
                removeItem(this.getAttribute('data-key'));
            };

            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);

            cartList.appendChild(listItem);
        }
    }
}


function clearCart() {
    localStorage.clear();
    showCart();
}

function editItem(key) {
    var product = JSON.parse(localStorage.getItem(key));

    var editForm = document.createElement('form');

    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nazwa produktu:';
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = product.nazwa;

    var priceLabel = document.createElement('label');
    priceLabel.textContent = 'Cena:';
    var priceInput = document.createElement('input');
    priceInput.type = 'text';
    priceInput.value = product.cena;

    var colorLabel = document.createElement('label');
    colorLabel.textContent = 'Kolor:';
    var colorInput = document.createElement('input');
    colorInput.type = 'text';
    colorInput.value = product.kolor;

    var quantityLabel = document.createElement('label');
    quantityLabel.textContent = 'Liczba sztuk:';
    var quantityInput = document.createElement('input');
    quantityInput.type = 'text';
    quantityInput.value = product.liczbasztuk;

    var saveButton = document.createElement('button');
    saveButton.textContent = 'Zapisz';
    saveButton.onclick = function() {
        product.nazwa = nameInput.value;
        product.cena = priceInput.value;
        product.kolor = colorInput.value;
        product.liczbasztuk = quantityInput.value;
        localStorage.setItem(key, JSON.stringify(product));
        showCart();
        editForm.remove();
    };

    editForm.appendChild(nameLabel);
    editForm.appendChild(nameInput);
    editForm.appendChild(priceLabel);
    editForm.appendChild(priceInput);
    editForm.appendChild(colorLabel);
    editForm.appendChild(colorInput);
    editForm.appendChild(quantityLabel);
    editForm.appendChild(quantityInput);
    editForm.appendChild(saveButton);

    var cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
    cartList.appendChild(editForm);
}