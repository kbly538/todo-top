import getProjectCollection from "../../model/projectCollection/projectCollection"

let HIGH_PRIORITY_COLOR = '#ef5350'
let MEDIUM_PRIORITY_COLOR = '#ff9800'
let LOW_PRIORITY_COLOR = '#4caf50'


const mainContent = document.querySelector('.main-content')


let projectHeading;
let projectContents;

export const displayProjectDetails = function(id){

    mainContent.innerHTML = '';
    const projects = getProjectCollection()
    const currentProject = projects.find(p => p.id === id)
    projectContents = createProjectDetailsComponents(currentProject);
    mainContent.appendChild(projectContents)
}

const createProjectDetailsComponents = (project)=>{
    const projectDetailsComponent = document.createElement('div')
    projectDetailsComponent.classList.add('main-content-project')
    projectDetailsComponent.setAttribute('data-id', project.id)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('project-todos')

    // Title
    projectHeading = document.createElement('h1');
    projectHeading.textContent = project.title
    projectDetailsComponent.appendChild(projectHeading);

    // Body
    project.todoList.forEach(todo => {
        const singleTodoDiv = document.createElement('div');
        singleTodoDiv.classList.add('single-todo-div')
        const todoTitle = document.createElement('h2');
        const todoDescription = document.createElement('div');
        const todoDueDate = document.createElement('div');
        const priority = todo.priority;
        
        switch (priority) {
            case 3: {
                singleTodoDiv.style.backgroundColor = HIGH_PRIORITY_COLOR; 
                singleTodoDiv.style.color = 'white';
                break;
            
            };
            case 2: {
                singleTodoDiv.style.backgroundColor = MEDIUM_PRIORITY_COLOR; 
                singleTodoDiv.style.color = 'black';
                break;
            };
            case 1: {
                singleTodoDiv.style.backgroundColor = LOW_PRIORITY_COLOR; 
                singleTodoDiv.style.color = 'white'; 
                break;
            };
            default: singleTodoDiv.style.backgroundColor = LOW_PRIORITY_COLOR; break;
            
        }

        todoTitle.textContent = todo.title;
        todoDescription.textContent = todo.description;
        todoDueDate.textContent = todo.dueDate.toLocaleDateString();

        singleTodoDiv.appendChild(todoTitle);
        if (todoDescription.textContent !== "") singleTodoDiv.appendChild(todoDescription);
        singleTodoDiv.appendChild(todoDueDate);

        todoDiv.appendChild(singleTodoDiv);

    });
    
    projectDetailsComponent.appendChild(todoDiv);
    
    

    return projectDetailsComponent;
}





