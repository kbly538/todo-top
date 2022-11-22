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
        const singleProjectDiv = document.createElement('div');
        singleProjectDiv.classList.add('sidebar-project-title')
        singleProjectDiv.textContent = proj.title
        singleProjectDiv.setAttribute(`data-id`, proj.id)
        const infoSpan = document.createElement('span');
        infoSpan.classList.add('project-todo-count-badge');
        infoSpan.textContent = '32';
        singleProjectDiv.appendChild(infoSpan)
        projectTab.appendChild(singleProjectDiv)
        singleProjectDiv.addEventListener('click', displayProjectDetails.bind(this, proj.id))
    })
}





// ADD NEW PROJECT FORM
createNewProjectBtn.addEventListener('click', ()=>{
    displayNewProjectForm()
})



