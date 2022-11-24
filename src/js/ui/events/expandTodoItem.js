import { updateProjectList } from "../sidebar/projects"

export const expandTodoItem = (title, expandableContainer) => {


    if (title.dataset.expanded == 'false') {
        title.dataset['expanded'] = true;

    }

    else {
        title.dataset.expanded = false;

    }




    updateProjectList()
}