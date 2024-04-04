const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tv'
});

connection.connect();

// Statikus fájlok kiszolgálása (például az index.html)
app.use(express.static('public'));

// Útvonal a videók lekérdezéséhez
app.get('/videos', (req, res) => {
    connection.query('SELECT cim, ytlink FROM youtube_videos', (error, results) => {
        if (error) throw error;
        const videos = results.map(result => ({
            cim: result.cim,
            ytlink: result.ytlink
        }));
        res.json(videos); // Az adatok JSON formátumban kerülnek elküldésre
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});
