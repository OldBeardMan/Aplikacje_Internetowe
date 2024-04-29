const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // 'public' to katalog z plikami statycznymi

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Główna strona aplikacji
});

app.listen(port, () => {
  console.log(`Aplikacja uruchomiona na http://localhost:${port}`);
});
