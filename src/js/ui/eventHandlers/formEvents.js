import PRIORITIES from "../../data/enums";
import createTodoItem from "../../model/toDoItem/toDoItemOperations";
import { addToDoItem } from "../../repositories/todoItemRepository";
import { getToDoProjectById } from "../../repositories/todoProjectRepository";
import { displayProjectDetails } from "../main_content/projectDetails";

export const submitTodoForm = (e) => {
    const formInputs = e.target.parentNode;
    const title = formInputs['title'].value;
    const description = formInputs['description']?.value;
    const priority = formInputs['toDoPriority']?.value;
    const dueDate = formInputs['dueDate'].value;
    const projectId = formInputs['selectProject'].value;
    

    const project = getToDoProjectById(Number(projectId));
    const newItem = createTodoItem(title, description, priority, dueDate);
    addToDoItem(newItem, project);
    displayProjectDetails(project.id)

}