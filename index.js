let box = document.querySelectorAll('.colorSq')
let boxPlaces = document.getElementById('boxPlace');

const fill = document.querySelector('.fill');
const empties = document.querySelector('.empty');

createBoxPlaces();

function createBoxPlaces() {
    for (let i = 0; i < 4; i++) {
        boxPlaces.innerHTML += `<div class="typeBox empty"></div>`
    }
}

// let offsetY;
// let offsetX;
// let inDrag = false;

// box.forEach(function (item) {
//     return item.addEventListener('mousedown', function(event){
//         offsetX = event.offsetX;
//         offsetY = event.offsetY;
//         item.style.cursor = 'grabbing';
//         inDrag = true;
//         console.log('offsetX'+'-'+offsetX, 'offsetY'+'-'+offsetY);
//     }) 
// });

// box.forEach(function (item) {
//     return item.addEventListener('mousemove', function(event){
//       if(!inDrag){
//           return
//       }
//       item.style.top = (event.pageY-offsetY) + 'px';
//       item.style.left = (event.pageX-offsetX) + 'px';
//       item.style.cursor = 'grabbing';
//       console.log('eventpageX'+'-'+event.pageX, 'eventpageY'+'-'+event.pageY);
//       console.log('eventX'+'-'+item.style.left, 'eventY'+'-'+item.style.top);
//   });
// });
      
// box.forEach(function (item) {
//         return item.addEventListener('mouseup', function(event){
//           item.style.top = (event.pageY-offsetY) + 'px';
//           item.style.left = (event.pageX-offsetX) + 'px';
//           inDrag = false;
//         });
// });

// Drag events
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
    }

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Drag functions
function dragStart(){
this.className += 'hold';
setTimeout(() => (this.className ='invisible'), 0);
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(e){
e.preventDefault();
}
function dragEnter(){
e.preventDefault();
this.className += ' hovered';
}
function dragLeave(){
this.className = 'empty';  
}
function dragDrop(){
this.className = 'empty';  
this.append(fill);   
}




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



