export const submitTodoForm = (e) => {
    const formInputs = e.target.parentNode;
    const title = formInputs['title'].value;
    const description = formInputs['description']?.value;
    const priority = formInputs['toDoPriority']?.value;
    const dueDate = formInputs['dueDate'].value;
    
    console.log(title, description, priority, dueDate)
}