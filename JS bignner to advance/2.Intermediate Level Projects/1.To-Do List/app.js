const form = document.querySelector('.inp');
const input = document.getElementById('taskInput');
const taskList = document.getElementById('task-list'); 

form.addEventListener('submit', function (e) {
    e.preventDefault();  // page reload se bachane ke liye
    
    const taskTest = input.value.trim();
    if(taskTest == "") return;

    // li creating
    const li = document.createElement('li');
    li.className = "list";

    // checkbox creating
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    // task test
    const span = document.createElement('span');
    span.className = "task-test";
    span.innerText = taskTest;

    // delete btn
    const delBtn = document.createElement('button');
    delBtn.className = "del";
    delBtn.innerText = "❌";

    delBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
    
    input.value = "";
<<<<<<< HEAD
});
=======

});
>>>>>>> c690141b09bcce1c37deffc364a0614b97a5e399
