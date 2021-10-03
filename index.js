let redBox = document.getElementById('red');
redBox.addEventListener('mousedown', mousDwFunc);

function mousDwFunc (event) {
console.log(event, 'EVENT')
event.target.draggable = true;
redBox.setAttribute('transform', 'matrix')
}