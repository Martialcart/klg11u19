const inputField = document.querySelector('#inputField');
const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#todoList');

console.log(`inputField: ${inputField}
            addButton: ${addButton}
            todoList: ${todoList}`);

addButton.addEventListener('click', function () {
    console.log("trykket på addButton");
    
    const todoItem = document.createElement('li');
    todoItem.textContent = inputField.value;
    todoList.appendChild(todoItem);

    inputField.value = "";

    const doneItem = document.createElement("button");
    doneItem.textContent ="ferdig";
    todoItem.appendChild(doneItem);
    doneItem.addEventListener('click', function () {
        console.log("trykket på ferdig");
        if (todoItem.classList.contains("done")) {
            todoItem.classList.remove("done");
        } else {
            todoItem.classList.add("done");
        }
    });

    const deleteItem = document.createElement("button");
    deleteItem.textContent ="Slett";
    todoItem.appendChild(deleteItem);
    deleteItem.addEventListener('click', function () {
        console.log("trykket på slett");
        if(todoItem.classList.contains("done")) {
            todoItem.remove();
        } else {
            alert("Gjøremål må være ferdig før et kan slettes");
        }
    });  

});