//Selectors
const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");
//Event Listeners
document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener('click',filterTodo);
//Functions
function addTodo(event){
    console.log('hello');
    event.preventDefault();

    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    //Create Li
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add Todo to local storage
    saveLocalTodos(todoInput.value);
    //Check Mark Button
    const completedButton=document.createElement('button');
    completedButton.innerText='idofgjd';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check trash Button
    const trashButton=document.createElement('button');
    trashButton.innerText='idofgjd';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //clear Todod Input value
    todoInput.value="";
}

function deleteCheck(e){
    const item=e.target;

    //Delete Todo
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        //Animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.remove();
        
    }

    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }

}

function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
                break;
            case "incomplete":{
                if(!todo.classList.contains('completed')){
                    if(todo.classList.contains('completed')){
                        todo.style.display='flex';
                    }
                    else{
                        todo.style.display='none';
                    }
                }
            }
        }

    });
}

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')==null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos')==null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    //Create Li
    const newTodo=document.createElement('li');
    newTodo.innerText=todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add Todo to local storage
    //saveLocalTodos(todoInput.value);
    //Check Mark Button
    const completedButton=document.createElement('button');
    completedButton.innerText='idofgjd';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check trash Button
    const trashButton=document.createElement('button');
    trashButton.innerText='idofgjd';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}