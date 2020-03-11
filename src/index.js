import './style.css';
import './Normalize.css';
import createButGradient from './animate-dom';
import { addTasks, appendStorage, appendProjects, completeTask, showTaskForm } from './dom-manipulation';


createButGradient();
addTasks();
appendStorage();
appendProjects(true)
completeTask();
showTaskForm();