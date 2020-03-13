import { collector, addItems } from './container';
import { saveTask, retrieveTasks } from './storage';
import { editTaskForm, editStorage } from './edit-task';
import delTask from './del-task';
import Edit from './assets/edit.png';
import High from './assets/high.png';
import Medium from './assets/medium.png';
import Low from './assets/low.png';
import Del from './assets/delete.png';

const form = document.querySelector('.form');
const modal = document.querySelector('.modal');
const showTaskForm = () => {
    const showBut = document.querySelector('.add-task');

    showBut.onclick = () => {
        modal.style.visibility = 'visible';
        form.classList.add('translate');
        form.elements[10].value = 'Add Todo';
        form.firstElementChild.textContent = 'Create Task';
    };

    document.querySelector('.close').onclick = () => {
        modal.style.visibility = 'hidden';
        form.classList.remove('translate');
    };
    window.onclick = e => {
        if (e.target === modal) {
            modal.style.visibility = 'hidden';
            form.classList.remove('translate');
        }
    };
};

const completedState = (parent, line) => {
    line.style.width = '100%';
    parent.classList.add('change');
};

const uncompletedState = (parent, line) => {
    line.style.width = '0';
    parent.classList.remove('change');
};

const projects = [];
const appendProjects = () => {
    const select = document.querySelector('#project');
    if (retrieveTasks()) {
        retrieveTasks().forEach(task => {
            const proj = task.project;
            if (!projects.includes(proj)) {
                projects.push(proj);
                const uniqProj = projects[projects.length - 1];
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
    if (status === 'urgent') {
        priority = High;
    } else if (status === 'important') {
        priority = Medium;
    } else {
        priority = Low;
    }
    return priority;
};


const appendTask = (elem, ind) => {
    const createElem = ele => document.createElement(ele);
    const parent = document.querySelector('.task-list');

    const newElem = createElem('div');
    newElem.classList.add('list-item');
    newElem.dataset.index = ind;
    const priority = checkPriority(elem.priority);
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
        const accordionList = createElem('div');
        accordionList.classList.add('accordion-list');
        accordionList.dataset.project = `${elem.project}`;
        const projectTitle = createElem('p');
        projectTitle.classList.add('project-title');
        projectTitle.innerHTML = `${elem.project} <span class="project-toggle">&plus;</span>`;
        parent.appendChild(accordionList);
        accordionList.append(projectTitle, newElem);
    };

    const accordion = [...document.querySelectorAll('.accordion-list')];
    const accordionArray = accordion.map(e => e.dataset.project);

    if (accordion.length > 0) {
        let bool;
        let index;
        const accordSet = [...new Set(accordionArray)];
        accordSet.map((ele, i) => {
            if (elem.project === ele) {
                index = i;
                bool = true;
            }
            return ele;
        });

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
            document.querySelector(`span[data-check="${ind}"]`),
        );
        const checkBoxes = document.querySelectorAll("input[type='checkbox']");
        checkBoxes.forEach(e => {
            if (e.dataset.check === ind.toString()) {
                e.checked = true;
            }
        });
    }

    document.querySelector(`.icon-${ind}`).onclick = () => {
        modal.style.visibility = 'visible';
        form.classList.add('translate');
        editTaskForm(ind);
    };

    document.querySelector(`.del-icon-${ind}`).onclick = () => {
        delTask(ind);
        window.location.reload();
    };
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
    const project = formElems.newProj.value.length < 1 ?
        formElems.project.value :
        formElems.newProj.value;
    let status;
    formElems.priority.forEach(e => {
        if (e.checked) {
            status = e.id;
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

    Array.from(formElems).forEach(e => {
        if (e.value) {
            e.value = '';
        }
        return e;
    });

    document.querySelector('.modal').style.visibility = 'hidden';
    form.classList.remove('translate');

    const list = document.querySelectorAll('.list-item');
    list.forEach(e => {
        if (e.dataset.index === index.toString()) {
            const listChildren = e.children;
            const parentFirstchild = listChildren[1];
            const parentSecondchild = listChildren[2];
            parentFirstchild.children[0].lastElementChild.src = checkPriority(status);
            parentFirstchild.lastElementChild.textContent = title;
            parentSecondchild.innerHTML = `
      <p>Due: <span>${dueDate}</span>|<span>${dueTime}</span></p>
      <img src=${Edit} alt="edit" class="icon"/>
      <img src=${Del} alt="delete" class="del-icon"/>
      `;

            const icons = [...document.querySelectorAll('.icon')];
            const icon = icons[index];

            icon.onclick = () => {
                modal.style.visibility = 'visible';
                form.classList.add('translate');
                editTaskForm(index);
            };

            const delIcons = [...document.querySelectorAll('.del-icon')];
            const delIcon = delIcons[index];

            delIcon.onclick = () => {
                delTask(index);
                window.location.reload();
            };
        }
    });
    window.location.reload();
};

form.addEventListener('submit', e => {
    const formSubmit = e.target.elements[10];
    e.preventDefault();
    if (formSubmit.value === 'Edit Item') {
        const submitInd = formSubmit.dataset.index;
        return appendEditTask(submitInd);
    }
    const formElems = form.elements;
    let status;
    formElems.priority.forEach(e => {
        if (e.checked) {
            status = e.id;
        }
    });
    const newProj = formElems.newProj.value;
    const project = formElems.newProj.value.length < 1 ? formElems.project.value : newProj;
    const formTitle = formElems.title.value;
    const formDesc = formElems.description.value;
    const dueDate = formElems.dueDate.value;
    const dueTime = formElems.dueTime.value;
    const notes = formElems.notes.value;
    addItems({
        project,
        title: formTitle,
        description: formDesc,
        date: dueDate,
        time: dueTime,
        priority: status,
        note: notes,
    });
    saveTask(collector[collector.length - 1]);

    appendProjects();
    displayTasks();

    formElems.newProj.value = '';
    formElems.title.value = '';
    formElems.description.value = '';
    formElems.dueDate.value = '';
    formElems.dueTime.value = '';
    formElems.notes.value = '';

    modal.style.visibility = 'hidden';
    return form.classList.remove('translate');
});

const toggleLocalStore = (ind, state) => {
    const newTaskList = [];
    const tasks = retrieveTasks();
    tasks.forEach((item, taskInd) => {
        if (+ind === taskInd) {
            item.completed = state;
        }
        newTaskList.push(item);
    });
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
};

const completeTask = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(box => {
        box.onclick = e => {
            const parent = box.parentNode;
            const ind = e.target.dataset.check;

            const lineCancel = document.querySelector(`span[data-check="${ind}"]`);

            if (e.target.checked === true) {
                completedState(parent.parentNode, lineCancel);
                toggleLocalStore(ind, true);
            } else {
                uncompletedState(parent.parentNode, lineCancel);
                toggleLocalStore(ind, false);
            }
        };
    });
};


const toggleProjectTasks = () => {

    const toggleTasks = (e) => {
        const parent = e.target.parentNode.parentNode;
        const children = parent.querySelectorAll(".list-item")
        children.forEach(elem => {

            if (elem.style.display == 'none') { elem.style.display = 'flex' } else { elem.style.display = 'none' }
        })

    }
    let pointers = document.querySelectorAll(".project-toggle");
    pointers.forEach(elem => elem.addEventListener("click", toggleTasks));

};

export {
    appendStorage,
    appendProjects,
    completeTask,
    showTaskForm,
    toggleProjectTasks
};