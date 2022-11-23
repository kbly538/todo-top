import { updateProjectList } from "../sidebar/projects"

export const expandTodoItem = (title, expandableAttrs) => {
    expandableAttrs.forEach(el => {

        let expanded = false;

        if (el.hasAttribute('hidden')) {
            el.removeAttribute('hidden')
            expanded = true;
        }
        else {
            el.setAttribute('hidden', 'true')
            expanded = false;
        }
        
        title.setAttribute('data-expanded', expanded);
        console.log(title.dataset)
        updateProjectList()
    }
    )
}