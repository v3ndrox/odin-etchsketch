const container = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".rstBtn");
const gridBtn = document.querySelector(".gridBtn");
const rgbBtn = document.querySelector(".rgbBtn");
const shadingBtn = document.querySelector(".shdngBtn");

let rgbMode = false;
let shadingMode = false;
let shading = 0.1;

rgbBtn.addEventListener("click", () => {
  if (rgbMode == false) {
    shadingMode = false;
    shadingBtn.classList.remove("toggle");
    rgbBtn.classList.add("toggle");
    rgbMode = true;
  } else {
    shadingMode = false;
    shadingBtn.classList.remove("toggle");
    rgbBtn.classList.remove("toggle");
    rgbMode = false;
  }
});

shadingBtn.addEventListener("click", () => {
  if (shadingMode == false) {
    rgbMode = false;
    rgbBtn.classList.remove("toggle");
    shadingBtn.classList.add("toggle");
    shadingMode = true;
  } else {
    rgbMode = false;
    rgbBtn.classList.remove("toggle");
    shadingBtn.classList.remove("toggle");
    shadingMode = false;
  }
});

function sketch(size = 16) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.append(row);
    for (let j = 0; j < size; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("square");
      row.append(newSquare);
      newSquare.addEventListener("mousedown", (e) => {
        if (rgbMode == true) {
          newSquare.style.background = `rgba(${Math.round(
            Math.random() * 255
          )},${Math.round(Math.random() * 255)},${Math.round(
            Math.random() * 255
          )},0.8)`;
          e.preventDefault();
        } else if (shadingMode == true) {
          if (newSquare.style.background === "") {
            newSquare.style.background = "rgb(225,225,225)";
            console.log(newSquare.style.background);
          } else if (newSquare.style.background === "rgb(225, 225, 225)") {
            newSquare.style.background = "rgb(200,200,200)";
            console.log(newSquare.style.background);
          } else if (newSquare.style.background === "rgb(200, 200, 200)") {
            newSquare.style.background = "rgb(175,175,175)";
          } else if (newSquare.style.background === "rgb(175, 175, 175)") {
            newSquare.style.background = "rgb(150,150,150)";
          } else if (newSquare.style.background === "rgb(150, 150, 150)") {
            newSquare.style.background = "rgb(125,125,125)";
          } else if (newSquare.style.background === "rgb(125, 125, 125)") {
            newSquare.style.background = "rgb(100,100,100)";
          } else if (newSquare.style.background === "rgb(100, 100, 100)") {
            newSquare.style.background = "rgb(75,75,75)";
          } else if (newSquare.style.background === "rgb(75, 75, 75)") {
            newSquare.style.background = "rgb(50,50,50)";
          } else if (newSquare.style.background === "rgb(50, 50, 50)") {
            newSquare.style.background = "rgb(25,25,25)";
          } else if (newSquare.style.background === "rgb(25, 25, 25)") {
            newSquare.style.background = "rgb(0,0,0)";
          }
          e.preventDefault();
        } else {
          newSquare.style.background = "black";
          e.preventDefault();
        }
      });
      newSquare.addEventListener("mouseenter", (e) => {
        if (e.buttons == 1) {
          if (rgbMode == true) {
            newSquare.style.background = `rgba(${Math.round(
              Math.random() * 255
            )},${Math.round(Math.random() * 255)},${Math.round(
              Math.random() * 255
            )},0.8)`;
          } else if (shadingMode == true) {
            console.log(newSquare.style.background);
            if (newSquare.style.background === "") {
              newSquare.style.background = "rgb(225,225,225)";
              console.log(newSquare.style.background);
            } else if (newSquare.style.background === "rgb(225, 225, 225)") {
              newSquare.style.background = "rgb(200,200,200)";
              console.log(newSquare.style.background);
            } else if (newSquare.style.background === "rgb(200, 200, 200)") {
              newSquare.style.background = "rgb(175,175,175)";
            } else if (newSquare.style.background === "rgb(175, 175, 175)") {
              newSquare.style.background = "rgb(150,150,150)";
            } else if (newSquare.style.background === "rgb(150, 150, 150)") {
              newSquare.style.background = "rgb(125,125,125)";
            } else if (newSquare.style.background === "rgb(125, 125, 125)") {
              newSquare.style.background = "rgb(100,100,100)";
            } else if (newSquare.style.background === "rgb(100, 100, 100)") {
              newSquare.style.background = "rgb(75,75,75)";
            } else if (newSquare.style.background === "rgb(75, 75, 75)") {
              newSquare.style.background = "rgb(50,50,50)";
            } else if (newSquare.style.background === "rgb(50, 50, 50)") {
              newSquare.style.background = "rgb(25,25,25)";
            } else if (newSquare.style.background === "rgb(25, 25, 25)") {
              newSquare.style.background = "rgb(0,0,0)";
            }
          } else {
            newSquare.style.background = "black";
          }
        }
      });
      resetBtn.addEventListener("click", () => {
        newSquare.style.background = "white";
        rgbMode = false;
        shadingMode = false;
        rgbBtn.classList.remove("toggle");
        shadingBtn.classList.remove("toggle");
      });
    }
  }
}

gridBtn.addEventListener("click", () => {
  let gridSize = parseInt(prompt("Enter desired grid size:"));
  while (gridSize > 100 || gridSize <= 1) {
    gridSize = parseInt(prompt("Please enter a number between 1 and 100"));
  }
  if (gridSize <= 100 && gridSize >= 1) {
    container.replaceChildren();
  }
  sketch(gridSize);
});

sketch();
