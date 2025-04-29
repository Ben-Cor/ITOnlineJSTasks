export class task {
    constructor(completed, description, dueDate) {
        this.completed = completed;
        this.description = description;
        this.dueDate = dueDate;
    }

    completeTask(taskElement) {
        this.completed = !this.completed;
        if (this.completed) {
            taskElement.classList.add('line-through');
        } else {
            taskElement.classList.remove('line-through');
        }
    }

    editTask(newDescription, newDueDate, newPriority) {
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
    }

    deleteTask(taskElement) {
        taskElement.remove();
    }
}