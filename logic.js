const gridItemsPerRow = 16;
const gridItemsNumber = gridItemsPerRow ** 2;

const gridContainer = document.querySelector(".grid");
gridContainer.style.setProperty('grid-template-columns', `repeat(${gridXDivisions}, 1fr)`);
gridContainer.style.setProperty('grid-template-rows', `repeat(${gridYDivisions}, 1fr`);

for (var i = 0; i < gridItemsNumber; i++) {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  gridContainer.appendChild(gridItem);
};