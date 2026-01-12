let display = document.getElementById("display");

// value add karna
function appendValue(value){
  display.value += value;
}

// clear the display
function clearDisplay(){
  display.value = "";
}

// backspace sahi h
function backspace(){
  display.value = display.value.slice(0, -1);
}

// calculate the result
function calculateResult(){
  try {
    display.value = eval(display.value.replace(/÷/g, "/").replace(/×/g, "*"));
  }  
  catch {
    display.value = "error";
  }
}

// keyborad support
document.addEventListener("keydown", (e) => {
  if(!isNaN(e.key) || ["+", "-", "*", "/", "%", "."].includes(e.key)) {
    appendValue(e.key);
  }
  else if(e.key === "Enter"){
    calculateResult();
  }
  else if(e.key === "Backspace"){
    backspace();
  }
  else if(e.key.toLowerCase() === "c"){
    clearDisplay();
  }

});