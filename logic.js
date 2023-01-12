const grid = document.querySelector(".grid");
const gridHeight = grid.clientHeight;

const makeGridItemsColourable = () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItem => {
    gridItem.addEventListener(
      'mouseover', 
      e => e.target.style.backgroundColor = 'black',
    );
  });
};

const generateNewGrid = (numberOfGridItems) => {
  const gridItemsPerRow = numberOfGridItems || 16;
  const gridItemsNumber = gridItemsPerRow ** 2;
  const gridItemDimension = `${gridHeight / gridItemsPerRow}px`;

  grid.style.setProperty('grid-template-columns', `repeat(${gridItemsPerRow}, ${gridItemDimension})`);
  grid.style.setProperty('grid-template-rows', `repeat(${gridItemsPerRow}, ${gridItemDimension}`);

  for (var i = 0; i < gridItemsNumber; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.style.setProperty('width', gridItemDimension);
    gridItem.style.setProperty('height', gridItemDimension);
    grid.appendChild(gridItem);
  };

  makeGridItemsColourable();
};

const removePastGridItems = (currentGridItems) => {
  currentGridItems.forEach(gridItem => grid.removeChild(gridItem));
};

const resetGrid = () => {
  const currentGridItems = document.querySelectorAll('.grid-item');
  const newNumberOfGridItems = prompt('Input a new number of cells per row:');

  removePastGridItems(currentGridItems);

  generateNewGrid(newNumberOfGridItems);
}

window.addEventListener('DOMContentLoaded', generateNewGrid());