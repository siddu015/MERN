let btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let randomColor = generateRandomColor();

    let h1 = document.querySelector("h1")
    h1.innerText = randomColor;

    let div = document.querySelector("div")
    div.style.backgroundColor = randomColor;

    console.log("colour updated")
})

function generateRandomColor() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`;
}