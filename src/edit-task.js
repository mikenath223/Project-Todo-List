import { retrieveTasks } from "./storage";

const editTaskForm = (ind) => {
  console.log('err');
  
  const form = document.querySelector(".form");      
  const formElems = form.elements;
  const task = retrieveTasks()[ind];
  formElems.newProj.value = task.project;
  formElems.title.value = task.title;
  formElems.description.value = task.description;
  formElems.dueDate.value = task.date;
  formElems.dueTime.value = task.time;
  formElems.priority.forEach(e => {
    if (e.id === task.priority) {
      e.checked = true;
    }
  });
  formElems.notes.value = task.note;
  formElems[10].value = 'Edit Item';
  formElems[10].dataset.index = ind;
  form.firstElementChild.textContent = "Edit Task"
}

const editStorage = (ind, task) => {
  let obj = retrieveTasks();
  obj[ind] = task;
  localStorage.setItem("taskList", JSON.stringify(obj));
}

export { editTaskForm, editStorage };
