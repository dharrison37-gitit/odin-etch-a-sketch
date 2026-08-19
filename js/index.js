"use strict";

const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        // temporary for testing.
        const para = document.createElement("p");
        para.textContent = `${j}`;

        const div = document.createElement("div");
        div.style.width = "48px";
        div.style.height = "48px";
        div.style.textAlign = "center";

        div.appendChild(para);
        container.appendChild(div);

        div.addEventListener("mouseenter", (e) => {
            div.style.backgroundColor = "teal";
        });
    }
}
