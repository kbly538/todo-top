import { isThisISOWeek, isToday, parseISO } from "date-fns";
import { getAllTodoItems } from "../../../repositories/todoItemRepository";





export const getTodaysTodos = ()=>{
    const allTodoItems = getAllTodoItems();
    return allTodoItems.filter(todo => isToday(todo.dueDate));
}


export const getWeeksTodos = ()=>{
    const allTodoItems = getAllTodoItems();
    return allTodoItems.filter(todo => isThisISOWeek(todo.dueDate));
}