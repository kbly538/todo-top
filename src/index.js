import PRIORITIES from "./js/model/enums";
import createTodoItem from "./js/model/todoItem";
import {createProject, getProjectCollection} from "./js/model/todoProject"
import { expandTodoItem } from "./js/ui/sandbox";
import "./css/style.css"
import "./js/ui/footer/footer"
import "./js/ui/sidebar/projects"
import "./js/ui/main_content/projectDetails"
import "./js/ui/sidebar/newTodoForm"
import { projects, updateProjectList } from "./js/ui/sidebar/projects";

const todoArgs1 = ['exercise', 'upper body for 1 hour', PRIORITIES.HIGH]
const todoArgs2 = ['exercise', 'upper body for 1 hour', PRIORITIES.LOW]
const todoArgs3 = ['exercise', 'upper body for 1 hour', PRIORITIES.MEDIUM]


let homeProject = createProject('Home');
let workProject = createProject('Work');
let studyProject = createProject('Study');

let todo1 = createTodoItem(...todoArgs1);
let todo2 = createTodoItem(...todoArgs2);
let todo3 = createTodoItem(...todoArgs1);
let todo7 = createTodoItem(...todoArgs3);
let todo8 = createTodoItem(...todoArgs2);
let todo9 = createTodoItem(...todoArgs3);
let todo10 = createTodoItem(...todoArgs1);
let todo11 = createTodoItem(...todoArgs3);
let todo12 = createTodoItem(...todoArgs1);
let todo13 = createTodoItem(...todoArgs1);
let todo14 = createTodoItem(...todoArgs2);
let todo15 = createTodoItem(...todoArgs1);
let todo4 = createTodoItem(...todoArgs1);
let todo5 = createTodoItem(...todoArgs1);
let todo6 = createTodoItem(...todoArgs1);


homeProject.addTodo(todo1)
homeProject.addTodo(todo2)
homeProject.addTodo(todo3)
homeProject.addTodo(todo7)
homeProject.addTodo(todo8)
homeProject.addTodo(todo9)
homeProject.addTodo(todo10)
homeProject.addTodo(todo11)
homeProject.addTodo(todo12)
homeProject.addTodo(todo13)
homeProject.addTodo(todo14)
homeProject.addTodo(todo15)

workProject.addTodo(todo4)

studyProject.addTodo(todo5)
studyProject.addTodo(todo6)

updateProjectList()

console.log(projects)