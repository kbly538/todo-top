import getProjectCollection, { projectCollection } from "../model/projectCollection/projectCollection"
import { updateMainContentDisplay } from "../ui/main_content/displayProjectDetails";
import { updateProjectList } from "../ui/sidebar/projects";
import { alertificate } from "../utils/alert/alertificate";

export const addTodoProject = function () {

}
export const removeTodoProject = function (project) {

    if (project.title === 'Default'){
        alertificate('You cannot remove default project!');
        return;
    }

    projectCollection.projects = projectCollection.projects.filter(p => p.id !== project.id); // TODO: WORKS?
    updateProjectList()    
    updateMainContentDisplay()
    alertificate(`Removed Project: ${project.title}`, 'confirm');
}
export const removeTodoFromProject = function (todoToRemove, project) {

    if (project !== null) {
        project.todoList = project.todoList.filter(todoItem => todoItem !== todoToRemove);
        alertificate(`Removed item`, 'confirm')
        return true;
    }

    return false;
}

export const getProjectTodoList = (projectId) => getTodoProjectById(projectId).todoList;

export const getTodoProjectById = (id) => getProjectCollection().find(p => p.id === id);



