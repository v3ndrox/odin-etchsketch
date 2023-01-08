const container = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  container.append(row);
  for (let j = 0; j < 16; j++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    row.append(newSquare);
  }
}
