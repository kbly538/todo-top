import { submitTodoForm } from "../eventHandlers/formEvents";

const createForm = function (e) {
    const form = document.createElement('form');
    form.id = 'todoForm';
    const formElements = [];


    // Create label and input for TITLE
    const lblTitle = document.createElement('label');
    lblTitle.setAttribute('for', 'title');

    const inptTitle = document.createElement('input');
    inptTitle.type = 'text';
    inptTitle.name = 'title';
    inptTitle.id = 'title';

    formElements.push(lblTitle);
    formElements.push(inptTitle);

    // Create label and input for DESCRIPTION
    const lblDescription = document.createElement('label');
    lblDescription.setAttribute('for', 'description');
    const inptDescription = document.createElement('input');

    inptDescription.type = 'textfield';
    inptDescription.name = 'description';
    inptDescription.id = 'description';

    formElements.push(lblDescription);
    formElements.push(inptDescription);


    // Create label and input for PRIORITY
    const lblPriority = document.createElement('label');
    lblPriority.setAttribute('for', 'toDoPriority');
    const inptPriority = document.createElement('input');

    inptPriority.type = 'text';
    inptPriority.name = 'toDoPriority';
    inptPriority.id = 'toDoPriority';

    formElements.push(lblPriority);
    formElements.push(inptPriority);

    // Create label and input for DUE DATE
    const lblDueDate = document.createElement('label');
    lblDueDate.setAttribute('for', 'dueDate');
    const inptDueDate = document.createElement('input');

    inptDueDate.type = 'date';
    inptDueDate.name = 'dueDate';
    inptDueDate.id = 'dueDate';

    formElements.push(lblDueDate);
    formElements.push(inptDueDate);


    const submitBtn = document.createElement('div');
    submitBtn.textContent = 'Add'
    submitBtn.id = 'submitBtn'
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('form', 'todoForm');
    submitBtn.addEventListener('click', submitTodoForm, false);

    formElements.push(submitBtn);


    formElements.forEach(e => form.appendChild(e));

    return form;
};


export default createForm;