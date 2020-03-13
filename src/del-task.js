import { retrieveTasks } from "./storage";

const delTask = index => {
  const tasks = retrieveTasks();
  delete tasks[index];
  localStorage.removeItem("taskList");
  localStorage.setItem("taskList", JSON.stringify(tasks));
};

export default delTask;
