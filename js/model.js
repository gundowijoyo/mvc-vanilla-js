class Model {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
        this.onTasksChanged(this.tasks);
    }

    deleteTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
        this.onTasksChanged(this.tasks);
    }

    bindTasksChanged(callback) {
        this.onTasksChanged = callback;
    }
}
