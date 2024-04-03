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

app.get('/', (req, res) => {
    connection.query('SELECT cim, ytlink FROM youtube_videos', (error, results) => {
        if (error) throw error;

        console.log("Beolvasott adatok:");
        console.log(results); // Kiírjuk az adatokat a konzolba

        res.send('Az adatok beolvasva a konzolba. Ellenőrizd a szerver logokat!');
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});


//npm i
//npm install express
//npm install mysql
