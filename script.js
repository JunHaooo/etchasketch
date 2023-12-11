const gridContainer = document.querySelector('#grid-container');
gridContainer.classList.add('grid-container');

let idCounter = 1;

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let col = document.createElement('div');
        col.setAttribute('class', 'grid-item')
        col.setAttribute('id',`gridItem${idCounter}`);
        idCounter++;
        gridContainer.appendChild(col);
    }
}

let isMouseDown = false ;

gridContainer.addEventListener('mousedown', (event) => {
    let target = event.target;
    if (target.classList.contains('grid-item')) {
        isMouseDown = true;
        target.style.backgroundColor = 'blue';
    }
});

gridContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        let target = event.target;
        if (target.classList.contains('grid-item')) {
        target.style.backgroundColor = 'blue'; // Change the color as desired
        }
    }
    
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    })
});

