document.querySelector('.task-form').addEventListener('submit', addItem);
const taskInput = document.querySelector('#task');
taskInput.value = '';
/*
// storing to localStorage using below method has limit to just single input.For multiple inputs, we create Array
function addItem(e){
    const newTask =  taskInput.value;
    localStorage.setItem('task', newTask);
    e.preventDefault();
}
*/

function addItem(e){
    const newTask = taskInput.value;
    let tasks;
    if(newTask === ''){
        alert('Task cant be left blank');
    } else{
        if(localStorage.getItem('tasks') === null){
            tasks = [];
        } else{
            tasks = JSON.parse(localStorage.getItem('tasks'));            
        }
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));        
    }
}

// JSON.parse() converts string to Array/Object
const taskLists = JSON.parse(localStorage.getItem('tasks'));
// taskLists.forEach(function(taskList){
//     console.log(taskList);
// })
console.log(taskLists);