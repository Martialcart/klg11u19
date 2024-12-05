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

    console.log(`trykket på addButton`);
});