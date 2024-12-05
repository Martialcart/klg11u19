const inputField = document.querySelector('#inputField');
const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#todoList');

console.log(`inputField: ${inputField}
            addButton: ${addButton}
            todoList: ${todoList}`);

addButton.addEventListener('click', function () {
    
    const todoItem = document.createElement('li');
    todoItem.textContent = inputField.value;
    todoList.appendChild(todoItem);

    inputField.value = "";

    const deleteItem = document.createElement("button");
    deleteItem.textContent ="Slett";
    todoItem.appendChild(deleteItem);

    console.log(`trykket på addButton`);
});