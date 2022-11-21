const createEditButton = function(){
    const btn = document.createElement('div');
    btn.classList.add('edit-todo-item-btn')
    btn.textContent = 'Edit'

    return btn;
}

export default createEditButton;