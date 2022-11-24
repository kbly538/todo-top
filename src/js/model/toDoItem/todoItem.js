import { parseISO } from "date-fns";
import uniqueID from "../../utils/uniqueID";


const TodoItem = function(title, description, priority, dueDate = ''){

    this.title = title;
    this.description = description;
    if (dueDate !== '') this.dueDate = parseISO(dueDate);
    else this.dueDate = dueDate;
    this.priority = priority;
    this.id = uniqueID();

}


export default TodoItem;