import { collector, addItems } from "./container";
import { saveTask, retrieveTasks } from "./storage";

const showTaskForm = () => {
  const showBut = document.querySelector(".add-task");
  const modal = document.querySelector(".modal");
  showBut.onclick = () => {
    modal.style.display = "block";
  };
  document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
};

let projects = [];
const appendProjects = stored => {
  const select = document.querySelector("#project");
  if (stored) {
    retrieveTasks().array.forEach(task => {
      let proj = task.project;
      if (!projects.includes(proj)) {
        projects.push(proj);
        let uniqProj = projects[projects.length - 1];
        select.innerHTML += `<option value='${uniqProj}'>${uniqProj}</option>`;
      }
    });
  } else {
    const proj = projects[projects.length - 1];
    select.innerHTML += `<option value='${proj}'>${proj}</option>`;
  }
};

const appendTask = (elem, ind) => {
  const createElem = ele => {
    return document.createElement(ele);
  };
  const parent = document.querySelector(".task-list");

  const newElem = createElem("div");
  newElem.classList.add("list-item");
  newElem.innerHTML = `
  <span class="list-item-before"></span>
  <div class="task-item" data-index=${ind}>
      <input type="checkbox">
      <h2>${elem.title}</h2>
  </div>
  <p>Due: <span>${elem.date}</span>|<span>${elem.time}</span></p>

  `;

  const createAccordion = () => {
    const accordionList = createElem("div");
    accordionList.classList.add("accordion-list");
    accordionList.dataset.project = `${elem.project}`;
    const projectTitle = createElem("p");
    projectTitle.classList.add("project-title");
    projectTitle.innerHTML = `${elem.project} <span class"toggle">&plus;</span>`;
    parent.appendChild(accordionList);
    accordionList.append(projectTitle, newElem);
  };

  const accordion = document.querySelectorAll(".accordion-list");
  const accordionArray = [...accordion];

  if (accordion.length > 0) {
    let bool, index;
    accordionArray.forEach((e, ind) => {
      if (elem.project === e.dataset.project) {
        index = ind;
        return (bool = true);
      } else {
        return (bool = false);
      }
    });
    if (bool) {
      accordion[index].appendChild(newElem);
    } else {
      createAccordion();
    }
  } else {
    createAccordion();
  }
};

const appendStorage = () => {
  if (retrieveTasks().array.length > 0) {
    retrieveTasks().array.forEach((elem, ind) => appendTask(elem, ind));
  }
};

const displayTasks = () => {
  const items = retrieveTasks().array;
  const task = items[items.length - 1];
  appendTask(task, items.length - 1);
};

const addTasks = () => {
  var form = document.querySelector(".form");
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

const completeTask = () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  console.log(checkboxes);
  checkboxes.forEach(box => {
    box.onclick = () => {
      const parent = box.parentNode;
      const ind = parent.dataset.index;
      const lineCancel = document.querySelectorAll(".list-item-before");
      if (box.checked == true) {
        parent.parentNode.style.backgroundColor = "rgba(252, 87, 101, 0.29)";
        parent.parentNode.style.borderTop = "2px solid green";
        parent.parentNode.style.color = "gray";
        lineCancel[ind].style.width = "100%";
        // parent.parentNode.style.setProperty('--width', `${100}%`)

        // editTask(2);
      } else {
        lineCancel[ind].style.width = "0";
        parent.parentNode.style.borderTop = "2px solid black";
        parent.parentNode.style.backgroundColor = "rgba(252, 87, 101, 0.829)";
        parent.parentNode.style.color = "#000";
      }
    };
  });
};

export { addTasks, appendStorage, appendProjects, completeTask, showTaskForm };
