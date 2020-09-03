
function main() {

    // Code snippet from: http://www.codeblocq.com/2016/05/Two-Ways-of-Creating-an-Animation-Loop-in-JavaScript/
    // Modified so that swan would loop through page instead of bouncing off of edges
    const refreshRate = 1000 / 60;
    const maxXPosition = screen.width;
    let swan = document.getElementById('swanImg');
    let speedX = 2;
    let positionX = -500;

    window.setInterval(() => {
        positionX = positionX + speedX;
        if (positionX > maxXPosition) {
            swan.style.left = "-500";
            positionX = -500;
        }
        else {
            swan.style.left = positionX + 'px';
        }
    }, refreshRate);
}