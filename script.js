let size = 16; 
size = Number(prompt("How big do you want your grid to be (max 100)"));

const gridContainer = document.querySelector('#grid-container');

let idCounter = 1;

for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.setAttribute('id','row');
    gridContainer.appendChild(row);
    for (let j = 0; j < size; j++) {
        let col = document.createElement('div');
        col.setAttribute('class', 'grid-item')
        col.setAttribute('id',`gridItem${idCounter}`);
        idCounter++;
        row.appendChild(col);
    }
}

//gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
//gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

const cellSize = 400 / size; // Adjust container width (400) as needed
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.style.width = `${cellSize}px`;
    item.style.height = `${cellSize}px`;
});

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

gridContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

gridContainer.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        let target = event.target;
        if (target.classList.contains('grid-item')) {
            target.style.backgroundColor = 'blue';
        }
    }
});



