const gridContainer = document.querySelector('#grid-container');
gridContainer.classList.add('grid-container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const col = document.createElement('div');
        col.classList.add('grid-item');
        gridContainer.appendChild(col);
    }
}

const gridItems = document.querySelectorAll('.grid-item');
let isMouseDown = false;

gridItems.forEach(gridItem => {
    gridItem.addEventListener('mousedown', () => {
        isMouseDown = true;
        gridItem.style.backgroundColor = 'blue'; // Change the color as desired
      });

    document.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        const hoveredElement = event.target;
        if (hoveredElement.classList.contains('grid-item')) {
        hoveredElement.style.backgroundColor = 'blue'; // Change the color as desired
        }
    }
    
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    }
    )
});

});
  

