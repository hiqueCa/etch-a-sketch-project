const gridXDivisions = 16;
const gridYDivisions = 16;

const gridContainer = document.querySelector(".grid");
gridContainer.style.setProperty('grid-template-columns', `repeat(${gridXDivisions}, 1fr)`);
gridContainer.style.setProperty('grid-template-rows', `repeat(${gridYDivisions}, 1fr`);

const gridItemsNumber = gridXDivisions * gridYDivisions;

for (var i = 0; i < gridItemsNumber; i++) {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  gridContainer.appendChild(gridItem);
};