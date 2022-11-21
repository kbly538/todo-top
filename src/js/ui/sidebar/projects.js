import createProject from "../../model/toDoProject/toDoProjectOperations";
import getProjectCollection from "../../model/projectCollection/projectCollection";

import { displayProjectDetails } from "../main_content/displayProjectDetails";
import { displayNewProjectForm } from "./newProject/newProject";

const projectTab = document.querySelector('.projects-container');
const createNewProjectBtn = document.querySelector('.create-new-project.btn')
export const projects = projectTab.childNodes;



// UPDATE PROJECT LIST
export const updateProjectList = ()=>{
    projectTab.innerHTML = "";
    let allProjects = getProjectCollection()
    
    allProjects.forEach( proj =>{
        let singleProjectDiv = document.createElement('div');
        singleProjectDiv.textContent = proj.title
        singleProjectDiv.setAttribute(`data-id`, proj.id)
        projectTab.appendChild(singleProjectDiv)
        singleProjectDiv.addEventListener('click', displayProjectDetails.bind(this, proj.id))
    })
}





// ADD NEW PROJECT
createNewProjectBtn.addEventListener('click', ()=>{
    displayNewProjectForm()
})



