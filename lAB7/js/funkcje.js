function pokaz(id)
{
    var tresc="";
    switch (id)
        { 
            case 2: tresc += pokazGalerie();break;
            case 3: tresc += pokazPost(); break;
            case 4: tresc += pokazKontakt();break;
            default: tresc += pokazO();
        }
    //pobierz element o wskazanym id i ustaw jego nową zawartość:
    document.getElementById('blok').innerHTML = tresc;
}

function pokazO()
{
    var tresc ='<h2><br />Pierwsze kroki</h2> ';
    //operator += uzupełnia łańcuch kolejną porcją znaków:
    tresc += 
        '<p> W aplikacjach typu SPA ......</p>'+
        '<p class="srodek"><img src="images/1.jpeg" alt="Zdjęcie" /></p>'+
        '<article><h2>Wady SPA</h2><p>'+
        ' Czas wytworzenia oraz nakład pracy ... </p></article>';
    //przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
    return tresc;
}

function pokazGalerie()
{
    var tresc='<h2><br />Moja galeria</h2>';
    tresc+=' <div class="galeria">';
    //wygeneruj kod HTML z obrazami za pomocą pętli for:
    for(i=2;i<10;i++)
        {
            tresc+='<div class="slajd"> <img src="images/'+i+'.jpg" alt="zdj"></div>';
        }
    return tresc+'</div>';
}

function pokazKontakt()
{
    var tresc='<h2><br>Kontakt</h2>';
    tresc+=
        '<section class="srodek">'+
            '<img src="images/contact_image.jpg" alt="Contact Image">'+
            '<p>Address: ul. Sezamkowa 1B 21-371 Bombrowniki</p>'+
            '<p>Phone: 123-456-789</p>'+
            '<p>Email: ciasteczkowy@potwor.com</p>'+
        '</section>';
    return tresc;
}

function pokazPost()
{
    //funkcja generuje kod formularza – dane wpisane w odpowiednie pola przez
    //użytkownika zostaną przekazane mailem na wskazany adres, ale najpierw po
    //zajściu zdarzenia submit (wyślij) – zostanie wywołana funkcja pokazDane()
    tresc='<h2><br>Dodaj post</h2>';
    tresc+=
        '<article class="srodek" ><form action="mailto:b.panczyk@pollub.pl" method="post" onsubmit="return pokazDane();">'+
        'Twój email:<br> <input type="email" name="email" id="email" required /><br>'+
        'Nazwisko i imię:<br> <input type="text" name="imienazwisko" id="imienazwisko" pattern="(?=.*[a-z])(?=.*[A-Z]).{3,40}" required /><br>'+
        'Telefon:<br> <input type="tel" name="numer" id="numer" required><br>'+
        '<p>Zainteresowania:</p>'+
        '<input type="checkbox" name="Sport">Sport'+
        '<input type="checkbox" name="Muzyka">Muzyka'+
        '<input type="checkbox" name="Film">Film'+
        '<input type="checkbox" name="Inne">Inne<br>'+
        '<p>Wiek:</p>'+
        '<input type="radio" name="ile" required>Mniej niż 10'+
        '<input type="radio" name="ile" required>10-20'+
        '<input type="radio" name="ile" required>21-30'+
        '<input type="radio" name="ile" required>31-40'+
        '<input type="radio" name="ile" required>41-50'+
        '<input type="radio" name="ile" required>Więcej niż 50<br>'+
        'Komentarz: <br><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea>'+
        '<br> <input type="submit" name="wyslij" value="Wyślij" />'+
        '</form></article>';
    return tresc;
}

function pokazDane()
{
    var dane="Następujące dane zostaną wysłane:\n";
    dane+="Email: "+document.getElementById('email').value+"\n"+
    "Nazwisko i imię: "+document.getElementById('imienazwisko').value+"\n"+
    "Telefon: "+document.getElementById('numer').value+"\n"+
    "Wiadomość: "+document.getElementById('wiadomosc').value+"\n";
    if (window.confirm(dane)) return true;
    else return false;
}
