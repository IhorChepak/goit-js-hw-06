const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    const expectedLength = parseInt(inputEl.getAttribute('data-length'));
    const actualLength = inputEl.value.length;

    if (actualLength === expectedLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});