import { saveToLocaleStorage } from "../../DataStore/localStorage";
import uniqueID from "../../utils/uniqueID";

const Project = function(title){
    this.type = 'project';
    this.title = title,
    this.todoList = [];
    this.id = uniqueID();
    this.addTodo = (todo)=>{

        if (!todo || todo.constructor.name !== 'TodoItem') throw Error('Invalid todo item');
        const todoAlreadyAdded = 
            this.todoList.find(t => todo.id === t.id) ||
            this.todoList.find(t => todo.title === t.title);

        if (todoAlreadyAdded) console.error(`Todo already in the project`)
        else {
            todo.project = this.id;
            this.todoList.push(todo);
            console.log(this)
            saveToLocaleStorage(this.id, JSON.stringify(this))
        }

    }
}

export default Project;
