const createRemoveButton = function(){
    const btn = document.createElement('button');
    btn.classList.add('remove-todo-item-btn')
    btn.textContent = 'Remove'
    btn.style.backgroundColor = 'red'
    btn.style.color = 'white'
    btn.style.border = 'none'

    return btn;
}

export default createRemoveButton;