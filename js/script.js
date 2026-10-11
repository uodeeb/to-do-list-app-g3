// ----------------------------------Project Plan-------------------------------
/*
1. Project Description: 
    A simple to-do list application that allows users to add, delete, mark, edit, and view tasks.
2. Project Features:
    |-----A) Primary features
    |-1. Add a new task
    |-2. Delete a task
    |-3. Mark a task as completed
    |-4. Edit a task details
    |-5. View all tasks
    |------B) Secondary features
    |-1. Search tasks by name or status
    |-2. Filter tasks by status
    | 
    |
    |
3. Project Inputs:
    |-1. Task name // ui input
    |-2. Task status (pending/completed)// system input
    |-3. Task details (optional)// ui input
    |-4. Task Time & Date // ui input
4. Project Outputs:
    |-1. Task list // ui output
    |-2. Task details // ui output
    |-3. Task Delete button // ui output
    |-4. Task completed button // ui output
    |-5. Task edit button // ui output
    |-6. Completed tasks list // ui output
5. Project steps:
    |-1. User inputs task name, details, and Time & Date
    |-2. Task is added to the list
    |-3. User can delete, mark as completed, edit, and view all tasks
    |-4. Return UI to the main screen

*/

/* ----------------------------------Global Variables---------------------------- */
const taskTitle = document.getElementById('task__title');
const taskDesc = document.getElementById('task__desc');
const taskDueDate = document.getElementById('task__dueDate');
const taskListContainer = document.getElementById('task__list__ul');
const taskFormButton = document.getElementById('submit__butt');
const taskList = []
// console.log(taskTitle, taskDesc, taskDueDate, taskList);

// console.log(taskTitle.value);

// setTimeout(function() {
//     console.log(taskTitle.value);
// }, 
// 10000);



console.log(taskFormButton);

console.log(this);

// alert("hi, developer!")


// console.log(x)
// var x;
// eventListener
taskFormButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(taskTitle.value);
    console.log(taskDesc.value);
    console.log(taskDueDate.value);
    let task= {
        tasktTiltle: taskTitle.value,
        taskDesc: taskDesc.value,
        taskDueDate: taskDueDate.value,
        taskStatus: 'pending'
    }
    taskList.push(task)
    console.log(taskList);

    
    let taskitem=document.createElement('li');
    taskitem.innerHTML=`
    <span class="task__item__num">${taskListContainer.children.length+1}</span>
    <h3 class="task__item__title">${taskTitle.value}</h3>
    <p class="task__item__desc">${taskDesc.value}</p>
    <p class="task__item__dueDate">Due Date: ${taskDueDate.value}</p>
    <button class="task__item__btn">Complete</button>
    <button class="task__item__btn">Delete</button>
    <button class="task__item__btn">Edit</button>`
    taskitem.classList.add('task__item');
    taskListContainer.appendChild(taskitem);


});
