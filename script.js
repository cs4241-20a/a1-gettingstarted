const COLORS = ["#4578C6", "#5797F7", "#4578C4"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function changeColor() {
    let headerTxt = document.getElementById("main-txt");
    headerTxt.style.color = COLORS[getRandomInt(3)];
}

setInterval(changeColor, 2000)
