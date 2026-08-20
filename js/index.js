"use strict";

const RANDOM_COLOR = "Random Color";
const DEFAULT_COLOR = "Default Color";

const gridSizeButton = document.querySelector(".grid-size");
const colorButton = document.querySelector(".grid-color");

let squaresPerSide = 16;
let random = false;

gridSizeButton.addEventListener("click", () => {
    squaresPerSide = parseInt(prompt("Enter new grid square size 1 to 100"));

    if (squaresPerSide > 100 || squaresPerSide < 1) return;

    generateGrid(squaresPerSide);
});

colorButton.addEventListener("click", () => {
    if (colorButton.textContent === RANDOM_COLOR) {
        colorButton.textContent = DEFAULT_COLOR;
        random = true;
    } else {
        colorButton.textContent = RANDOM_COLOR;
        random = false;
    }
});

function getColor(random = false) {
    if (!random) return "rgb(0 0 0 / 100%)";

    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    const A = Math.floor(Math.random() * 100);
    return `rgb(${R} ${G} ${B} / ${A})`;
}

function generateGrid(squaresPerSide) {
    const container = document.querySelector(".container");

    let divSize = (container.offsetWidth - 2) / squaresPerSide;

    if (gridSizeButton) {
        container.replaceChildren();
    }

    for (let i = 0; i < squaresPerSide; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);

        for (let j = 0; j < squaresPerSide; j++) {
            const col = document.createElement("div");
            col.className = "column";
            col.style.width = `${divSize}px`;
            col.style.height = `${divSize}px`;
            col.style.border = "1px solid #000";

            row.appendChild(col);
        }
    }

    const gridSquares = document.querySelectorAll(".column");
    gridSquares.forEach((square) =>
        square.addEventListener("mouseenter", (e) => {
            square.style.backgroundColor = getColor(random);
        }),
    );
}

generateGrid(squaresPerSide);
