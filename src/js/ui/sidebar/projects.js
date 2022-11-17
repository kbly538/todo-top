import { createProject, getProjectCollection } from "../../model/todoProject";
import { displayProjectDetails } from "../main_content/projectDetails";

const projectTab = document.querySelector('.projects-container');
const prjBtn = document.querySelector('#get-projects');
const createNewProjectBtn = document.querySelector('.create-new-project.btn')
export const projects = projectTab.childNodes;
let currElement = '';


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
    createProject(String(Math.floor(Math.random() * 300 )+ 30))
    updateProjectList()
})
