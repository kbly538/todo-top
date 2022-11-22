import PRIORITIES from "./js/data/enums";
import {createTodoItem} from "./js/model/toDoItem/toDoItemOperations";
import {createProject} from "./js/model/toDoProject/toDoProjectOperations"
import "./css/style.css"
import "./css/todoListItem.css"
import "./css/createProjectForm.css"
import "./css/sidebar.css"
import "./css/badges.css"
import "./css/header.css"
import "./js/ui/footer/footer"
import "./js/ui/sidebar/projects"
import "./js/ui/main_content/displayProjectDetails"
import "./js/ui/sidebar/newToDoForm/newTodoForm"
import "./js/ui/components/floatingActionButton"
import { updateProjectList } from "./js/ui/sidebar/projects";
import { displayProjectDetails } from "./js/ui/main_content/displayProjectDetails";
import { displayNewProjectForm, initProjectForm } from "./js/ui/sidebar/newProject/newProject";


const todoArgs1 = ['exercise', 'upper body for 1 hour', PRIORITIES.HIGH]
const todoArgs2 = ['exercise', 'upper body for 1 hour', PRIORITIES.LOW]
const todoArgs3 = ['exercise', 'upper body for 1 hour', PRIORITIES.MEDIUM]

let defaultProject = createProject('Default');

let homeProject = createProject('Home');
let workProject = createProject('Work');
let studyProject = createProject('Study');

let todo1 = createTodoItem(...todoArgs1);
let todo2 = createTodoItem(...todoArgs2);
let todo3 = createTodoItem(...todoArgs3);
let todo4 = createTodoItem(...todoArgs2);
let todo5 = createTodoItem(...todoArgs3);




defaultProject.addTodo(todo1)
defaultProject.addTodo(todo2)
homeProject.addTodo(todo3)
workProject.addTodo(todo4)
studyProject.addTodo(todo5)
displayProjectDetails(1)
initProjectForm();
updateProjectList()
