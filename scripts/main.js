/**
 * Represents a sinle task on a todo list
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
/* END TEST CODE */
window.onload = function () {
    var addBtn = document.getElementById("add-to-do");
    addBtn.onclick = main;
};
function main() {
    // Get ToDoItem from user
    var item = getItem();
    // Display new ToDoItem on page
    displayToDoItem(item);
    // Save ToDoItem
}
/**
 * Move selected task to completed section of the web page
 */
function markAsComplete() {
    var currItem = this;
    var completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
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
