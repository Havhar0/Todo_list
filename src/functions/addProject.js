/* 

1. Grab left column.
2. Pop up - get name for project.
3. Create button object.
4. Add it to an array.
5. Display new div inn right column with project name.

*/

export default function newProject() {

    let leftColumn = document.querySelector('.left-column');

    let newProjectName = prompt("Enter your project name");
    let newProject = document.createElement('div');
    newProject.classList.add('new-project-btn');
    newProject.textContent = newProjectName;
    leftColumn.appendChild(newProject);

}