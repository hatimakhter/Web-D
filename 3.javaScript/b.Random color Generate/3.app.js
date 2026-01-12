let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    
    let div = document.querySelector(".main");
    div.style.backgroundColor = randomColor;

    let div1 = document.querySelector(".div1");
    div1.style.backgroundColor = "red";
    let div2 = document.querySelector(".div2");
    div2.style.backgroundColor = "green";
    let div3 = document.querySelector(".div3");
    div3.style.backgroundColor = "blue";

    console.log("color updated");

});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb( ${red}, ${green}, ${blue} )`;
    return color;
}