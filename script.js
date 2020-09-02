const COLORS = ["#4578C6", "#5797F7", "#4578C4"];
const RADIUSES = ["10px", "20px", "30px", "40px", "50px"];
const headerTxt = document.getElementById("main-txt");
const elem = document.getElementById("elem");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function animate() {
    headerTxt.style.color = COLORS[getRandomInt(3)];
    elem.style.borderRadius= RADIUSES[getRandomInt(5)];
}

setInterval(animate, 1000)
