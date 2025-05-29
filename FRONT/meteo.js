let d = {};
let tab_jour = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var tab_mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];


setInterval(() => {
    date = new Date();
    jour = date.getDay();
    day = date.getDate(); 
    mois = date.getMonth(); // Les mois commencent à 0
    heure = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    console.log(`Aujourd'hui, nous sommes le ${tab_jour[jour]} ${day} ${tab_mois[mois]} ${date.getFullYear()} et il est ${heure}:${minute}:${second}`);
}, 1000);

async function datas() {
    const data = await fetch('/api')
    .then(data => data.json())
    console.log(data);
    d = {};
    d = data.data[0];
} 

// datas();
setTimeout(() => {
    console.log(d);
}, 2000);
