export const createTooltip = (tooltipText)=>{
    const tipDiv = document.createElement('div');
    tipDiv.textContent = tooltipText;
    tipDiv.style.color = 'white';

    return tipDiv;
}