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
    var deleteTask = document.createElement('img');


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
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        checkbox.className = "todo-checkbox";
        newTask.appendChild(checkbox);
        window.checkbox = checkbox;


        //ADD DELETE TASK BUTTON 
        deleteTask.src = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjE2NDA2MiAwLTI1NiAxMTQuODM1OTM4LTI1NiAyNTZzMTE0LjgzNTkzOCAyNTYgMjU2IDI1NiAyNTYtMTE0LjgzNTkzOCAyNTYtMjU2LTExNC44MzU5MzgtMjU2LTI1Ni0yNTZ6bTAgMCIgZmlsbD0iI2Y0NDMzNiIvPjxwYXRoIGQ9Im0zNTAuMjczNDM4IDMyMC4xMDU0NjljOC4zMzk4NDMgOC4zNDM3NSA4LjMzOTg0MyAyMS44MjQyMTkgMCAzMC4xNjc5NjktNC4xNjAxNTcgNC4xNjAxNTYtOS42MjEwOTQgNi4yNS0xNS4wODU5MzggNi4yNS01LjQ2MDkzOCAwLTEwLjkyMTg3NS0yLjA4OTg0NC0xNS4wODIwMzEtNi4yNWwtNjQuMTA1NDY5LTY0LjEwOTM3Ni02NC4xMDU0NjkgNjQuMTA5Mzc2Yy00LjE2MDE1NiA0LjE2MDE1Ni05LjYyMTA5MyA2LjI1LTE1LjA4MjAzMSA2LjI1LTUuNDY0ODQ0IDAtMTAuOTI1NzgxLTIuMDg5ODQ0LTE1LjA4NTkzOC02LjI1LTguMzM5ODQzLTguMzQzNzUtOC4zMzk4NDMtMjEuODI0MjE5IDAtMzAuMTY3OTY5bDY0LjEwOTM3Ni02NC4xMDU0NjktNjQuMTA5Mzc2LTY0LjEwNTQ2OWMtOC4zMzk4NDMtOC4zNDM3NS04LjMzOTg0My0yMS44MjQyMTkgMC0zMC4xNjc5NjkgOC4zNDM3NS04LjMzOTg0MyAyMS44MjQyMTktOC4zMzk4NDMgMzAuMTY3OTY5IDBsNjQuMTA1NDY5IDY0LjEwOTM3NiA2NC4xMDU0NjktNjQuMTA5Mzc2YzguMzQzNzUtOC4zMzk4NDMgMjEuODI0MjE5LTguMzM5ODQzIDMwLjE2Nzk2OSAwIDguMzM5ODQzIDguMzQzNzUgOC4zMzk4NDMgMjEuODI0MjE5IDAgMzAuMTY3OTY5bC02NC4xMDkzNzYgNjQuMTA1NDY5em0wIDAiIGZpbGw9IiNmYWZhZmEiLz48L3N2Zz4= ";
        deleteTask.className = "deleteButton";
        deleteTask.alt = "Delete Task";
        newTask.appendChild(deleteTask);
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





//DISPLAY TODAYS DATE ON FOOTER
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
document.getElementById("todays-date").innerHTML = today;