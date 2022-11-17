import uniqueID from "../utils/uniqueID";

const MAX_PROJECT_TITLE_LENGTH = 10;

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



const ProjectCollection = function(){
    this.projects = [];
    this.addProject = (p)=>{
        // TODO: What happend when project number exceeds a certain number?
        if (this.projects.length > 20){
            throw Error ('You cannot add more than 20 projects')
        }

        const projectAlreadyAdded = this.projects.find(project => 
            project.title.trim().toLowerCase() === p.title.trim().toLowerCase());
        
        if (!projectAlreadyAdded)this.projects.push(p);
        else throw Error('An error occured while adding the project')
    }
}

// Create collection instance
const projectCollection = new ProjectCollection();


// API: Create object
export const createProject = function(title){
    if (title.length > MAX_PROJECT_TITLE_LENGTH) {
        throw Error('Title cannot be longer than 10 characters long.')
    }
    const project = new Project(title);
    projectCollection.addProject(project);
    return project;

}

// API: Get shallow copy of projects
export const getProjectCollection = () => projectCollection.projects.map(p => p);



