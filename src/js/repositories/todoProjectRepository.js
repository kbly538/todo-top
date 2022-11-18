import getProjectCollection from "../model/projectCollection/projectCollection"

export const addTodoProject = function() {

}
export const removeToDoProject = function () {
    
}
export const getToDoProjectById = (id) => getAllToDoProjects().find(p => p.id === id);

const getAllToDoProjects = () => getProjectCollection();