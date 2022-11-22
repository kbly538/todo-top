import { HIGH_PRIORITY_COLOR, LOW_PRIORITY_COLOR, MEDIUM_PRIORITY_COLOR } from "../../data/config/properties"
import { editEventHandler, removeEventHandler } from "../eventHandlers/todoDetailsItemEvents"
import createButtonsWrapper from "./projectDetailsButtons/buttonsWrapper"
import createRemoveButton from "./projectDetailsButtons/removeButton"
import createEditButton from "./projectDetailsButtons/editButton"
import getProjectCollection from "../../model/projectCollection/projectCollection"
import { removeTodoProject } from "../../repositories/todoProjectRepository"



const createProjectDetailsComponent = (project)=>{
    const projectDetailsComponent = document.createElement('div')
    projectDetailsComponent.classList.add('main-content-project')
    projectDetailsComponent.setAttribute('data-id', project.id)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('project-todos')

    // Title
    const projectHeading = document.createElement('h1');
    projectHeading.textContent = project.title
    projectDetailsComponent.appendChild(projectHeading);
    
    // TODO: MOVE THESE
    projectHeading.style.display = 'inline-flex'
    projectHeading.style.alignItems = 'center'
    projectHeading.style.justifyContent = 'center'


    
    const removeProjectButton = document.createElement('span');
    removeProjectButton.textContent = '❌';
    removeProjectButton.style.fontSize = '20px';
    removeProjectButton.style.cursor = 'pointer';
    removeProjectButton.addEventListener('click', ()=>{
         removeTodoProject(project)
    }, false)
    
    const projectSettingsButton = document.createElement('span');
    projectSettingsButton.textContent = '⚙️';
    projectSettingsButton.style.fontSize = '20px';
    projectSettingsButton.style.cursor = 'pointer';
    projectSettingsButton.addEventListener('click', ()=>{console.log(`opening settings for ${project.title}....`)}, false)

    projectHeading.appendChild(removeProjectButton);
    projectHeading.appendChild(projectSettingsButton);

    //^^^^^^^^MOVE THESE

    // Body
    project.todoList.forEach(todo => {
        const singleTodoDiv = document.createElement('div');
        singleTodoDiv.classList.add('single-todo-div')
        const todoDetailsWrapper = document.createElement('div');
        todoDetailsWrapper.classList.add('todo-details-wrapper')
        const todoTitle = document.createElement('h2');
        const todoDescription = document.createElement('div');
        const todoDueDate = document.createElement('div');
        const priority = todo.priority;
        
        
        switch (priority) {
            case "3": {
                singleTodoDiv.style.backgroundColor = HIGH_PRIORITY_COLOR;
                singleTodoDiv.style.color = 'white';
                break;
            
            };
            case "2": {
                singleTodoDiv.style.backgroundColor = MEDIUM_PRIORITY_COLOR; 
                singleTodoDiv.style.color = 'black';
                break;
            };
            case "1": {
                singleTodoDiv.style.backgroundColor = LOW_PRIORITY_COLOR; 
                singleTodoDiv.style.color = 'white'; 
                break;
            };
            default: singleTodoDiv.style.backgroundColor = LOW_PRIORITY_COLOR; break;
            
        }
        
        todoTitle.textContent = todo.title;
        todoDescription.textContent = todo.description;
        todoDueDate.textContent = new Date(todo.dueDate)?.toLocaleString().substring(0, 16);
        todoDetailsWrapper.appendChild(todoTitle);
        if (todoDescription.textContent !== "") todoDetailsWrapper.appendChild(todoDescription);
        if (todoDueDate.textContent !== 'Invalid Date') todoDetailsWrapper.appendChild(todoDueDate);
        
        //////////////////////////////////////////////////////////////////////////
        // TODO: SEPERATE THIS LOGIC LATER
        const buttonsWrapper = createButtonsWrapper();
        const editButton = createEditButton();
        const removeButton = createRemoveButton();
        buttonsWrapper.appendChild(editButton);
        buttonsWrapper.appendChild(removeButton);
        removeEventHandler(removeButton, project, todo)
        editEventHandler(editButton, todo)
        ////////////////////////////////////////////////////////////////////////////////////////

        singleTodoDiv.appendChild(todoDetailsWrapper)
        singleTodoDiv.appendChild(buttonsWrapper)

        todoDiv.appendChild(singleTodoDiv);

    });
    
    projectDetailsComponent.appendChild(todoDiv);
    

    return projectDetailsComponent;
}


export default createProjectDetailsComponent;


