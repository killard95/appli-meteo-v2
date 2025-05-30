const express = require('express');
const fs = require('node:fs/promises');
const app = express();
const port = 3000;
const path = require('path');
require('dotenv').config();


app.use(express.static(path.join(__dirname, '../FRONT')));

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname, "../FRONT/index.html"));
});

app.get('/api', async function (req, res) {
    try {
        // fetching the city from the conf.json file
        const cityData = await fs.readFile('./conf.json', 'utf8')
        .then(cityData => cityData = JSON.parse(cityData))
        city = cityData.city;
     
        // fetching weather data from the API
        const weatherData = await fetch(`${process.env.API_URL}?city=${city}*&key=${process.env.API_KEY}&lang=fr`)
        .then(weatherData => weatherData.json())
        res.json(weatherData);
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données météo.' });
    }
});




app.listen(port, () => {
    console.log(`Le serveur tourne sur le port ${port}`);
});