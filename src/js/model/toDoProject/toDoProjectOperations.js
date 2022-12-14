import {MAX_PROJECT_TITLE_LENGTH} from '../../data/config/properties';
import { projectCollection } from '../projectCollection/projectCollection';
import Project from './todoProject';


export const createProject = function(title){
    if (title.length > MAX_PROJECT_TITLE_LENGTH) {
        throw Error('Title cannot be longer than 10 characters long.')
    }
    const project = new Project (title);
    projectCollection.addProject(project);
    return project;

}


export default createProject;