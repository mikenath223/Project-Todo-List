import { collector, addItems } from "./container";
import { saveTask, retrieveTasks } from "./storage";

let projects = [];
const appendProjects = (stored) => {
  const select = document.querySelector("#project");
  if (stored) {
    retrieveTasks().array.forEach(task => {
      let proj = task.project;
        projects.push(proj);
        select.innerHTML += `<option value='${proj}'>${proj}</option>`;  
    })
  } else {
    const proj = projects[projects.length - 1];
    select.innerHTML += `<option value='${proj}'>${proj}</option>`;  
  }
};

const appendTask = elem => {
  const parent = document.querySelector(".task-list");
  const newElem = document.createElement("div");
  newElem.classList.add("list-item");
  newElem.innerHTML = `
  <div class="task-item">
      <input type="checkbox">
      <h2>${elem.title}</h2>
  </div>
  <p>Due: <span>${elem.date}</span> | <span>${elem.time}</span></p>
  `;
  parent.appendChild(newElem);
};

const appendStorage = () => {
  if (retrieveTasks().array.length > 0) {
    retrieveTasks().array.forEach((elem) => appendTask(elem));
  }
};

const displayTasks = () => {
  const items = retrieveTasks().array;
  const task = items[items.length-1];
  appendTask(task);
};

const addTasks = () => {
  var form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const arr = ["", "", "", "", "", "", ""];
    const formElems = form.elements;
    const checked = () => {
      document.querySelectorAll(".radio").forEach(elem => {
        if (elem.checked) return elem.value;
      });
    };
    let project =
      formElems.newProj.value.length < 1
        ? formElems.project.value
        : formElems.newProj.value;
    arr[0] = project;
    arr[1] = formElems.title.value;
    arr[2] = formElems.description.value;
    arr[3] = formElems.dueDate.value;
    arr[4] = formElems.dueTime.value;
    arr[5] = checked();
    arr[6] = formElems.notes.value;
    addItems({
      project: arr[0],
      title: arr[1],
      description: arr[2],
      date: arr[3],
      time: arr[4],
      priority: arr[5],
      note: arr[6]
    });
    console.log(collector);
    saveTask(collector[collector.length - 1]);

    appendProjects();
    displayTasks();
  });
};

export { addTasks, appendStorage, appendProjects };
