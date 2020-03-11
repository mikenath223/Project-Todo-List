import { collector, addItems } from "./container";
import { saveTask, retrieveTasks } from "./storage";

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
  const parent = document.querySelector(".task-list");
  const newElem = document.createElement("div");
  newElem.classList.add("list-item");
  newElem.innerHTML = `
  <div class="task-item" data-index=${ind}>
      <input type="checkbox">
      <h2>${elem.title}</h2>
  </div>
  <p>Due: <span>${elem.date}</span>|<span>${elem.time}</span></p>

  `;
  parent.appendChild(newElem);
};

const appendStorage = () => {
  if (retrieveTasks().array.length > 0) {
    retrieveTasks().array.forEach((elem, ind) => appendTask(elem, ind));
  }
};

const displayTasks = () => {
  const items = retrieveTasks().array;
  const task = items[items.length - 1];
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

const completeTask = () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  console.log(checkboxes);
    checkboxes.forEach(box => {
    
     box.onclick = () => {
               
      if (box.checked == true) {
        const parent = box.parentNode
        const ind = parent.dataset.index;
        parent.parentNode.style.backgroundColor = "rgba(252, 87, 101, 0.29)"
        parent.parentNode.style.borderTop = "2px solid green"
        parent.parentNode.style.color = "gray"
        // parent.parentNode.style.setProperty('--width', `${100}%`)
          console.log(ind);
        editTask(2);
      } else {
        parent.parentNode.style.borderTop = "2px solid black"
        parent.parentNode.style.backgroundColor = "rgba(252, 87, 101, 0.829)"
        parent.parentNode.style.color = "#000"

          
          
      }
    };
  });
};

const editTask = (index) => {

    const task = retrieveTasks().array[index]
    console.log(task)
    let formBase = ` <form action="" method="post" class="edit-form">
          <div class="choose-project">
            <label for="project">Choose Existing Project</label>
            <select id="project" name="project">
              <option value="">${task.project}</option>
            </select>
            <span>or</span>
            <div>
              <label for="newProj">Add new Project</label>
              <input type="text" name="newProj" id="newProj">
            </div>
          </div>
          <div>
            <label for="title">Task Title</label>
            <input type="text" name="title" id="title" value="${task.title}">
          </div>
          <div>
            <label for="title">Task Description</label>
            <input type="text" name="description" id="description" value="${task.description}">
          </div>
          <div>
            <label for="dueDate">Task Due-Date</label>
            <input type="date" name="dueDate" id="dueDate" class="border" value="${task.date}">
          </div>
          <div>
            <label for="dueTime">Task Due-Time</label>
            <input type="time" name="dueTime" id="dueTime" class="border" value="${task.time}">
          </div>
          <div>
            <p>Task Priority</p>
            <label for="urgent">Urgent</label>
            <input type="radio" name="priority" id="urgent" class="radio border">
            <label for="important">Important</label>
            <input type="radio" name="priority" id="important" class="radio border">
            <label for="lessImportant">Less Important</label>
            <input type="radio" name="priority" id="lessImportant" class="radio border">
          </div>
          <div>
            <label for="notes">Add Notes</label>
            <input type="text" name="notes" id="notes" value="${task.notes}">
          </div>
          <input type="submit" value="Save Changes">
        </form>
        `;
    console.log(index)
    const parent = document.querySelector("body");
    const formHidden = document.createElement('div');
    formHidden.classList.add('show-form');
    formHidden.innerHTML = formBase;
    parent.appendChild(formHidden)
    console.log(formHidden)
//    formHidden.classList.remove('edit-hidden');
    
    
};


export { addTasks, appendStorage, appendProjects, completeTask };
