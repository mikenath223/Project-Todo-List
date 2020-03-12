import { retrieveTasks } from "./storage";

const editTask = () => {
  const edit = document.querySelectorAll('.icon');
  const form = document.querySelector('.form');
  edit.forEach((e, ind) => {
    const task = retrieveTasks().array[ind];
      e.addEventListener('click', () => {
        form.elements.forEach(e => {
          // e.value = ;
        })
      })
  })
  const task = retrieveTasks().array[index]
  console.log(task)

};

export default editTask