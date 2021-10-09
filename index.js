let box = document.querySelectorAll('.colorSq')
let boxPlaces = document.getElementById('boxPlace');
createBoxPlaces();

function createBoxPlaces() {
    for (let i = 0; i < 4; i++) {
        boxPlaces.innerHTML += `<div class="typeBox sq"></div>`
    }
}

let offsetY;
let offsetX;
let inDrag = false;

box.forEach(function (item) {
    return item.addEventListener('mousedown', function(event){
        offsetX = event.offsetX;
        offsetY = event.offsetY;
        item.style.cursor = 'grabbing';
        inDrag = true;
        console.log('offsetX'+'-'+offsetX, 'offsetY'+'-'+offsetY);
    }) 
});

box.forEach(function (item) {
    return item.addEventListener('mousemove', function(event){
      if(!inDrag){
          return
      }
      item.style.top = (event.pageY-offsetY) + 'px';
      item.style.left = (event.pageX-offsetX) + 'px';
      item.style.cursor = 'grabbing';
      console.log('eventpageX'+'-'+event.pageX, 'eventpageY'+'-'+event.pageY);
      console.log('eventX'+'-'+item.style.left, 'eventY'+'-'+item.style.top);
  });
});
      
box.forEach(function (item) {
        return item.addEventListener('mouseup', function(event){
          item.style.top = (event.pageY-offsetY) + 'px';
          item.style.left = (event.pageX-offsetX) + 'px';
          inDrag = false;
          console.log(event.target);
        });
});
// redBox.addEventListener('dragstart', function(event){
//   offsetX = event.offsetX;
//   offsetY = event.offsetY;
//   console.log('offsetX'+'-'+offsetX, 'offsetY'+'-'+offsetY);
// })

// redBox.addEventListener('dragend', function(event){
//     redBox.style.top = (event.pageY-offsetY) + 'px';
//     redBox.style.left = (event.pageX-offsetX) + 'px';
//     console.log('eventpageX'+'-'+event.pageX, 'eventpageY'+'-'+event.pageY);
//     console.log('eventX'+'-'+redBox.style.left, 'eventY'+'-'+redBox.style.top);
// })


// redBox.addEventListener('mousedown', mousDwFunc);

// function mousDwFunc (event) {
// console.log(event, 'EVENT')
// event.target.draggable = true;
// redBox.setAttribute('transform', 'matrix')
// }



