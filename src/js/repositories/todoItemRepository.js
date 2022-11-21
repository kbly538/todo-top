import createEditForm from "../ui/components/Forms/editTodoForm";
import createForm from "../ui/components/Forms/newTodoForm";

export const addTodoItem = function(item, project){
    project.addTodo(item);
}

export const removeTodoItem = function(todo){
    throw Error('lan')
}


export const updateTodoItem = function(todo, title, desc, priority, dueDate){
    todo.title = title;
    todo.description = desc;
    todo.priority = priority;
    todo.dueDate = dueDate;
}

export const getTodoItem = function(){

}

export const getTodoItemById = function(){

}

