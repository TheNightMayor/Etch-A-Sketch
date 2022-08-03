
function createSquare() {
   const square = document.createElement("div");
   square.classList.add('square');
   let grid = document.getElementById("grid");
   grid.appendChild(square);
}
createSquare();
