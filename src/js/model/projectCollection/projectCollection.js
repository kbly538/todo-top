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

export const projectCollection = new ProjectCollection();

const getProjectCollection = () => projectCollection.projects.map(p => p);

export default getProjectCollection;
