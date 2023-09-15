const form = document.querySelector('form');
const firstName = document.getElementById('fname');
const fNameError = document.querySelector('#fname + span.error');
const lastName = document.getElementById('lname');
const lNameError = document.querySelector('#lname + span.error');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const password = document.getElementById('pwd');
const pwdError = document.querySelector('#pwd + span.error');
const confirmPwd = document.getElementById('confirm-pwd');

firstName.addEventListener('input', () => {
    if (firstName.validity.valid) {
        fNameError.textContent = '';
        fNameError.className = 'error';
    }
    else fNameErrorHandler();
});

lastName.addEventListener('input', () => {
    if (lastName.validity.valid) {
        lNameError.textContent = '';
        lNameError.className = 'error';
    }
    else lNameErrorHandler();
});

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    }
    else emailErrorHandler();
});

password.addEventListener('input', () => {
    if (password.validity.valid) {
        pwdError.textContent = '';
        pwdError.className = 'error';
    }
    else pwdErrorHandler();
});

form.addEventListener('submit', (event) => {
    switch (true) {
        case !firstName.validity.valid:
            fNameErrorHandler();
            event.preventDefault();
            break;
        case !lastName.validity.valid:
            lNameErrorHandler();
            event.preventDefault();
            break;
        case !email.validity.valid:
            emailErrorHandler();
            event.preventDefault();
            break;
        case !password.validity.valid:
            pwdErrorHandler();
            event.preventDefault();
            break;
        default:
            return;
    }
});

function errorActive(input, error) {
    input.style.borderColor = 'red';
    error.className = 'error active';
}

function validationHandler(input, error, func) {
    if (input.validity.valid) {
        input.style.borderColor = '';
        error.textContent = '';
        error.className = 'error';
    }
    else func;
}

function fNameErrorHandler() {
    if (firstName.validity.valueMissing) fNameError.textContent = 'You need to enter your first name.';
    
    fNameError.className = 'error active';
}

function lNameErrorHandler() {
    if (lastName.validity.valueMissing) lNameError.textContent = 'You need to enter your last name.';
    
    lNameError.className = 'error active';
}

function emailErrorHandler() {
    if (email.validity.valueMissing) emailError.textContent = 'You need to enter an email address.';
    else if (email.validity.typeMismatch) emailError.textContent = 'You need to enter a valid email address.';

    emailError.className = 'error active';
}

function pwdErrorHandler() {
    if (password.validity.valueMissing) pwdError.textContent = 'You need to enter a password.';
    else if (password.value !== confirmPwd.value) pwdError.textContent = 'Passwords do not match.';

    pwdError.className = 'error active';
}