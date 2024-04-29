# Nazwa Projektu

Mój projekt jest stroną internetową poświęconą mojej autorskiej muzyce, razem z informacjami na jej temat i możliwością przesłuchania całej mojej dykografii.

## Wymagania

Do uruchomienia projektu niezbędne jest:
- Node.js (można pobrać z oficjalnej strony Node.js (https://nodejs.org/))

## Instalacja

Aby zainstalować niezbędne zależności, proszę otworzyć wiersz poleceń (CMD) lub PowerShell w katalogu głównym projektu i wykonać:

npm install

## Uruchomienie aplikacji

Aby uruchomić serwer lokalnie na swoim komputerze, należy wpisać w terminalu:

npm start

Po uruchomieniu, aplikacja będzie dostępna w przeglądarce internetowej pod adresem `http://localhost:3000`.

## Struktura Projektu

Oto podstawowa struktura projektu i jego kluczowe elementy:
- `public/`: Folder zawierający zasoby statyczne takie jak HTML, CSS, JS oraz inne pliki, które są bezpośrednio używane przez aplikacje.
  - `assets/`: Zawiera obrazy i inne pliki, które są wymagane przez moje strony HTML.
  - `css/`: Style CSS używane przez strony HTML.
  - `js/`: Skrypty JavaScript używane przez strony HTML.
  - `locales/`: Pliki json, używane w skrpcie JavaScript tłumaczącym strone na język polski.
  - `*.html`: Strony HTML.
- `node_modules/`: Folder zawierający wszystkie pakiety Node.js zainstalowane przez npm.
- `server.js`: Główny plik serwera Node.js, który konfiguruje i uruchamia serwer Express.

