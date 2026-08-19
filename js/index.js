"use strict";

let squaresPerSide = 16;

const gridSize = document.querySelector("button");

gridSize.addEventListener("click", () => {
    squaresPerSide = parseInt(prompt("Enter new grid square size 1 to 100"));

    if (squaresPerSide > 100 || squaresPerSide < 1) return;

    generateGrid(squaresPerSide);
});

function generateGrid(squaresPerSide) {
    const container = document.querySelector(".container");

    let divSize = (container.offsetWidth - 2) / squaresPerSide;

    if (gridSize) {
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
            square.style.backgroundColor = "#000";
        }),
    );
}

generateGrid(squaresPerSide);
