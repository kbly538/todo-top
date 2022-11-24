import getProjectCollection from "../model/projectCollection/projectCollection";
import { alertificate } from "../utils/alert/alertificate";
import { updateDisplay} from "../ui/events/updateDisplay"

export const addTodoItem = function(item, project){
    project.addTodo(item);
    updateDisplay();
    alertificate('added', 'confirm');
}

export const removeTodoItem = function(todo){
    
    throw Error('Error removing')
}


export const updateTodoItem = function(todo, title, desc, priority, dueDate){
    todo.title = title;
    todo.description = desc;
    todo.priority = priority;
    todo.dueDate = dueDate;
    alertificate('Updated the item!', 'confirm');
    updateDisplay();
}

export const getTodoItem = function(){

}

export const getTodoItemById = function(){

}


export const getAllTodoItems = ()=>{
    return getProjectCollection().reduce((todos, project)=>{
        return todos.concat(project.todoList)
    }, [])

}
