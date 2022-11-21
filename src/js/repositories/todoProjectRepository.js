import getProjectCollection from "../model/projectCollection/projectCollection"

export const addTodoProject = function () {

}
export const removeTodoProject = function () {

}
export const removeTodoFromProject = function (todoToRemove, project) {

    if (project !== null) {
        project.todoList = project.todoList.filter(todoItem => todoItem !== todoToRemove);
 
        return true;
    }

    return false;
}

export const getProjectTodoList = (projectId) => getTodoProjectById(projectId).todoList;

export const getTodoProjectById = (id) => getAllTodoProjects().find(p => p.id === id);

const getAllTodoProjects = () => getProjectCollection();

