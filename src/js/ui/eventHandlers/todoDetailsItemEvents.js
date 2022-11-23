import createEditForm from "../components/Forms/editTodoForm"
import { removeTodo } from "../../repositories/projectDetailsActions"
import { displayProjectDetails } from "../main_content/displayProjectDetails"

export function removeEventHandler(removeButton, project, todo) {
    removeButton.addEventListener('click', () => {
        removeTodo(todo, project)
        displayProjectDetails(project.id)
        
    })
}

export function editEventHandler(editButton, todo) {
    editButton.addEventListener('click', () => {
        displayTodoEditForm(todo)
    })

}

const displayTodoEditForm = function (todo) {
    const todoForm = document.createElement('div');

    const form = createEditForm(todo);
    todoForm.appendChild(form);

    document.body.append(todoForm)

    todoForm.classList.remove('todo-form-wrapper-inactive')
    todoForm.classList.add('todo-form-wrapper-active')

    
    // Closes form when esc'd
    document.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            todoForm.classList.remove('todo-form-wrapper-active')
            todoForm.classList.add('todo-form-wrapper-inactive')
            todoForm.innerHTML = "";
        }
    })

}