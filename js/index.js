"use strict";

const container = document.querySelector(".container");
container.style.width = "800px";

let containerSize = 800;
let squaresPerSide = 16;

const gridSize = document.querySelector("button");
let newGrid = false;

gridSize.addEventListener("click", () => {
    squaresPerSide = parseInt(prompt("Enter new grid size"));
    if (squaresPerSide > 100) return;
    newGrid = true;
    updateGrid(squaresPerSide);
});

function updateGrid(squaresPerSide) {
    let divSize = containerSize / squaresPerSide - 2;
    if (gridSize) {
        container.replaceChildren();
    }
    for (let i = 0; i < squaresPerSide; i++) {
        for (let j = 0; j < squaresPerSide; j++) {
            const div = document.createElement("div");
            div.style.width = `${divSize}px`;
            div.style.height = `${divSize}px`;

            container.appendChild(div);

            div.addEventListener("mouseenter", (e) => {
                div.style.backgroundColor = "indigo";
            });
        }
    }
}

updateGrid(squaresPerSide);
