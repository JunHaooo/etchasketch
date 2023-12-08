const gridContainer = document.querySelector('#grid-container');
gridContainer.classList.add('grid-container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const col = document.createElement('div');
        col.classList.add('grid-item');
        gridContainer.appendChild(col);
    }
}