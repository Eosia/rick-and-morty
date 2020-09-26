const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head");
let lastCloud;


// false si pas fini et true si fini 
let timeUp = false; 
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.ramdom()*(max-min) + min);
}

function randomCloud(clouds) {
    const indexCloud = Math.floor(Math.random()* clouds.length);
    const cloudSelect = [indexCloud];

    if(cloudSelect == lastCloud) {
        return randomCloud(clouds);
    }

    return cloudSelect;
}

function showHead() {
    const time = randomTime(600, 1000);
    const cloud = randomCloud(clouds);
}

