const container = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.append(row);
  for (let j = 0; j < 16; j++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    row.append(newSquare);
    newSquare.addEventListener("mousedown", () => {
      newSquare.style.background = "black";
    });
    newSquare.addEventListener("mousemove", (e) => {
      console.log(e);
      e.preventDefault();
      if (e.buttons == 1 && e.clientX != 0) {
        newSquare.style.background = "black";
        e.preventDefault();
      }
    });
  }
}
