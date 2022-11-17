import TodoItem from "./todoItem";


export const createTodoItem = function(title, description, priority, dueDate)
{

    const invalidItem = title === undefined || title.length < 2;
    
    if (invalidItem) {
        throw Error('Title cannot be less than 2 characters long')
    };

    const item = new TodoItem(title, description, priority, dueDate)

    return item;
}





export default createTodoItem;