const box = document.querySelector("#box");
const btn = document.querySelector("button");

const colors = [
    "red", "green", "blue", "orange", "gold", "violet",
     "peach", "teal", "yellow", "skyblue", "brown", "pink" 
];

btn.addEventListener("click", (event) =>{

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
    console.log(randomColor);
});