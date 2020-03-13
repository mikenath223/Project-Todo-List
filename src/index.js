import './style.css';
import './Normalize.css';
import createButGradient from './animate-dom';
import {
  appendStorage,
  appendProjects,
  completeTask,
  showTaskForm,
} from './dom-manipulation';

createButGradient();
appendStorage();
appendProjects(true);
completeTask();
showTaskForm();
