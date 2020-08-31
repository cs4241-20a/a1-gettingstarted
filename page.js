//picture will move back and forth
function animation() {
    let elem = document.getElementById("animate");
    let pos = 0;
    let towardsRight = true;
    let id = setInterval(move, 100);
    function move() {
        elem.style.left = pos + "px";
        if (pos > 200) {
            towardsRight = false;
        }
        if (pos <= 0) {
            towardsRight = true;
        }
        if (towardsRight) {
            pos += 1;
        } else {
            pos -= 1;
        }
    }
}

//text will change color
function textChange() {
    let elem = document.getElementsById("header");
    if (elem.style.colors == "chartreuse") {
        elem.style.colors = "violet"
    } else {
        elem.style.colors = "chartreuse"
    }
}

//link will get big when moused over
function bigLink(elem) {
    elem.style.fontSize = "xx-large";
}

//run the animation and textchange when the page is loaded
window.onload = function() {
    animation();
    setInterval(textChange(), 1000);
}