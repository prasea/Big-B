const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const collection = document.querySelector('.collection');
const clearTasks = document.querySelector('.clear-tasks');

loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTasksFromLocalStorage);
    form.addEventListener('submit', addTask);
    collection.addEventListener('click', removeTask);
    clearTasks.addEventListener('click', clearAll);
    filter.addEventListener('keyup', searchTask);
}

function addTask(e){
    let newTask = taskInput.value;
        if(newTask === ''){
        alert("New task cannot be left blank");
        } else{
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(newTask));
            
            const deleteLink = document.createElement('a');
            deleteLink.className = 'delete-item secondary-content';
            deleteLink.innerHTML = '<i class="fa fa-remove"></i>';
            li.appendChild(deleteLink);
            
            collection.appendChild(li);
        
            storeTaskInLocalStorage(newTask);
        
            taskInput.value = '';
        }
    // newTask = '';
    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        
        const deleteLink = document.createElement('a');
        deleteLink.className = 'delete-item secondary-content';
        deleteLink.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(deleteLink);
        
        collection.appendChild(li);
    })
    
}
function removeTask(e){    
        if(e.target.parentElement.classList.contains('delete-item')){
            if(confirm(`Are you sure you want to delete task: ${e.target.parentElement.parentElement.textContent}`)){
                e.target.parentElement.parentElement.remove();                
            }
        }    
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);//Passing li as parameter
}
function removeTaskFromLocalStorage(li){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(li.textContent === task){
            tasks.splice(index, 1);
        }        
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearAll(e){
    // collection.innerHTML = '';
    while(collection.firstChild){
        collection.removeChild(collection.firstChild);
    }
    clearAllFromLocalstorage();
}
function clearAllFromLocalstorage(){
    localStorage.clear();
}

function searchTask(e){
    const searchedTask = e.target.value.toLowerCase();
    const lis = document.querySelectorAll('.collection-item');
    lis.forEach(function(li){
        const liTaskName = li.textContent.toLowerCase();
        if(liTaskName.indexOf(searchedTask) != -1){
            li.style.display = 'block';
        } else{
            li.style.display = 'none'
        }
    })
}
