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



/* Test Code Here... */
let myItem = new ToDoItem("Learn about cookies=;");
myItem.isCompleted = false;
// Get todays date
myItem.deadline = new Date();
// get a specific date (December 25 2019)
// myItem.deadline = new Date(2019, 11, 25);

// stringify converts any object into a JSON string format
let strData = JSON.stringify(myItem);
console.log(strData);

// Setting a cookie called 'todoitems' that expires in a week
Cookies.set("todoitems", strData, { expires: 7 });

/* END TEST CODE */


window.onload = function () {
    let addBtn = <HTMLElement>document.getElementById("add-to-do");
    addBtn.onclick = main;
}

function main() {
    // Get ToDoItem from user
    let item: ToDoItem = getItem();

    // Display new ToDoItem on page
    displayToDoItem(item);



    // Save ToDoItem
}

/**
 * Move selected task to completed section of the web page
 */
function markAsComplete() {
    let currItem = <HTMLDivElement>this;

    let completedItems = document.getElementById("completed");

    completedItems.appendChild(currItem);
}

/**
 * Displays ToDoItem on the page
 * @param item The item to be displayed
 */
function displayToDoItem(item: ToDoItem): void {
    let li = document.createElement("li");
    li.onclick = markAsComplete;
    li.innerHTML = item.title;

    console.log(li);
    let displayLi = document.getElementById("list");
    displayLi.appendChild(li);

}
/**
 * Gets the user input todo item
 * from the form
 */
function getItem() {
    let title = (<HTMLInputElement>document.getElementById("title")).value;
    let item = new ToDoItem(title);

    let deadline = (<HTMLInputElement>document.getElementById("deadline")).value;
    item.deadline = new Date(deadline);
    item.isCompleted = false;

    return item;
}