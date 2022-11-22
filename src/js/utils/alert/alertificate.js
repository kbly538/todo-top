export const alertificate = (message, type) => {


    const alertBox = createAlertBox();

    styleAlertBox(alertBox, type === 'confirm');

    alertBox.textContent = message;


    setTimeout(() => {
        alertBox.style.transform = 'translateY(-100px)'
        alertBox.style.opacity = 1;
        alertBox.style.transition = 'opacity 0.4s, transform 0.4s'
    }, 0)


    setTimeout(() => {
        alertBox.style.transition = 'opacity 1s'
        alertBox.style.opacity = 0;
    }, 2000)

    setTimeout(() => {
        document.body.removeChild(wrapper);
    }, 3000)
}

const createAlertBox = () => {
    const wrapper = document.createElement('div')
    wrapper.style.position = 'static';
    wrapper.style.height = '0';
    wrapper.style.width = '0';

    const alertBox = document.createElement('div');



    wrapper.appendChild(alertBox)
    document.body.appendChild(wrapper);

    return wrapper
}


const styleAlertBox = (alertBox, type) => {
    alertBox.style.position = 'fixed';
    alertBox.style.width = '40ch';
    alertBox.style.height = 'fit-content';
    alertBox.style.right = '50px';
    alertBox.style.bottom = '100px';
    alertBox.style.backgroundColor = '#4CAF50';
    alertBox.style.opacity = 0;
    alertBox.style.color = 'white';
    alertBox.style.border = '3px solid red';
    alertBox.style.borderRadius = '10px';
    alertBox.style.padding = '5px 10px'
    alertBox.style.fontSize = '2rem'
    if (!type){
        alertBox.style.backgroundColor = 'red';
        alertBox.style.border = '3px solid green';
    }
}