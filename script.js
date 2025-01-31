const container = document.querySelector("#container");
const width = container.offsetWidth;
const button = document.querySelector("button");

button.addEventListener("click", () => {
    container.innerHTML = "";
    let numberOfSquares = prompt("How many squares?");
    if(numberOfSquares > 100) {
        numberOfSquares = prompt("Too much! Try less");
    }

    const squareWidth = width / numberOfSquares;
    let opacity = 0;
    for(let i = 0; i < numberOfSquares**2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareWidth}px`;
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            square.style.opacity = `${opacity}%`;
            if(opacity == 100) {
                alert("YAY!");
            }
            opacity += 10;
        });
    }
});


