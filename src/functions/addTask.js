
export default function newTask() {

    let rightColumn = document.querySelector('.right-column');

    let newTaskName = prompt("Enter your task name");
    let newTask = document.createElement('div');
    newTask.classList.add('new-task');
    newTask.textContent = newTaskName;
    newTask.addEventListener("click", (e) => {
        taskStatus();
    })
    rightColumn.append(newTask);

}

