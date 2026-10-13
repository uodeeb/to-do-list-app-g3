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
// app endpoint to store the tasks
const taskList = []

/*
1 ----------------------------user input----------------
                        |
                        |
                        |


2 ------------------------------taskList Updated--------------
                        |
                        |
                        |

3 ------------------------------return UI--------------







*/


// console.log(taskFormButton);

// console.log(this);

// function to handle the add task event-----------------------------------
const handleAddTask =  function(event) {
    event.preventDefault();
    console.log(taskTitle.value);
    console.log(taskDesc.value);
    console.log(taskDueDate.value);

    taskList.push(new Task(taskTitle.value, taskDesc.value, taskDueDate.value))
    console.log(taskList);
    returnTask(taskList);
}

// function to handle the tasks return---------------------------------------
const returnTask= function (tasks) {
    taskListContainer.innerHTML='';
    
    tasks.forEach(task => {
        console.log(task);
        returnUI(task);
    });
    // console.log(task);
    // tasks.forEach(task => {
    //     console.log(task);
    //     return task;
    // });
}



// function to return the UI--------------------------------------
const returnUI = function (task) {
    console.log(task);

    let taskitem=document.createElement('li');
    taskitem.innerHTML=`
    <span class="task__item__num">${taskListContainer.children.length+1}</span>
    <h3 class="task__item__title">${task.taskTitle}</h3>
    <p class="task__item__desc">${task.taskDesc}</p>
    <p class="task__item__dueDate">Due Date: ${task.taskDueDate}</p>
    <button class="task__item__com__btn">Complete</button>
    <button class="task__item__del__btn">Delete</button>
    <button class="task__item__edit__btn">Edit</button>`
    taskitem.classList.add('task__item');
    taskListContainer.appendChild(taskitem);
    complete(task);
    deleteTask(task);

}
// function to handle the complete task event---------------------------------------
const complete= function (task) {

    const compButt=document.querySelectorAll('.task__item__com__btn');
    console.log(compButt);
    compButt.forEach(button => {
        console.log(task);
        button.addEventListener('click', (e)=> handleCompleteTask(e, task));
    });
}

// function to handle the complete task event---------------------------------------
const handleCompleteTask = function(event, task) {
    task.completed();
    console.log(task);
    console.log('Complete Task');
    console.log(event.target.parentElement);
    event.target.parentElement.classList.remove('task__item__com__btn');
    event.target.parentElement.classList.toggle('completed');
        event.target.classList.toggle('task__item__com__btn');
    event.target.classList.toggle('completed');

}
// function to handle the delete task event---------------------------------------
const deleteTask = function (task) {
    const delButt=document.querySelectorAll('.task__item__del__btn');
    console.log(delButt);
    delButt.forEach(button => {
        console.log(button)
        button.addEventListener('click', (e)=> handleDelTask(e, task));
    });
}

// function to handle the delete task event---------------------------------------
const handleDelTask = function(event, task) {
    task.deleted();
    console.log('Delete Task');
    console.log(event.target.parentElement);
    event.target.parentElement.remove();
    console.log(taskList);
    // taskList.splice(taskList.indexOf(task), 1);
    // console.log(taskList);
    
}


// const text= new String("kljjljjkjljdf");
function Task(taskTitle, taskDesc, taskDueDate, taskStatus='pending'){
    this.taskTitle=taskTitle;
    this.taskDesc=taskDesc;
    this.taskDueDate=taskDueDate;
    this.taskStatus=taskStatus;
    this.taskId=new Date().getTime();
    this.completed=()=> {
        this.taskStatus='completed';
    }
    this.deleted=()=> {
        this.taskStatus='deleted';
        taskList.splice(taskList.indexOf(this), 1);
    }

}
// console.log(new Date().getTime())
// console.log(new Task('Buy Milk', 'Buy Milk from the store', '2026-08-01'));


// console.log(this)
taskFormButton.addEventListener('click', handleAddTask);