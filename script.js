let todoInput = document.querySelector(".todo-input");  // select the input box of the todo
let todosList = document.querySelector(".todo-list");   // select the unordered list

todoInput.addEventListener("keypress" , handleKeyPress);     // event listener for key press

function handleKeyPress(event){
    if(event.key == "Enter"){                           // to check key is pressed is enter
        let todo = event.target.value;                  // to takeout the value in the input box
        if(todo){
         let li = document.createElement("li");            //create li element 
         li.classList.add("todo");                         // add todo class name in li elements
         // sets the html of li
         li.innerHTML = todo;                             
         li.addEventListener("dblclick" , handleDeleteTodo);    // to delete a todo
         todosList.append(li);                                  // to append in to ul
         event.target.value="";                                 // set the value of input box 
        }
        else{
            // if no value is entered in input box
            alert("Enter a todo !!");
        }
     }
}

function handleDeleteTodo(e){
    e.target.remove();
}