import { collector, addItems } from "./container";
import { saveTask, retrieveTasks } from "./storage";
import { editTaskForm, editStorage } from "./edit-task";
import delTask from './del-task';
import Edit from "./assets/edit.png";
import High from "./assets/high.png";
import Medium from "./assets/medium.png";
import Low from "./assets/low.png";
import Del from "./assets/delete.png";

const form = document.querySelector(".form");
const modal = document.querySelector(".modal");
const showTaskForm = () => {
    const showBut = document.querySelector(".add-task");

    showBut.onclick = () => {
        modal.style.visibility = "visible";
        form.classList.add("translate");
        form.elements[10].value = "Add Todo";
        form.firstElementChild.textContent = "Create Task";
    };

    document.querySelector(".close").onclick = () => {
        modal.style.visibility = "hidden";
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
        if (proj) {
            select.innerHTML += `<option value='${proj}'>${proj}</option>`;
        }
    }
};

const checkPriority = status => {
    let priority;
    if (status === "urgent") {
        priority = High;
    } else if (status === "important") {
        priority = Medium;
    } else {
        priority = Low;
    }
    return priority;
};

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
  <img src=${Edit} alt="edit" class="icon icon-${ind}"/>
  <img src=${Del} alt="delete" class="del-icon del-icon-${ind}"/>
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

    document.querySelector(`.icon-${ind}`).onclick = () => {
        modal.style.visibility = "visible";
        form.classList.add("translate");
        editTaskForm(ind);
    };

    document.querySelector(`.del-icon-${ind}`).onclick = () => {
        console.log(ind, 'storage');

        delTask(ind);
        // CALL HERE to DELETE
        appendDelTask(ind);

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

const appendEditTask = index => {
    const task = retrieveTasks()[index];
    const formElems = form.elements;
    let project =
        formElems.newProj.value.length < 1 ?
        formElems.project.value :
        formElems.newProj.value;
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
        if (formElems[el].value) formElems[el].value = "";
    }

    document.querySelector(".modal").style.visibility = "hidden";
    form.classList.remove("translate");

    const list = document.querySelectorAll(".list-item");
    for (let el in list) {
        if (list[el].dataset.index === index.toString()) {
            let listChildren = list[el].children;
            let parentFirstchild = listChildren[1];
            let parentSecondchild = listChildren[2];
            parentFirstchild.children[0].lastElementChild.src = checkPriority(status);
            parentFirstchild.lastElementChild.textContent = title;
            parentSecondchild.innerHTML = `
      <p>Due: <span>${dueDate}</span>|<span>${dueTime}</span></p>
      <img src=${Edit} alt="edit" class="icon"/>
      <img src=${Del} alt="delete" class="del-icon"/>
      `;

            let icons = [...document.querySelectorAll(".icon")];
            let icon = icons[index];

            icon.onclick = () => {
                console.log("works");
                modal.style.visibility = "visible";
                form.classList.add("translate");
                editTaskForm(index);
            };

            let delIcons = [...document.querySelectorAll('.del-icon')]
            let delIcon = delIcons[index];

            delIcon.onclick = () => {
                console.log('works', index);

                delTask(index);
                appendDelTask(index);

            }

            break;
        }

    }
};

const appendDelTask = (index) => {

    let dl = document.querySelector(`div[data-index="${index}"]`);
    dl.parentNode.removeChild(dl);

};

const addTasks = () => {
    form.addEventListener("submit", e => {
        const formSubmit = e.target.elements[10];
        e.preventDefault();
        if (formSubmit.value === "Edit Item") {
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
        let newProj = formElems.newProj.value;
        let project =
            formElems.newProj.value.length < 1 ? formElems.project.value : newProj;
        let formTitle = formElems.title.value;
        let formDesc = formElems.description.value;
        let dueDate = formElems.dueDate.value;
        let dueTime = formElems.dueTime.value;
        let notes = formElems.notes.value;
        addItems({
            project: project,
            title: formTitle,
            description: formDesc,
            date: dueDate,
            time: dueTime,
            priority: status,
            note: notes
        });
        saveTask(collector[collector.length - 1]);

        appendProjects();
        displayTasks();

        formElems.newProj.value = "";
        formElems.title.value = "";
        formElems.description.value = "";
        formElems.dueDate.value = "";
        formElems.dueTime.value = "";
        formElems.notes.value = "";

        modal.style.visibility = "hidden";
        form.classList.remove("translate");
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