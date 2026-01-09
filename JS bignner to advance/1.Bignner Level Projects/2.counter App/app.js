const counter = document.querySelector(".count");
const incrementBtn = document.querySelector("#incr");
const decrementBtn = document.querySelector("#decr");
const resetBtn = document.querySelector("#res");

let count = 0;

// update counter
function updateCounter(){
    counter.textContent = count;
}

// increment
incrementBtn.addEventListener('click', () => {
    count ++;
    updateCounter();
})

// decrement
decrementBtn.addEventListener('click', () =>{
    count--;
    updateCounter();
})

// reset 
resetBtn.addEventListener('click', () =>{
    count = 0;
    updateCounter();
})