import getProjectCollection from "../model/projectCollection/projectCollection"

export const addTodoProject = function () {

}
export const removeToDoProject = function () {

}
export const removeTodoFromProject = function (projectId, todoId) {
    
    const project = getToDoProjectById(projectId)

    if (project !== null) {
        project.todoList = project.todoList.filter(function (todoItem) {
            return todoItem.id !== todoId;
        });

        return true;
    }

    return false;
}

export const getProjectTodoList = (projectId) => getToDoProjectById(projectId).todoList;

export const getToDoProjectById = (id) => getAllToDoProjects().find(p => p.id === id);

const getAllToDoProjects = () => getProjectCollection();

