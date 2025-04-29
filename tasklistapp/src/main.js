import './style.css';
import { task } from './task.js';

export function addTask() {
    const taskDescription = document.getElementById('tasksText').value;
    const taskDueDate = document.getElementById('tasksDate').value; // Placeholder for due date, can be replaced with a date picker or input
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

document.addTask = addTask; // Expose the function to the global scope for HTML to access