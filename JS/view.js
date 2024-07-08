class View {
    constructor() {
        this.app = document.getElementById('app');

        this.taskInput = document.getElementById('new-task-input');
        this.addTaskButton = document.getElementById('add-task-button');
        this.taskList = document.getElementById('task-list');

        this.addTaskButton.addEventListener('click', () => this.onAddTask());
    }

    get taskText() {
        return this.taskInput.value;
    }

    resetInput() {
        this.taskInput.value = '';
    }

    displayTasks(tasks) {
        while (this.taskList.firstChild) {
            this.taskList.removeChild(this.taskList.firstChild);
        }

        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task;
            taskItem.className = 'task-item';

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => this.onDeleteTask(task));

            taskItem.appendChild(deleteButton);
            this.taskList.appendChild(taskItem);
        });
    }

    bindAddTask(handler) {
        this.onAddTask = handler;
    }

    bindDeleteTask(handler) {
        this.onDeleteTask = handler;
    }
}
