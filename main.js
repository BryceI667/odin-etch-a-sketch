grid = document.querySelector("#grid");
function resize(dimension) {
    let num = dimension;
    let percent = (100/num).toString() + "%";
    for (let i = 0; i < num**2; i++) {
        box = document.createElement("div");
        box.classList = "box";
        box.style.width = percent;
        box.style.height = percent;
        grid.appendChild(box);
    }
    boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "yellow";
        });
        box.addEventListener("mouseleave", (e) => {
            e.target.style.backgroundColor = "orange";
        });
    });
}
let num = 2;
let percent = (100/num).toString() + "%";
for (let i = 0; i < num**2; i++) {
    box = document.createElement("div");
    box.classList = "box";
    box.style.width = percent;
    box.style.height = percent;
    grid.appendChild(box);
}

boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "yellow";
    });
    box.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "orange";
    });
});

gridInput = document.querySelector("#gridsize");
gridInputBtn = document.querySelector("#submitSize");
gridInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submit();
    }
});
gridInputBtn.addEventListener("click", () => {
    submit();
});


function submit() {
    let dimension = gridInput.value;
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