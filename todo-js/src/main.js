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
  taskList.innerHTML = ""; // Clear the list before displaying tasks
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskItem.setAttribute("data-index", index);
    taskItem.classList.add("gap-2", "flex", "items-center", "justify-between", "mb-4");
    const removeButton = document.createElement("button");
    removeButton.classList.add("bg-red-500", "text-white", "px-2", "py-1", "rounded");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      displayTasks();
    });
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
  });
}