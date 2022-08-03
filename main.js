function drawGrid(length, height) {
  for (let index = 0; index < height; index++) {
    drawRow(length);
  }
  function drawRow(length) {
    let grid = document.getElementById("grid");
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);

    for (let index = 0; index < length; index++) {
      drawSquare();
    }
    function drawSquare() {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener('mouseenter', e => square.classList.toggle('add-color'));
      // square.addEventListener('mouseleave', e => square.classList.remove('add-color'));
      row.appendChild(square);
    }
  }
}
drawGrid(50, 50);
