import todoList from './container';

const displayTasks = () => {

    const parent = document.querySelector(".task-list");
    todoList.forEach((elem) => {

        const newElem = document.createElement('div');
        newElem.classList.add("list-item");
        newElem.innerHTML = `
<div class="task-item">
    <input type="checkbox">
    <h2>${elem}</h2>
    </div>
<p>Due: </p>

        `;

        parent.appendChild(newElem)
        
    }) 
    
}


export default displayTasks;
