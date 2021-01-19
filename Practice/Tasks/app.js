const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filterTask = document.querySelector('#filter');
const collection = document.querySelector('.collection');
const clearTasks = document.querySelector('.clear-tasks');

function checkCollection(){
    let listItems = collection.children;
    if(listItems.length === 0){
        collection.style.display = 'none';
    }
}
checkCollection();


form.addEventListener('submit', addNewTaskOnFormSubmit);
collection.addEventListener('click', deleteTask);
clearTasks.addEventListener('click', deleteTasks);
filterTask.addEventListener('keyup', filterTasks);
document.addEventListener('DOMContentLoaded', getTasksFromLS);

function addNewTaskOnFormSubmit(e){
    collection.style.display = 'block';
    const newTask = taskInput.value;
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(newTask));
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    collection.appendChild(li);
    storeTaskInLS(newTask);
    taskInput.value ='';
    e.preventDefault();
}
function storeTaskInLS(newTask){
    let tasks;
    if(localStorage.getItem('todos') === null){
        tasks = [];
        tasks.push(newTask);
    } else{
        tasks = JSON.parse(localStorage.getItem('todos'));
        tasks.push(newTask);
    }
    localStorage.setItem('todos', JSON.stringify(tasks));
}

function getTasksFromLS(){
    let tasks;
    if(localStorage.getItem('todos') === null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('todos'));
    }
    populateUIFromLS(tasks);    
}

function populateUIFromLS(tasks){    
    collection.style.display = 'block';
    let output = '';
    tasks.forEach(task => {
        output +=`
            <li class="collection-item">
                ${task}
                <a class="delete-item secondary-content" href="#">
                    <i class="fa fa-remove"></i>
                </a>
            </li>
        `;
    });
    collection.innerHTML = output
}
function deleteTask(e){
    if(e.target.parentNode.classList.contains('delete-item')){
        e.target.parentNode.parentNode.remove();
    }
    deleteTaskFromLS(e.target.parentNode.parentNode.textContent);   
    checkCollection();
}
function deleteTaskFromLS(taskToBeDeleted){    
    let tasks = JSON.parse(localStorage.getItem('todos'));    
    tasks.forEach(function(task,index){
        if(task == taskToBeDeleted.trim()){
            tasks.splice(index,1);
        }
    })
    localStorage.setItem('todos', JSON.stringify(tasks));
}
function deleteTasks(){
    let listItems = collection.children;
    listItems = Array.from(listItems);
    listItems.forEach(listItem => listItem.remove());
    deleteTasksFromLS();
    checkCollection();
}

function deleteTasksFromLS(){
    localStorage.removeItem('todos');
}
function filterTasks(e){
    const searchedTask = e.target.value.toLowerCase();
    console.log(searchedTask)
    let listItems = collection.children;
    listItems = Array.from(listItems);
    listItems.forEach(listItem => {
        if(listItem.textContent.toLowerCase().indexOf(searchedTask) !== -1){
            listItem.style.display = 'block';
        } else{
            listItem.style.display = 'none';
        }
        
    })
}

