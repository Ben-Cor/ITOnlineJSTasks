import './style.css';
import { task } from './task.js';

export function addTask() {
    const taskDescription = document.getElementById('tasksText').value;
    const taskDueDate = document.getElementById('tasksDate').value;
    const newTask = new task(false, taskDescription, taskDueDate);

    const taskList = document.getElementById('tasksUl');
    const taskItem = document.createElement('li');
    taskItem.className = 'pb-4 list-disc';
    taskItem.innerHTML =`${newTask.description}
                        <br>
                        Due: ${newTask.dueDate}
                        <br>
                        <label for="completed">Completed: </label>`;

    // Create a checkbox for the task
    // The checkbox will call the completeTask method when clicked
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'completed';
    checkbox.onclick = () => newTask.completeTask(taskItem);

    const deleteTask = document.createElement('button');
    deleteTask.innerText = 'Delete Task';
    deleteTask.className = 'block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded';
    deleteTask.onclick = () => newTask.deleteTask(taskItem);
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(deleteTask);
    taskList.appendChild(taskItem);
}

const taskButton = document.getElementById('addTask');
taskButton.addEventListener('click', addTask);


const darkModeButton = document.getElementById('darkMode');
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        darkModeButton.innerText = 'Light Mode';
    }
    else {
        darkModeButton.innerText = 'Dark Mode';
    }
});