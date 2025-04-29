import './style.css';
import { task } from './task.js';

export function addTask() {
    const taskDescription = document.getElementById('tasksText').value;
    const taskDueDate = "TBC"; // Placeholder for due date, can be replaced with a date picker or input
    const taskPriority = "TBC"; // Placeholder for priority, can be replaced with a dropdown or input
    const newTask = new task(false, taskDescription, taskDueDate, taskPriority);

    const taskList = document.getElementById('tasksUl');
    const taskItem = document.createElement('li');
    taskItem.className = 'pb-4 list-disc';
    taskItem.innerHTML = `${newTask.description}<br>Due: ${newTask.dueDate}<br>Priority: ${newTask.priority}`;
    taskList.appendChild(taskItem);
}

document.addTask = addTask; // Expose the function to the global scope for HTML to access