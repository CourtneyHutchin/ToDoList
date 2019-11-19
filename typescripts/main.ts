/**
 * Represents a single task on a todo list
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

// Read ToDoItem
let cookieItem: ToDoItem = JSON.parse(Cookies.get("todoitems"));
console.log("read cookie data..");
console.log(cookieItem.title + " " + cookieItem.deadline);


const storageKey = "Task"
// TODO: Store ToDO item using HTML5 Web Storage
if (typeof (Storage) !== "undefined") {
    localStorage.setItem(storageKey, strData);
    let storageStr = localStorage.getItem(storageKey);
    let item: ToDoItem = JSON.parse(storageStr);
    console.log("Reading storage data...");
    console.log(item.title);
}

/* END TEST CODE */


window.onload = function () {
    let addBtn = <HTMLElement>document.getElementById("add-to-do");
    addBtn.onclick = main;
}

function main() {
    // Get ToDoItem from user
    let item: ToDoItem = getItem();
    displayToDoItem(item);

    // Get existing Todos, add new one, re-save list
    let allItems = readToDoItems();
    allItems.push(item)    // Add new item to existing list
    saveToDoItems(allItems)

    // for (let i = 0; i < allItems.length; i++) {
    //     //alert(allItems[i].title);
    // }
}

/**
 * Move selected task to completed section of the web page
 */
function markAsComplete() {
    let currItem = <HTMLDivElement>this;

    let completedItems = document.getElementById("completed");

    completedItems.appendChild(currItem);

    // Toggle the line through on the li
    currItem.classList.toggle("toggle");
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

const theStorageKey = "MyItems";

function saveToDoItems(items: Array<ToDoItem>) {
    let stringData = JSON.stringify(items);
    localStorage.setItem(theStorageKey, stringData);
}

function readToDoItems(): Array<ToDoItem> {
    let stringData = localStorage.getItem("MyItems");

    if (stringData == null) {
        return new Array<ToDoItem>();
    }

    return <ToDoItem[]>JSON.parse(stringData);
    // let itemArr: ToDoItem[] = JSON.parse(stringData);
    // return itemArr;
}

function blue() {
    document.body.style.backgroundImage = "linear-gradient(90deg, #00d2ff, #3a7bd5)";
}

function purple() {
    document.body.style.backgroundImage = "linear-gradient(90deg, #4776e6, #8e54e9)";
}

function pink() {
    document.body.style.backgroundImage = "linear-gradient(90deg, #ffafbd, #ffc3a0)";

}