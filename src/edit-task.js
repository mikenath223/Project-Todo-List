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
