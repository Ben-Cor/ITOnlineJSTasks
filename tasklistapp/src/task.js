export class task {
    constructor(completed, description, dueDate, priority) {
        this.completed = completed;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    completeTask() {
        this.completed = !this.completed;
    }

    editTask(newDescription, newDueDate, newPriority) {
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
    }
}