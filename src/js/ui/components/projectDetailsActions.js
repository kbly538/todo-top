import { updateTodoItem } from "../../repositories/todoItemRepository";
import { removeTodoFromProject } from "../../repositories/todoProjectRepository"

export const removeTodo = function(todo, project){
    return removeTodoFromProject(todo, project) // returns true if successful
}

export const editTodo = function(todo, project){
    return updateTodoItem(todo, project)
}