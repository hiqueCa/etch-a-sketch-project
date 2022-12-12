const gridItemsPerRow = 40;
const gridItemsNumber = gridItemsPerRow ** 2;

const grid = document.querySelector(".grid");
const gridHeight = grid.clientHeight;

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

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
  gridItem.addEventListener(
    'mouseover', 
    e => e.target.style.setProperty('background-color', 'black')
  );
});