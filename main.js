grid = document.querySelector("#grid");
color = "pink"
function resize(dimension) {
    let num = dimension;
    let percent = (100/num).toString() + "%";
    for (let i = 0; i < num**2; i++) {
        box = document.createElement("div");
        box.classList = "box";
        box.style.width = percent;
        box.style.height = percent;
        box.style.backgroundColor = "white";
        grid.appendChild(box);
    }
    boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "yellow";
        });
    });
    submitColor(color);
}
handlerA = (e) => {
    const colors = ["red", "orange", "yellow", "green", "blue", "violet", "pink"];
    num = Math.floor(Math.random() * 7)
    color = colors[num];
    e.target.style.backgroundColor = color;
}
random = document.querySelector("#randomColor");
random.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.addEventListener("mouseleave", handlerA);
    });
});
let num = 2;
let percent = (100/num).toString() + "%";
for (let i = 0; i < num**2; i++) {
    box = document.createElement("div");
    box.classList = "box";
    box.style.width = percent;
    box.style.height = percent;
    box.style.backgroundColor = "white";
    grid.appendChild(box);
}

boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "yellow";
    });
    box.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = color;
    });
});

gridInput = document.querySelector("#gridsize");
gridInputBtn = document.querySelector("#submitSize");
gridInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submitGrid();
    }
});
gridInputBtn.addEventListener("click", () => {
    submitGrid();
});


let dimension = 2;
function submitGrid() {
    dimension = gridInput.value;
    if (dimension < 1 || dimension > 20) {
        dimension = 20;
    }
    gridInput.value = "";
    gridInput.focus();

    boxes.forEach((box) => {
        box.remove();
    });
    
    resize(dimension);

}
colorInput = document.querySelector("#color");
colorInputBtn = document.querySelector("#submitColor");
colorInputBtn.addEventListener("click", () => {
    color = colorInput.value;
    submitColor();
});
function submitColor() {
    boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.removeEventListener("mouseleave", handlerA);
        box.addEventListener("mouseleave", (e) => {
            e.target.style.backgroundColor = color.toString();
        });
    });
}
eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    color = "white";
    console.log("eraser called", color);
    submitColor();
});
boardClear = document.querySelector("#clear");
boardClear.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.remove();
    });
    resize(dimension);
});