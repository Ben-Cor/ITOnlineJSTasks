export class task {
    constructor(completed, description, dueDate) {
        this.completed = completed;
        this.description = description;
        this.dueDate = dueDate;
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