import getProjectCollection, { projectCollection } from "../model/projectCollection/projectCollection"
import { updateMainContentDisplay } from "../ui/main_content/displayProjectDetails";
import { updateProjectList } from "../ui/sidebar/projects";
import { alertificate } from "../utils/alert/alertificate";

export const addTodoProject = function () {

}
export const removeTodoProject = function (project) {
    projectCollection.projects = projectCollection.projects.filter(p => p.id !== project.id); // TODO: WORKS?
    updateProjectList()    
    updateMainContentDisplay()
    alertificate(`Removed Project: ${project.title}`);
}
export const removeTodoFromProject = function (todoToRemove, project) {

    if (project !== null) {
        project.todoList = project.todoList.filter(todoItem => todoItem !== todoToRemove);
        alertificate(`Removed item`)
        return true;
    }

    return false;
}

export const getProjectTodoList = (projectId) => getTodoProjectById(projectId).todoList;

export const getTodoProjectById = (id) => getAllTodoProjects().find(p => p.id === id);

const getAllTodoProjects = () => getProjectCollection();

