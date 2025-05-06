import './style.css'

const tasks = [];
const taskList = document.getElementById("todo-list");

function addTask(task) {
  const taskText = document.getElementById("new-todo").value;
  tasks.push(taskText);
}

function displayTasks() {
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskItem.setAttribute("data-index", index);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      displayTasks();
    });
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
  });
}