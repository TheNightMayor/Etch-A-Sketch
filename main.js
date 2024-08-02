function drawGrid(w, h) {
  let gridContainer = document.getElementById("grid-container");
  let grid = document.createElement("div");
  grid.setAttribute("id", "grid");
  gridContainer.appendChild(grid);
  for (let index = 0; index < h; index++) {
    drawRow(w);
  }
  function drawRow(w) {
    let grid = document.getElementById("grid");
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);

    for (let index = 0; index < w; index++) {
      drawSquare();
    }
    function drawSquare() {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseenter", (e) =>
        square.classList.toggle("add-color")
      );
      // square.addEventListener('mouseleave', e => square.classList.remove('add-color'));
      row.appendChild(square);
    }
  }
}
const button = document.getElementById("new-grid");
button.addEventListener("click", () => {   
  let element = document.getElementById("grid");
  element.remove();
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;
  drawGrid(width, height);
});
drawGrid(50,50);
