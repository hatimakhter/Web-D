const form = document.querySelector(".inp");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = input.value.trim();
    if(taskText === "") return;

    // li create
    const li = document.createElement("li");
    li.className = "list";

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // task text 
    const span = document.createElement("span");
    span.className = "task-text";
    span.innerText = taskText;

    // delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.className = "del";

    delBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    input.value = "";

});
