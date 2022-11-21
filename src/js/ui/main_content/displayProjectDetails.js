import { getTodoProjectById } from "../../repositories/todoProjectRepository"
import createProjectDetails from "../components/projectDetails"


const mainContent = document.querySelector('.main-content')



export const displayProjectDetails = function(id){

    // Clear main content section
    mainContent.innerHTML = '';
    // Find passed project
    const currentProject = getTodoProjectById(id);
    // Create Project details
    const projectContents = createProjectDetails(currentProject);
    // Append details to main content section
    mainContent.appendChild(projectContents)
}
