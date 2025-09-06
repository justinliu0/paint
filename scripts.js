const container = document.querySelector(".container");
const gridSize = document.getElementById("grid-size");
const boxSize = document.getElementById("box-size");
const apply = document.getElementById("apply");
const reset = document.getElementById("reset");

function createGrid(gSize, bSize) {
    container.innerHTML = "";
    container.style.width = `${gSize * bSize}px`;
    container.style.height = `${gSize * bSize}px`;


    for (let i = 0; i < gSize * gSize; i++) {
        const box = document.createElement("div");
        box.className = "box";
        box.style.height = `${bSize}px`;
        box.style.width = `${bSize}px`;
        container.appendChild(box);
    }
}

container.addEventListener("mousemove", (e) => {
    const color = document.querySelector('input[type="radio"]:checked').value;
    if (isDrawing && e.target.classList.contains("box")) {
        e.target.style.backgroundColor = `${color}`;
    }
});

let isDrawing = false;

document.addEventListener("mousedown", () => {
    isDrawing = true;
});

document.addEventListener("mouseup", () => {
    isDrawing = false
});

apply.addEventListener("click", () => {
    const gSize = parseInt(gridSize.value);
    const bSize = parseInt(boxSize.value);
    createGrid(gSize, bSize);
});

reset.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "";
    });
});



createGrid(16, 20);