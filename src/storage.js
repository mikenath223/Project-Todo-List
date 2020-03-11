const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const saveTask = (task) => {
  if (storageAvailable("localStorage")) {
    const taskObjs = { array: [] };
    if (localStorage.getItem("taskList")) {
      console.log('works');
      
      const storedTask = JSON.parse(localStorage.getItem("taskList"));
      storedTask.array.push(task);
      localStorage.setItem("taskList", JSON.stringify(storedTask));
    } else {
      taskObjs.array.push(task);
      localStorage.setItem("taskList", JSON.stringify(taskObjs));
    }
  }
}

const retrieveTasks = () => {
  if (storageAvailable("localStorage")) {
    const savedTasks = JSON.parse(localStorage.getItem("taskList"));
    return savedTasks;
  }
  return false;
}

export { saveTask, retrieveTasks }