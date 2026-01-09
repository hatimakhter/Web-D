const display = document.querySelector('#display');

// append onclick all buttons
function append(value){
    display.value += value;
}

// clear display 
function clearDisplay(){
    display.value = "";
}

// delete last digit 
function deleteLast(){
    display.value = display.value.slice(0, -1);
}

// calculate result evalute
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "error";
    }
}