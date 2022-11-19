import { removeTodo } from "../components/projectDetailsActions"
import { displayProjectDetails } from "../main_content/displayProjectDetails"

export function removeEventHandler(removeButton, project, todo) {
    removeButton.addEventListener('click', () => {
        removeTodo(project.id, todo.id)
        displayProjectDetails(project.id)
    })
}