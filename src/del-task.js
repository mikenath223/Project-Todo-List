import { retrieveTasks } from './storage';

const delTask = index => {
  let tasks = retrieveTasks();
  tasks = tasks.filter((e, ind) => ind !== index);
  localStorage.removeItem('taskList');
  if (tasks.length > 0) {
    localStorage.setItem('taskList', JSON.stringify(tasks));
  }
};

export default delTask;
