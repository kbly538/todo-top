import uniqueID from "../../utils/uniqueID";


const TodoItem = function(title, description, priority, dueDate = new Date()){

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = uniqueID();

}


export default TodoItem;