function oblicz(){
    var tab = document.getElementsByName("Type");
    var op; 
    for(let i=0;i<tab.length;i++){
        if(tab[i].checked) op = tab[i].value;
        }

    var X=parseInt(document.getElementById('X').value);
    var Y=parseInt(document.getElementById('Y').value);
       
    var wynik=document.getElementById('wynik');

    switch (op){

        case '+':
            wynik.value = X + Y;
            break;
        
            case '-':
                wynik.value = X - Y;
                break;

                case '*':
                    wynik.value = X * Y;
                    break;

                    case '/':
                        wynik.value = X / Y;
                        break;
    }
    }