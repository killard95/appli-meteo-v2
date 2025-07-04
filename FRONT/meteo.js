// arrays for having the name of days and months
const tab_jour = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const tab_mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

// get date and hour in real time to display it and reload new datas every hours
setInterval(() => {
    date = new Date();
    jour = date.getDay();
    day = date.getDate(); 
    mois = date.getMonth();
    heure = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    if (minute == '00' && second == '00') {
        datas();
    }
    if (heure == '00' && minute == '00' && second == '00') {
        getDay();
    }
    displayHour(heure, minute, second);
}, 1000);


function getDay() {
    date = new Date();
    jour = date.getDay();
    numJour = date.getDate(); 
    mois = date.getMonth();
    an = date.getFullYear();
    displayDate(jour, numJour, mois, an);
}

// async function to get data from the api and lauch every display functions
async function datas() {
    const data = await fetch('/api')
    .then(data => data.json())
    console.log(data);
    const datas = data.data[0];
    displayCity(datas.city_name, datas.country_code);
    displayIcon(datas.weather.icon, datas.weather.description);
    displayTemperature(Math.round(datas.temp));
    displayDescription(datas.weather.description);
    displayTemperatureRess(Math.round(datas.app_temp));
    displayHumidity(datas.rh)
    cardColor(datas.sunrise, datas.sunset);
} 

function displayCity(city, country_code) {
    let ville = document.querySelector('#ville');
    let map = document.querySelector("#map");
    let icon = `<i class="fa-solid fa-location-dot fa-xl"></i>`;
    map.innerHTML = icon;
    ville.innerText = `${city}, ${country_code}`;
    getDay();

}


function displayDate(jour, numJour, mois, year) {
    let day = document.querySelector('#day');
    day.innerText = `${tab_jour[jour]} ${numJour} ${tab_mois[mois]} ${year}`;
}

function displayHour(heure, minute, seconde) {
    let hour = document.querySelector('#heure');
    hour.innerText = `${heure} : ${minute} : ${seconde}`
}

function displayIcon(image, alt) {
    let img = document.querySelector('#icon');
    img.src = `icons/${image}.png`;
    img.alt = `${alt}`;
}

function displayTemperature(temperature) {
    let temp = document.querySelector('#temp');
    temp.innerText = `${temperature}°C`;
}

function displayDescription(description) {
    let weatherDescription = document.querySelector('#description');
    weatherDescription.innerText = `${description}`;
}

function displayTemperatureRess(temperatureRess) {
    let ressenti = document.querySelector('#ressenti');
    let thermo = document.querySelector('#thermo');
    let icon = `<i class="fa-solid fa-temperature-half fa-2xl"></i>`
    thermo.innerHTML = icon;
    ressenti.innerText = `${temperatureRess}°C\n ressenti`;
}
function displayHumidity(humidity) {
    let humid = document.querySelector('#humid');
    let drop = document.querySelector('#drop');
    let icon = `<i class="fa-solid fa-droplet fa-xl"></i>`
    drop.innerHTML = icon;
    humid.innerText = `${humidity}%\n humidité`;
}

// function to change the theme (background color) depending on hours of sunrise and sunset
function cardColor(sunrise, sunset) {
    let card = document.querySelector('#card');
    let sunriseTime = sunrise
    let sunriseHour = parseInt(sunriseTime.slice(0,2)) + 2;
    let sunriseMinute = parseInt(sunriseTime.slice(3,5));
    let sunsetTime = sunset;
    let sunsetHour = parseInt(sunsetTime.slice(0,2)) + 2;
    let sunsetMinute = parseInt(sunsetTime.slice(3,5));

    setInterval(() => {
        date = new Date();
        heure = date.getHours();
        minute = date.getMinutes();
        if (heure == sunsetHour && minute > sunsetMinute || heure > sunsetHour && heure < 24 || heure < sunriseHour || heure == sunriseHour && minute < sunriseMinute) {
            card.style.background = "linear-gradient(#000019, #000033, #00004C)";
        } else {
            card.style.background = "linear-gradient(#0000FF, #4169E1, #6495ED)";
        }
    },1000)
}

datas();
