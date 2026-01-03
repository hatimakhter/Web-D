// color changing using promises
let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;  
            resolve("color changed!");
        }, delay);
    });
}
 
changeColor("red", 1000)
.then((res) => {
    console.log(res); 
    return changeColor("orange", 1000);
})
.then((res) => {
    console.log(res);  
    return changeColor("green", 1000);
})
.then((res) => {
    console.log(res);  
    return changeColor("blue", 1000);
})
.then((res) =>{
    console.log(res);  
});
