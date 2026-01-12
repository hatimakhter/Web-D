let radomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector(".container");

const colorArray = ['red', 'blue', 'green', 'yellow', 'lightseagreen', 'cyan', 'tomato',
     'lightcoral', 'acqua', 'white', 'black'];

const colorChange = (color) => {
    container.style.backgroundColor = color;
    currentColorValue.innerText = color;

}
const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomColor];
}

const handleRandombtn = () => {
    let color = getRandomColor();
    colorChange(color);
}
const handleApplybtn = () => {
    const color = colorInput.value;
    colorChange(color);
}

radomBtn.addEventListener('click', handleRandombtn);
applyBtn.addEventListener('click', handleApplybtn);
