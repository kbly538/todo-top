const createRemoveButton = function(){
    const btn = document.createElement('div');
    btn.classList.add('remove-todo-item-btn')
    btn.textContent = 'Remove'

    return btn;
}

export default createRemoveButton;