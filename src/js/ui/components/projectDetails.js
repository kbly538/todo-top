import { removeEventHandler } from "../eventHandlers/todoDetailsItemEvents"
import { displayProjectDetails } from "../main_content/displayProjectDetails"
import { removeTodo } from "./projectDetailsActions"
import createButtonsWrapper from "./projectDetailsButtons/buttonsWrapper"
import createRemoveButton from "./projectDetailsButtons/removeButton"

let HIGH_PRIORITY_COLOR = '#ef5350'
let MEDIUM_PRIORITY_COLOR = '#ff9800'
let LOW_PRIORITY_COLOR = '#4caf50'

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
        todoDueDate.textContent = new Date(todo.dueDate)?.toLocaleString();
        todoDetailsWrapper.appendChild(todoTitle);
        if (todoDescription.textContent !== "") todoDetailsWrapper.appendChild(todoDescription);
        if (todoDueDate.textContent !== 'Invalid Date') todoDetailsWrapper.appendChild(todoDueDate);
        
        //////////////////////////////////////////////////////////////////////////
        // SEPERATE THIS LOGIC LATER
        const buttonsWrapper = createButtonsWrapper();
        const removeButton = createRemoveButton();
        buttonsWrapper.appendChild(removeButton);
        removeEventHandler(removeButton, project, todo)
        ////////////////////////////////////////////////////////////////////////////////////////

        singleTodoDiv.appendChild(todoDetailsWrapper)
        singleTodoDiv.appendChild(buttonsWrapper)

        todoDiv.appendChild(singleTodoDiv);

    });
    
    projectDetailsComponent.appendChild(todoDiv);
    

    return projectDetailsComponent;
}


export default createProjectDetailsComponent;


