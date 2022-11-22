import Project from "../../../model/toDoProject/todoProject"
import createProject from "../../../model/toDoProject/toDoProjectOperations";
import { createTooltip } from "../../../utils/tooltipElement";
import { updateProjectList } from "../projects";

const createNewProjectForm = ()=>{

    // Container for the form
    const newProjectFormContainer = document.createElement('div');
    newProjectFormContainer.id = 'new-project-form-container';





    // Form
    const form = document.createElement('form');
    form.id = 'new-project-form';
    const formElements = [];


    // Title input label
    const lblTitle = document.createElement('label');
    lblTitle.setAttribute('for', 'title');

    // Title input
    const inptTitle = document.createElement('input');
    inptTitle.type = 'text';
    inptTitle.id = 'title';
    inptTitle.name = 'title';
    inptTitle.minLength = 2; // TODO: Validation
    inptTitle.maxLength = 10; // TODO: Validation
    inptTitle.required = true;
    inptTitle.placeholder = 'Enter project name here'


    // TODO: Add color option here;



    // Submit button
    const btnSumbit = document.createElement('button');
    btnSumbit.type = 'submit';
    btnSumbit.textContent = 'Create Project';
    btnSumbit.addEventListener('click', (e)=>submitNewProject(e, inptTitle.value), false)
    

    window.addEventListener('keydown', (e)=>{

        const projectForm = document.querySelector('#new-project-form-container');
        if (e.key !== 'Escape' || 
            projectForm === null ||
            !projectForm.classList.contains('active'))  return;
        
        projectForm.classList.toggle('active');
    })
    

    form.appendChild(lblTitle)
    form.appendChild(inptTitle)
    form.appendChild(btnSumbit);    
    newProjectFormContainer.appendChild(form);
    
    const toolTip = createTooltip('Press \'ESC\' to exit')
    newProjectFormContainer.appendChild(toolTip)
    
    

    return newProjectFormContainer;
}



export const displayNewProjectForm = ()=> {
    
    const projectForm = document.getElementById('new-project-form-container');
    projectForm.classList.toggle('active')
    
}

export const initProjectForm = () => {
    document.querySelector('.main-content').appendChild(createNewProjectForm())
}



const submitNewProject = (e, val)=>{
    try {
        createProject(val);
    } catch 
    {
        console.log('project already exists')
    }
    updateProjectList()
    e.preventDefault();
    
}
