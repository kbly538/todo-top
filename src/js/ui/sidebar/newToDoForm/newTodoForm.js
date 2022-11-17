import createForm from "../../components/todoForm";

const form = createForm();
const createTodoBtn = document.querySelector('.create-new-todo.btn')
const mainContent = document.querySelector('.main-content');
const todoForm = document.createElement('div');

mainContent.appendChild(todoForm)






// Create form
createTodoBtn.addEventListener('click', (e)=> {
    todoForm.classList.remove('todo-form-wrapper-inactive')
    todoForm.classList.add('todo-form-wrapper-active')
    todoForm.appendChild(createForm());
})


// Closes form when clicked in the negative space

todoForm.addEventListener('click', (e)=>{
    const clickedOutsideForm = !document.querySelector('form').contains(e.target);
    
    if (clickedOutsideForm === true){
        todoForm.innerHTML = "";
        todoForm.classList.add('todo-form-wrapper-inactive')
        todoForm.classList.remove('todo-form-wrapper-active')
    }
})

// Closes form when esc'd
document.addEventListener('keydown', (e)=> {
    if (e.key == 'Escape'){
        todoForm.classList.remove('todo-form-wrapper-active')
        todoForm.classList.add('todo-form-wrapper-inactive')
        todoForm.innerHTML = "";
    }
})






