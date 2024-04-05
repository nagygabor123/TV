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
    connection.query('SELECT cim, ytlink FROM youtube_videos', (error, results) => {//'SELECT kod, nev, leiras, kep1, kep2, kep3, kep4, kep5, kep6, fokep FROM filmek'
        if (error) throw error;
        const videos = results.map(result => ({
            /*kod: result.kod,
            nev: result.nev,
            leiras: result.leiras,
            kep1: result.kep1,
            kep2: result.kep2,
            kep3: result.kep3,
            kep4: result.kep4,
            kep5: result.kep5,
            kep6: result.kep6,
            fokep: result.fokep*/
            cim: result.cim,
            link:result.ytlink

        }));
        res.json(videos); // Az adatok JSON formátumban kerülnek elküldésre
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});
