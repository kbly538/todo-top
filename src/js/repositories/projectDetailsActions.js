import { updateTodoItem } from "./todoItemRepository";
import { removeTodoFromProject } from "./todoProjectRepository"

export const removeTodo = function(todo, project){
    return removeTodoFromProject(todo, project) // returns true if successful
}

export const editTodo = function(todo, project){
    return updateTodoItem(todo, project)
}