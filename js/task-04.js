const counterValue = document.getElementById('value');
let currentValue = 0;

document.querySelectorAll('[data-action]').forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.action === 'increment') {
            currentValue++;
        } else {
            currentValue--;
        }
        counterValue.textContent = currentValue;
    });
});