// ================= DISPLAY =================
const exp = document.getElementById("expression");
const res = document.getElementById("result");

// ================= MODE TOGGLE =================
const lightBtn = document.getElementById("li-mode");
const darkBtn = document.getElementById("dark-mode");
const body = document.body;

// default light mode
body.classList.remove("dark");

lightBtn.addEventListener("click", () => {
    body.classList.add("dark");
});

darkBtn.addEventListener("click", () => {
    body.classList.remove("dark");
});

// ================= CALCULATOR LOGIC =================
let current = "";
let previous = "";
let operator = "";

// -------- Numbers --------
document.querySelectorAll(
    "#zero,#one,#two,#three,#four,#five,#six,#seven,#eight,#nine,#d-zero,#dot"
).forEach(btn => {
    btn.addEventListener("click", () => {
        if (current === "0") current = "";
        current += btn.innerText;
        exp.innerText = current;
    });
});

// -------- Operators --------
document.querySelectorAll("#add,#minus,#multiply,#divison").forEach(btn => {
    btn.addEventListener("click", () => {
        if (current === "") return;
        previous = current;
        operator = btn.id;
        current = "";
        exp.innerText = previous + " " + getSymbol(operator);
    });
});

// -------- Equal --------
document.getElementById("equal").addEventListener("click", () => {
    if (previous === "" || current === "") return;

    let a = Number(previous);
    let b = Number(current);
    let answer = 0;

    if (operator === "add") answer = a + b;
    if (operator === "minus") answer = a - b;
    if (operator === "multiply") answer = a * b;
    if (operator === "divison") answer = b === 0 ? "Error" : a / b;

    exp.innerText = previous + " " + getSymbol(operator) + " " + current;
    res.innerText = answer;

    current = answer.toString();
    previous = "";
    operator = "";
});

// -------- AC --------
document.getElementById("ac").addEventListener("click", () => {
    current = "";
    previous = "";
    operator = "";
    exp.innerText = "0";
    res.innerText = "";
});

// -------- Backspace --------
document.getElementById("backspace").addEventListener("click", () => {
    current = current.slice(0, -1);
    if (current === "") {
        exp.innerText = "0";
    } else {
        exp.innerText = current;
    }
});

// -------- Percent --------
document.getElementById("percent").addEventListener("click", () => {
    if (current === "") return;
    current = (Number(current) / 100).toString();
    exp.innerText = current;
});

// ================= HELPER =================
function getSymbol(op) {
    if (op === "add") return "+";
    if (op === "minus") return "-";
    if (op === "multiply") return "×";
    if (op === "divison") return "÷";
}
