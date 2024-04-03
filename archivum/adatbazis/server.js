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

app.get('/data', (req, res) => {
    connection.query('SELECT cim, ytlink FROM youtube_videos', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});

//npm i
//npm install express
//npm install mysql
