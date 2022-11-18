

const fab = document.getElementById('floating-action-button');
const fabPr = document.getElementById('fab-add-project');
const fabTd = document.getElementById('fab-add-todo');

let fabState = false;

fab.addEventListener('click', ()=>{
    fabState = !fabState;
    
    if (fabState){
        fabPr.style.scale = '0'
        fabTd.style.scale = '0'
        return
    } 

    fabPr.style.scale = '1'
    fabTd.style.scale = '1'

    
})

fabPr.addEventListener('click', ()=>{
    addTodoProject();
})


fabTd.addEventListener('click', ()=>{
    addToDoItem();
})