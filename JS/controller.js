class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.bindTasksChanged(this.onTasksChanged);
        this.view.bindAddTask(this.handleAddTask);
        this.view.bindDeleteTask(this.handleDeleteTask);

        this.onTasksChanged(this.model.tasks);
    }

    onTasksChanged = tasks => {
        this.view.displayTasks(tasks);
    };

    handleAddTask = () => {
        const taskText = this.view.taskText;
        if (taskText) {
            this.model.addTask(taskText);
            this.view.resetInput();
        }
    };

    handleDeleteTask = task => {
        this.model.deleteTask(task);
    };
}
