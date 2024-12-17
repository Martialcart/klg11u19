//hente ut elementer fra html dom til variabler som kan brukes
const inputField = document.querySelector('#inputField');
const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#todoList');

/*logge variabler til consol 
 * bruker `` tillate at variabler omringet av ${variabel} 
*/
console.log(`inputField: ${inputField}
            addButton: ${addButton}
            todoList: ${todoList}`);

//lytter etter klikk på addbutton, forså utføre handlinger definert i funksjon  
addButton.addEventListener('click', function () {
    console.log("trykket på addButton");
    
    //lager ett tidoItem av typen li, som ikke er koblet til html dom enda
    const todoItem = document.createElement('li');
    todoItem.textContent = inputField.value;//putter verdien fra inputfiles i tekstområdet til todoitem
    todoList.appendChild(todoItem);//todoitem blir lagt til som barn under todolist og blir synlig på websiden

    inputField.value = "";//her settes input feltet til å være ingenting

    const doneItem = document.createElement("button");//her lages en knapp for å markere at itemet er gjort 
    doneItem.textContent ="ferdig";//legger til navn til ferdigknapp i websiden
    todoItem.appendChild(doneItem);//legger knappen todoitem i websiden

    /*gir ferdigknapp en klikk-lytter som starter en funksjon via trykk
     * if-settningen toggler en css klasse som illustrerer at todoitem er fullført
     * */
    doneItem.addEventListener('click', function () {
        console.log("trykket på ferdig");
        if (todoItem.classList.contains("done")) {
            todoItem.classList.remove("done");
        } else {
            todoItem.classList.add("done");
        }
    });
     
    //sletteknapp for todoitem
    const deleteItem = document.createElement("button");
    deleteItem.textContent ="Slett";//gir sletteknappen navnet "slett"
    todoItem.appendChild(deleteItem);//setter sletteknappen på todo-itemet

    //setter opp lytting etter klikk på sletteknapp, som påfølges av en funksjon som skal utføres
    deleteItem.addEventListener('click', function () {
        console.log("trykket på slett");
        if(todoItem.classList.contains("done")) {//fjern todoitem om det er utført
            todoItem.remove();
        } else {
            alert("Gjøremål må være ferdig før et kan slettes");//gi en advarsel om oppgaven ikke er utført, istedenfor å slette
        }
    });  

});
