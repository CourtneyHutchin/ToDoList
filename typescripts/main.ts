/**
 * Represents a sinle task on a todo list
 */
class ToDoItem {
    title: string;
    deadline: Date;
    isCompleted: boolean;

    constructor(task: string) {
        this.title = task;
    }
}

let myItem = new ToDoItem("Finish class");