const express = require('express');
const fs = require('node:fs/promises');
const app = express();
const port = 3000;
const path = require('path');
require('dotenv').config();


async function getWeatherByCity() {
    let city = null;
 // fetching the city from the conf.json file
 try {
    const cityData = await fs.readFile('./conf.json', 'utf8')
    .then(cityData => cityData = JSON.parse(cityData))
    console.log(cityData.city);
    city = cityData.city;
 } catch (error) {
    console.error(error);
    return;
 }
 // fetching weather data from the API
 try {
    const weatherData = await fetch(`${process.env.API_URL}?city=${city}&key=${process.env.API_KEY}&lang=fr`)
    .then(weatherData => weatherData.json())
    console.log(weatherData);  
 } catch (error) {
    console.error(error);
    return;
 }
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