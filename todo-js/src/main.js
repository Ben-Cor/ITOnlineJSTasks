import './style.css'

const tasks = [];
const taskList = document.getElementById("todo-list");
const addButton = document.getElementById("add-todo");

addButton.addEventListener("click", () => {
  const taskText = document.getElementById("new-todo").value;
  if (taskText === "") {
    return;
  }
  tasks.push(taskText)
  displayTasks();
})

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