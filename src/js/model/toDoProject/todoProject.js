import uniqueID from "../../utils/uniqueID";

const Project = function(title){
    this.title = title,
    this.todoList = [];
    this.id = uniqueID();
    this.addTodo = (todo)=>{

        if (!todo || todo.constructor.name !== 'TodoItem') throw Error('Invalid todo item');
        const todoAlreadyAdded = 
            this.todoList.find(t => todo.id === t.id) ||
            this.todoList.find(t => todo.title === t.title) &&
            this.todoList.find(t => todo.dueDate === t.dueDate) &&
            this.todoList.find(t => todo.description === t.description) &&
            this.todoList.find(t => todo.priority === t.priority);

        if (todoAlreadyAdded) console.error(`Todo already in the project`)
        else {
            todo.project = this.id;
            this.todoList.push(todo);
        }
    }
}

export default Project;
