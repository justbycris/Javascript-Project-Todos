var addTodo = document.getElementById("add-btn");
var enterTodo = document.getElementById("tasks");
var tasksList = document.getElementById("tasks-list");
var errorMessage = document.getElementById("error");
var checkbox = document.getElementById("checkbox");
var label = document.getElementById("label");
var completedTodos = document.getElementById("completed-list");

addTodo.addEventListener("click", createTodo);

function createTodo() {
    var newTask = document.createElement('li');
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    var customCheckbox = document.createElement('span');

    var span

    //IF INPUT EMPTY, RETURN ERROR
    if (enterTodo.value.length == 0) {
        errorMessage.innerHTML = "Hey! You haven't write anything yet... &#x1F644;"
        newTask.value = false;
        return false;
    } else {
        newTask.innerHTML = enterTodo.value
        newTask.className = "new-todo"
        tasksList.appendChild(newTask)
        enterTodo.value = "";
        errorMessage.innerHTML = null;

        //CREATE CHECKBOX 

        label.id = "label";
        label.className = "todo-label";
        newTask.appendChild(label);


        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        checkbox.className = "todo-checkbox";
        newTask.appendChild(checkbox);
        label.appendChild(checkbox);
        window.checkbox = checkbox;


    }

    //MOVE COMPLETED TODOS TO COMPLETED LIST AND ADD COMPLTED CLASS
    checkbox.onclick = function deleteTodo() {
        if (checkbox.checked == true) {
            newTask.className = "completed-todo";
            completedTodos.appendChild(newTask);
        } else if (checkbox.checked == false) {
            console.log("Uncompleted");
            newTask.className = "new-todo";
            tasksList.appendChild(newTask);
        }
    }
}




//DISPLAY TODAYS DATE ON OVERDUE TASKS
var today = new Date();

var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
document.getElementById("todays-date").innerHTML = today;