import './style.css';
import { task } from './task.js';

function addTask() {
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDueDate = "TBC"; // Placeholder for due date, can be replaced with a date picker or input
    const taskPriority = "TBC"; // Placeholder for priority, can be replaced with a dropdown or input
    const newTask = new task(false, taskDescription, taskDueDate, taskPriority);

    const taskList = document.getElementById('tasksUl');
    const taskItem = document.createElement('li');
    taskItem.textContent = `${newTask.description} - Due: ${newTask.dueDate} - Priority: ${newTask.priority}`;
    taskList.appendChild(taskItem);
}
