const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();


    const formData = new FormData(loginForm);
    const formDataObj = Object.fromEntries(formData.entries());


    const isFormValid = Object.values(formDataObj).every((value) => value !== '');

    if (isFormValid) {
        console.log(formDataObj);
        loginForm.reset();
    } else {
        alert('Please fill in all fields!');
    }
});