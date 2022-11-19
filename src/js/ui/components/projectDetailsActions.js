import { getToDoItemById } from "../../repositories/todoItemRepository";
import { getToDoProjectById, removeTodoFromProject } from "../../repositories/todoProjectRepository"

export const removeTodo = function(projectId, todoId){
    return removeTodoFromProject(projectId, todoId) // returns true if successful
}

const updateTodo = function(id){

}