let redBox = document.getElementById('red');
redBox.addEventListener('mousedown', mousDwFunc);
redBox.addEventListener('mousemove', mousMoveFunc);

function mousDwFunc(event) {
    console.log(event, 'EVENT')
}
function mousMoveFunc(event) {
    console.log(event,redBox.offsetTop, 'EVENT')
    let y = `${redBox.offsetTop + event.y}`;
    let x = `${event.x + redBox.offsetLeft  }`;

    redBox.setAttribute('style', `top: ${y}px; left: ${x}px;`)
}
