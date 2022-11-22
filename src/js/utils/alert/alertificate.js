export const alertificate = (message)=>{

    const wrapper = document.createElement('div')
    wrapper.style.position = 'static';
    wrapper.style.height = '0';
    wrapper.style.width = '0';

    const alertBox = document.createElement('div');

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
    


    alertBox.textContent = message;

    wrapper.appendChild(alertBox)
    document.body.appendChild(wrapper);

    setTimeout(()=> {
        alertBox.style.transition = 'opacity 0.4s'
        alertBox.style.opacity = 1;
    }, 0)
    

    setTimeout(()=> {
        alertBox.style.transition = 'opacity 1s'
        alertBox.style.opacity = 0;
    }, 2000)

    setTimeout(()=> {
        document.body.removeChild(wrapper);
    }, 3000)
}