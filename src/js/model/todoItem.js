import uniqueID from "../utils/uniqueID";


const TodoItem = function(title, description, priority, dueDate = new Date()){
    
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = uniqueID();

    
}




const createTodoItem = function(title, description, priority, dueDate)
{

    const invalidItem = title === undefined || title.length < 2;
    
    if (invalidItem) {
        throw Error('Title cannot be less than 2 characters long')
        return;
    };

    const item = new TodoItem(title, description, priority, dueDate)

    return item;
}

export default createTodoItem;