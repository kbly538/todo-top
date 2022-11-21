import createTodoItem from "../../model/toDoItem/toDoItemOperations";
import { addTodoItem } from "../../repositories/todoItemRepository";
import { getTodoProjectById } from "../../repositories/todoProjectRepository";
import { displayProjectDetails } from "../main_content/displayProjectDetails";

export const submitTodoForm = (e) => {
    const formInputs = e.target.parentNode;
    const title = formInputs['title'].value;
    const description = formInputs['description']?.value;
    const priority = formInputs['toDoPriority']?.value;
    const dueDate = formInputs['dueDate'].value;
    const projectId = formInputs['selectProject'].value;
    

    const project = getTodoProjectById(Number(projectId));
    const newItem = createTodoItem(title, description, priority, dueDate);
    addTodoItem(newItem, project);
    displayProjectDetails(project.id)

}

