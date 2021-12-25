const filled = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
const divFilled = document.getElementsByClassName('filled');
console.log(divFilled) 
let fillEl;

// Fill Listeners
for( const fill of filled){
// console.log(filled);
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
}

// Loop through empties and call drag events

for (const empty of empties) {
    // console.log(empties);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
    // console.log('start', 'this-' + this);
    console.log(this)
    fillEl = this;
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
    console.log(fillEl)
}

function dragEnd() {
    console.log('end');
    // if (this.parentNode.className === 'empty' && this.parentNode.className !== 'fill') {
    //     console.log('end', 'this-' + this);
    // } 
    this.className = 'fill';

    //else {
    //     this.append(document.querySelector('.filled'))
    // }
}

function dragOver(e) {
    e.preventDefault();
    console.log('over');
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
    console.log('enter');
}

function dragLeave() {
    this.className = 'empty';
    console.log('leave');
}

function dragDrop() {
    this.className = 'empty';
    console.log(this.childNodes[0])
       if(!this.childNodes.length){
    this.append(fillEl);
    } else if(this.childNodes.length == 1){
        fillEl.parentNode.append(this.childNodes[0])
        this.append(fillEl)
    } else{
       divFilled[0].append(this.childNodes[0])
       this.append(fillEl);
    }
    console.log('drop');
}