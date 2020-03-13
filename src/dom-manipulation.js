import { collector, addItems } from "./container";
import { saveTask, retrieveTasks } from "./storage";
import Edit from "./assets/edit.png";
import High from "./assets/high.png";
import Medium from "./assets/medium.png";
import Low from "./assets/low.png";
import { editTaskForm, editStorage } from "./edit-task";

const form = document.querySelector(".form");
const showTaskForm = () => {
  const showBut = document.querySelector(".add-task");
  const modal = document.querySelector(".modal");
  const icons = document.querySelectorAll(".icon");
  const showForm = state => {
    modal.style.visibility = "visible";
    form.classList.add("translate");
    if (state === "create") {
      form.elements[10].value = "Create Task";
      form.firstElementChild.textContent = "Create Task";
    }
  };

  showBut.onclick = () => showForm("create");

  icons.forEach((e, ind) => {
    e.onclick = () => {
      showForm("edit");
      editTaskForm(ind);
    };
  });

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

const completedState = (parent, index) => {
  const line = document.querySelectorAll(".list-item-before");
  line.forEach(e => {
    if (e.dataset.check === index) {
      e.style.width = "100%";
    }
  });
  parent.classList.add("change");
};

const uncompletedState = (parent, index, line) => {
  line.forEach(e => {
    if (e.dataset.check === index) {
      e.style.width = "0";
    }
  });
  parent.classList.remove("change");
};

let projects = [];
const appendProjects = () => {
  const select = document.querySelector("#project");
  if (retrieveTasks()) {
    retrieveTasks().forEach(task => {
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

const checkPriority = (status) => {
  let priority;
  if (status === "urgent") {
    priority = High;
  }
  else if (status === "important") {
    priority = Medium;
  }
  else {
    priority = Low;
  }
  return priority;
}

const appendTask = (elem, ind) => {
  const createElem = ele => {
    return document.createElement(ele);
  };
  const parent = document.querySelector(".task-list");

  const newElem = createElem("div");
  newElem.classList.add("list-item");
  newElem.dataset.index = ind;
  let priority = checkPriority(elem.priority);
  newElem.innerHTML = `
  <span class="list-item-before" data-check=${ind}></span>
  <div class="task-item">
      <div>
      <img src=${priority} alt="priority" class="priority"/>
      </div>
      <input type="checkbox" data-check=${ind}>
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
    projectTitle.innerHTML = `${elem.project} <span>&plus;</span>`;
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
    completedState(newElem, ind.toString());
    const checkBoxes = document.querySelectorAll("input[type='checkbox']");
    checkBoxes.forEach(e => {
      if (e.dataset.check === ind.toString()) {
        e.checked = true;
      }
    });
  }
};

const appendStorage = () => {
  if (retrieveTasks()) {
    retrieveTasks().forEach((elem, ind) => appendTask(elem, ind));
  }
};

const displayTasks = () => {
  const items = retrieveTasks();
  const task = items[items.length - 1];
  appendTask(task, items.length - 1);
};

const appendEditTask = (index) => {
  const task = retrieveTasks()[index];
  const formElems = form.elements;
  let project =
      formElems.newProj.value.length < 1
        ? formElems.project.value
        : formElems.newProj.value;
  let status;
  formElems.priority.forEach(e => {
    if (e.checked) {
      return (status = e.id);
    }
  });

  const title = formElems.title.value;
  const dueDate = formElems.dueDate.value;
  const dueTime = formElems.dueTime.value;
  task.project = project;
  task.title = title;
  task.description = formElems.description.value;
  task.date = dueDate;
  task.time = dueTime;
  task.priority = status;
  task.note = formElems.notes.value;

  editStorage(index, task);

  for (let el in formElems) {
    if (formElems[el].value) formElems[el].value = '';
  }

  document.querySelector('.modal').style.visibility = "hidden";
  form.classList.remove("translate");

  const list = document.querySelectorAll('.list-item');
  for (let el in list) {
    if (list[el].dataset.index === index.toString()) {
      let listChildren = list[el].children;
      let parentFirstchild = listChildren[1];
      let parentSecondchild = listChildren[2];
      parentFirstchild.children[0].lastElementChild.src = checkPriority(status);
      parentFirstchild.lastElementChild.textContent = title;
      parentSecondchild.innerHTML = `Due: <span>${dueDate}</span>|<span>${dueTime}</span>`;
      break;
    }
  }

};


const addTasks = () => {
  form.addEventListener("submit", e => {
    const formSubmit = form.elements[10];
    e.preventDefault();
    if ((formSubmit.value = "Edit Item")) {
      const submitInd = formSubmit.dataset.index;
      return appendEditTask(submitInd);
    }
    const formElems = form.elements;
    let status;
    formElems.priority.forEach(e => {
      if (e.checked) {
        return (status = e.id);
      }
    });
    let project =
      formElems.newProj.value.length < 1
        ? formElems.project.value
        : formElems.newProj.value;
    addItems({
      project: project,
      title: formElems.title.value,
      description: formElems.description.value,
      date: formElems.dueDate.value,
      time: formElems.dueTime.value,
      priority: status,
      note: formElems.notes.value
    });
    saveTask(collector[collector.length - 1]);

    appendProjects();
    displayTasks();
  });
};

const toggleLocalStore = (ind, state) => {
  const newTaskList = [];
  const tasks = retrieveTasks();
  tasks.forEach((item, taskInd) => {
    if (+ind === taskInd) {
      item.completed = state;
    }
    newTaskList.push(item);
  });
  localStorage.setItem("taskList", JSON.stringify(newTaskList));
};

const completeTask = () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(box => {
    box.onclick = () => {
      const parent = box.parentNode;
      const ind = parent.parentNode.dataset.index;
      const lineCancel = document.querySelectorAll(".list-item-before");
      if (box.checked == true) {
        completedState(parent.parentNode, ind);
        toggleLocalStore(ind, true);
      } else {
        uncompletedState(parent.parentNode, ind, lineCancel);
        toggleLocalStore(ind, false);
      }
    };
  });
};

export { addTasks, appendStorage, appendProjects, completeTask, showTaskForm };
