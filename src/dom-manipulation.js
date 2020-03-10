import { collector, addItems } from "./container";

let projects;
const appendProjects = () => {
  const select = document.querySelector("#project");
  projects.forEach(e => {
    select.appendChild(`<option value='${e}'>${e}</option>`);
  });
};

const displayTasks = () => {
  const parent = document.querySelector(".task-list");
    collector.forEach(elem => {
      const newElem = document.createElement("div");
      newElem.classList.add("list-item");
      newElem.innerHTML = `
  <div class="task-item">
      <input type="checkbox">
      <h2>${elem.title}</h2>
      </div>
  <p>Due: <span>${elem.date}</span></p>
          `;

      parent.appendChild(newElem);
    });
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
    arr[0] = formElems.project.value;
    arr[1] = formElems.title.value;
    arr[2] = formElems.description.value;
    arr[3] = formElems.dueDate.value;
    arr[4] = formElems.dueTime.value;
    arr[5] = checked();
    arr[6] = formElems.notes.value;
    let items = addItems({
      project: arr[0],
      title: arr[1],
      description: arr[2],
      date: arr[3],
      time: arr[4],
      priority: arr[5],
      note: arr[6]
    });
    console.log(items, collector);

    projects = collector.map(item => item.project);
    appendProjects();
    displayTasks();
  });
};


export { displayTasks, addTasks };
