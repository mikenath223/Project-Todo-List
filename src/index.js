import './style.css';
import './Normalize.css';
import createButGradient from './animate-dom';
import {
    appendStorage,
    appendProjects,
    completeTask,
    showTaskForm,
    toggleProjectTasks
} from './dom-manipulation';

createButGradient();
appendStorage();
appendProjects(true);
completeTask();
showTaskForm();
toggleProjectTasks();