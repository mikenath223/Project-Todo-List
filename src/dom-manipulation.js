import { collector, addItems } from "./container";
import { saveTask, retrieveTasks } from "./storage";
import Edit from "./assets/edit.png";
import High from "./assets/high.png";
import Medium from "./assets/medium.png";
import Low from "./assets/low.png";

const showTaskForm = () => {
  const showBut = document.querySelector(".add-task");
  const modal = document.querySelector(".modal");
  const form = document.querySelector(".form");
  showBut.onclick = () => {
    modal.style.visibility = "visible";
    form.classList.add("translate");
  };
  document.querySelector(".close").onclick = () => {
    modal.style.visbility = "hidden";
    form.classList.remove("translate");
  };
  window.onclick = e => {
    if (e.target === modal) {
      modal.style.visibility = "hidden";
      form.classList.remove("translate");
    }
  };
};

const completedState = (parent, index, line) => {
  parent.style.backgroundColor = "rgba(252, 87, 101, 0.29)";
  parent.style.borderTop = "3px solid green";
  parent.style.color = "gray";
  line[index].style.width = "100%";
  parent.classList.add("change");
};

const uncompletedState = (parent, index, line) => {
  parent.style.backgroundColor = "rgb(241, 36, 53)";
  parent.style.borderTop = "3px solid black";
  parent.style.color = "#000";
  line[index].style.width = "0";
  parent.classList.remove("change");
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
  let priority;
  if (elem.priority === "urgent") {
    priority = High;
  } else if (elem.priority === "important") {
    priority = Medium;
  } else {
    priority = Low;
  }
  // console.log(elem.priority);
  // priority.forEach(e => {if (e.checked) {console.log(e.id)}})
  // if (elem.priority === "")
  newElem.innerHTML = `
  <span class="list-item-before"></span>
  <div class="task-item" data-index=${ind}>
      <div>
      <img src=${priority} alt="priority" class="priority"/>
      </div>
      <input type="checkbox">
      <h2>${elem.title}</h2>
  </div>
  <div class="date-wrap">
  <p>Due: <span>${elem.date}</span>|<span>${elem.time}</span></p>
  <img src=${Edit} alt="edit" class="icon"/>
  </div>
  </div>
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

  const accordion = [...document.querySelectorAll(".accordion-list")];
  const accordionArray = accordion.map(e => e.dataset.project);

  if (accordion.length > 0) {
    let bool;
    let index;
    let accordSet = [...new Set(accordionArray)];
    for (let ele in accordSet) {
      if (elem.project === accordSet[ele]) {
        index = ele;
        bool = true;
        break;
      }
    }
    if (bool) {
      accordion[index].appendChild(newElem);
    } else {
      createAccordion();
    }
  } else {
    createAccordion();
  }

  if (elem.completed) {
    completedState(
      newElem,
      ind,
      document.querySelectorAll(".list-item-before")
    );
    document.querySelectorAll("input[type='checkbox")[ind].checked = true;
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
        if (elem.checked) {
          return elem.id;
        }
      });
    };
    let status;
    formElems.priority.forEach(e => {
      if (e.checked) {
        console.log(e.id);
        return (status = e.id);
      }
    });
    let project =
      formElems.newProj.value.length < 1
        ? formElems.project.value
        : formElems.newProj.value;
    arr[0] = project;
    arr[1] = formElems.title.value;
    arr[2] = formElems.description.value;
    arr[3] = formElems.dueDate.value;
    arr[4] = formElems.dueTime.value;
    arr[5] = status;
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

const toggleLocalStore = (ind, state) => {
  const newTaskList = { array: [] };
  const tasks = retrieveTasks().array;
  tasks.forEach((item, taskInd) => {
    if (+ind === taskInd) {
      item.completed = state;
    }
    newTaskList.array.push(item);
  });
  localStorage.setItem("taskList", JSON.stringify(newTaskList));
};

const completeTask = () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(box => {
    box.onclick = () => {
      const parent = box.parentNode;
      const ind = parent.dataset.index;
      const lineCancel = document.querySelectorAll(".list-item-before");
      if (box.checked == true) {
        completedState(parent.parentNode, ind, lineCancel);
        toggleLocalStore(ind, true);
      } else {
        uncompletedState(parent.parentNode, ind, lineCancel);
        toggleLocalStore(ind, false);
      }
    };
  });
};

export { addTasks, appendStorage, appendProjects, completeTask, showTaskForm };
