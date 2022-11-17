import PRIORITIES from "../../model/enums";
import createTodoItem from "../../model/todoItem";
import { createProject, getProjectCollection } from "../../model/todoProject";
import { currElement, displayProjectDetails, updateProjectDetails } from "../main_content/projectDetails";
import { updateProjectList } from "./projects";

const createTodoBtn = document.querySelector('.create-new-todo.btn')
const todoForm = document.createElement('div');
let submitButton;

const createForm = function(e){
    const form = document.createElement('form');
    form.id = 'todoForm'
    
    
    // Create label and input for TITLE
    const lblTitle = document.createElement('label');
    lblTitle.setAttribute('for', 'title');
    
    const inptTitle = document.createElement('input')
    inptTitle.type = 'text';
    inptTitle.name = 'title';
    inptTitle.id = 'title';
    
    
    // Create label and input for DESCRIPTION
    const lblDescription = document.createElement('label');
    lblDescription.setAttribute('for', 'description');
    const inptDescription = document.createElement('input')
    inptDescription.type = 'textfield';
    inptDescription.name = 'description';
    inptDescription.id = 'description';
    
    
    // Create label and input for PRIORITY
    const lblPriority = document.createElement('label');
    lblPriority.setAttribute('for', 'toDoPriority');
    const inptPriority = document.createElement('input')
    inptPriority.type = 'text';
    inptPriority.name = 'toDoPriority';
    inptPriority.id = 'toDoPriority';
    
    // Create label and input for DUE DATE
    const lblDueDate = document.createElement('label');
    lblDueDate.setAttribute('for', 'dueDate');
    const inptDueDate = document.createElement('input')
    inptDueDate.type = 'date';
    inptDueDate.name = 'dueDate';
    inptDueDate.id = 'dueDate';
    
    
    const submitBtn = document.createElement('div');
    submitBtn.textContent = 'Add' 
    submitBtn.style.backgroundColor = 'red';
    submitBtn.style.width = '300px';
    submitBtn.style.height = '300px';
    submitBtn.id = 'submitBtn'
    submitBtn.setAttribute('type', 'submit')
    submitBtn.setAttribute('form', 'todoForm')
    submitBtn.setAttribute('value', 'yallah')
    
    
    const elements = [lblTitle, inptTitle, lblDescription, inptDescription, lblPriority, inptPriority, lblDueDate, inptDueDate, submitBtn];
    elements.forEach(e => form.appendChild(e));


    document.body.appendChild(todoForm);
    
    return form
};




// Create form
createTodoBtn.addEventListener('click', (e)=> {
    
    todoForm.classList.remove('todo-form-wrapper-inactive')
    todoForm.classList.add('todo-form-wrapper-active')
    todoForm.appendChild(createForm());
    submitButton = document.querySelector('#submitBtn')
    submitButton.addEventListener('click', (e)=>{
        const formInputs = e.target.parentNode;
        const title = formInputs['title'].value;
        const description = formInputs['description']?.value;
        const priority = formInputs['toDoPriority']?.value;
        const dueDate = formInputs['dueDate'].value;


    })
    

})

if (submitButton){
    submitButton.addEventListener
}

// Closes form when clicked in the negative space

todoForm.addEventListener('click', (e)=>{
    const clickedOutsideForm = !document.querySelector('form').contains(e.target);
    
    if (clickedOutsideForm === true){
        todoForm.innerHTML = "";
        todoForm.classList.add('todo-form-wrapper-inactive')
        todoForm.classList.remove('todo-form-wrapper-active')
    }
})

// Closes form when esc'd
document.addEventListener('keydown', (e)=> {
    if (e.key == 'Escape'){
        todoForm.classList.remove('todo-form-wrapper-active')
        todoForm.classList.add('todo-form-wrapper-inactive')
        todoForm.innerHTML = "";
    }
})






