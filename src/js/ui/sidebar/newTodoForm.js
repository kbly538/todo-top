import PRIORITIES from "../../model/enums";
import createTodoItem from "../../model/todoItem";
import { createProject, getProjectCollection } from "../../model/todoProject";
import { currElement, displayProjectDetails, updateProjectDetails } from "../main_content/projectDetails";
import { updateProjectList } from "./projects";

const createTodoBtn = document.querySelector('.create-new-todo.btn')



const createForm = function(e){
    
    
}







createTodoBtn.addEventListener('click', (e)=> {createForm(e)})