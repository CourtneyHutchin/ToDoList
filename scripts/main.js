/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
/* Test Code Here... */
var myItem = new ToDoItem("Learn about cookies=;");
myItem.isCompleted = false;
// Get todays date
myItem.deadline = new Date();
// get a specific date (December 25 2019)
// myItem.deadline = new Date(2019, 11, 25);
// stringify converts any object into a JSON string format
var strData = JSON.stringify(myItem);
console.log(strData);
// Setting a cookie called 'todoitems' that expires in a week
Cookies.set("todoitems", strData, { expires: 7 });
// Read ToDoItem
var cookieItem = JSON.parse(Cookies.get("todoitems"));
console.log("read cookie data..");
console.log(cookieItem.title + " " + cookieItem.deadline);
var storageKey = "Task";
// TODO: Store ToDO item using HTML5 Web Storage
if (typeof (Storage) !== "undefined") {
    localStorage.setItem(storageKey, strData);
    var storageStr = localStorage.getItem(storageKey);
    var item = JSON.parse(storageStr);
    console.log("Reading storage data...");
    console.log(item.title);
}
/* END TEST CODE */
window.onload = function () {
    var addBtn = document.getElementById("add-to-do");
    addBtn.onclick = main;
};
function main() {
    // Get ToDoItem from user
    var item = getItem();
    displayToDoItem(item);
    // Get existing Todos, add new one, re-save list
    var allItems = readToDoItems();
    allItems.push(item); // Add new item to existing list
    saveToDoItems(allItems);
    // for (let i = 0; i < allItems.length; i++) {
    //     //alert(allItems[i].title);
    // }
}
/**
 * Move selected task to completed section of the web page
 */
function markAsComplete() {
    var currItem = this;
    var completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
    // Toggle the line through on the li
    currItem.classList.toggle("toggle");
}
/**
 * Displays ToDoItem on the page
 * @param item The item to be displayed
 */
function displayToDoItem(item) {
    var li = document.createElement("li");
    li.onclick = markAsComplete;
    li.innerHTML = item.title;
    console.log(li);
    var displayLi = document.getElementById("list");
    displayLi.appendChild(li);
}
/**
 * Gets the user input todo item
 * from the form
 */
function getItem() {
    var title = document.getElementById("title").value;
    var item = new ToDoItem(title);
    var deadline = document.getElementById("deadline").value;
    item.deadline = new Date(deadline);
    item.isCompleted = false;
    return item;
}
var theStorageKey = "MyItems";
function saveToDoItems(items) {
    var stringData = JSON.stringify(items);
    localStorage.setItem(theStorageKey, stringData);
}
function readToDoItems() {
    var stringData = localStorage.getItem("MyItems");
    if (stringData == null) {
        return new Array();
    }
    return JSON.parse(stringData);
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
