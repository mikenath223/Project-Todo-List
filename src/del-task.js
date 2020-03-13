import { retrieveTasks } from "./storage";

const delTask = index => {
  console.log('err', index);
  
  let tasks = retrieveTasks();
  tasks = tasks.filter((e, ind) => ind !== index);

  localStorage.removeItem("taskList");
  console.log(tasks);
  
  if (tasks.length > 0) {
    console.log('err');
    
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }
};

export default delTask;
