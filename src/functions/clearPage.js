export default function clear(){
    const taskPage = document.querySelector('.right-column');
    while (taskPage.firstChild) {
        taskPage.removeChild(taskPage.lastChild);
    }
}

