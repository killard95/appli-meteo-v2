const express = require('express');
const fs = require('node:fs/promises');
const app = express();
const port = 3000;
const path = require('path');
require('dotenv').config();


async function getWeatherByCity() {
 // fetching the city from the conf.json file
    const cityData = await fs.readFile('./conf.json', 'utf8')
    .then(cityData => cityData = JSON.parse(cityData))
    console.log(cityData.city);
    // fetching weather data from the API
    const weatherData = await fetch(`${process.env.API_URL}?city=${cityData.city}&key=${process.env.API_KEY}&lang=fr`)
    .then(weatherData => weatherData.json())
    console.log(weatherData);  
};
   




getWeatherByCity();

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../FRONT/index.html'));
});

app.listen(port, () => {
    console.log(`Le serveur tourne sur le port ${port}`);
});