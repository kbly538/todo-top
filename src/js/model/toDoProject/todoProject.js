import uniqueID from "../../utils/uniqueID";

const Project = function(title){
    this.title = title,
    this.todoList = [];
    this.id = uniqueID();
    this.addTodo = (todo)=>{

        if (!todo || todo.constructor.name !== 'TodoItem') throw Error('Invalid todo item');
        const todoAlreadyAdded = this.todoList.find(t => todo.id === t.id);
        
        if (todoAlreadyAdded)console.error(`Todo already in the project`)
        else this.todoList.push(todo);
    }
}

export default Project;
