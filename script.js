class Task{
    constructor(task){
        this.task = task;
        this.completed = false;
    }
}

class All_Tasks{
    constructor(tasks = []){
        this.tasks = tasks;
        
    }
    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) { 
            this.tasks.splice(index, 1); 
        }
    }

}

function DisplayTasks(tasks){
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");
        taskItem.innerHTML = `
            <p ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.task}</p>
            <button class="button1" onclick="removeTask('${task.task}')">remove this task</button>
            <button class="button2" onclick="changeStatus('${task.task}')">Change status</button>
        `;

        taskList.appendChild(taskItem);
    });
}


function AddNewTask(){
    const taskInput = document.getElementById("task");
    const task = taskInput.value;
    const newTask = new Task(task);
    shelf.addTask(newTask);
    DisplayTasks(shelf.tasks);

    taskInput.value = "";
}

function confirmDelete() {
    const confirmation = confirm("Are you sure you want to delete all tasks?");
    if (confirmation) {
        shelf.tasks = []; 
        DisplayTasks(shelf.tasks); 
    }
}

function removeTask(taskText) {
    const taskToRemove = shelf.tasks.find(task => task.task === taskText);
    if (taskToRemove) {
        shelf.removeTask(taskToRemove);
        DisplayTasks(shelf.tasks); 
    }
}


function changeStatus(taskText, button) {
    const taskToChange = shelf.tasks.find(task => task.task === taskText);
    if (taskToChange) {
        taskToChange.completed = !taskToChange.completed; 
        DisplayTasks(shelf.tasks);
    }
}


const shelf = new All_Tasks([]);



