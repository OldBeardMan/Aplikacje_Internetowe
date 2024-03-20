
function oblicz()
                    { //Słówko var - oznacza zmienną; typ tej zmiennej
                    //będzie zależał od jej wartości;
                    //Pobierz element o id=l1 do zmiennej l1:
                    var l1=document.getElementById('l1');
                    //pobierz wartość (łańcuch tekstowy) wpisaną w polu
                    //formularza o id='l1':
                    l1=l1.value;
                    //Przekonwertuj (jeśli się uda) l1 do wartości typu int:
                    l1=parseInt(l1);
                    //Jeśli udała się próba konwersji to l1 zawiera wartość całkowitą
                    //Analogicznie realizujemy pobranie wartości z drugiego pola
                    // tekstowego, ale tym razem wszystko w jednej instrukcji:
                    var l2=parseInt(document.getElementById('l2').value);
                    //Teraz już możemy obliczyć sumę i ustawić wartość pola tekstowego
                    //o id='suma':
                    var s=document.getElementById('suma');
                    s.value=l1+l2;
                    }

function pozyczka()
                    {
                        var K=parseInt(document.getElementById('K').value);
                        var pr=parseInt(document.getElementById('pr').value);
                        var n=parseInt(document.getElementById('n').value);

                        console.log("Wartość K:", K);
                        console.log("Wartość pr:", pr);
                        console.log("Wartość n:", n)
                        
                        var pr_mc= pr / 12 / 100;
                        console.log("Wartość pr_mc:", pr_mc);

                        var rata=document.getElementById('rata');
                        var rata_kredytu = (K * pr_mc) / (1 - (1/Math.pow(1 + pr_mc, n)));
                        
                        console.log("Wartość rata_kredytu:", rata_kredytu);
                        
                        if (isNaN(rata_kredytu) || !isFinite(rata_kredytu)) {
                            alert("Wystąpił problem przy obliczaniu raty kredytu.");
                            return;
                        }
                        
                        rata.value = rata_kredytu.toFixed(2)

                        var suma=document.getElementById('suma');
                        var suma_kredytu = rata_kredytu * n;
                        suma.value=suma_kredytu.toFixed(2);
                    }

