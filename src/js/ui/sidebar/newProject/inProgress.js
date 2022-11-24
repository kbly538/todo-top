import { isThisISOWeek, isToday, parseISO, toDate } from "date-fns";
import { getAllTodoItems } from "../../../repositories/todoItemRepository";





export const getTodaysTodos = ()=>{
    const allTodoItems = getAllTodoItems();
    console.log(allTodoItems.filter(t => console.log(t.dueDate)))
    return allTodoItems
                .filter(todo => todo.dueDate != 'Invalid Date' && todo.dueDate != '')
                .filter(todo => {
        
        return isToday(parseISO(new Date(todo.dueDate).toISOString()))});
}


export const getWeeksTodos = ()=>{
    const allTodoItems = getAllTodoItems();
    return allTodoItems
                .filter(todo =>  todo.dueDate != 'Invalid Date' && todo.dueDate != '' && todo.dueDate != undefined && todo.dueDate != null)
                .filter(todo =>{
        
        
        return isThisISOWeek(parseISO(new Date(todo.dueDate).toISOString()))
    })
    ;
}