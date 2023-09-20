const form = document.querySelector('form');
const firstName = document.getElementById('fname');
const fNameError = document.querySelector('#fname + span.error');
const lastName = document.getElementById('lname');
const lNameError = document.querySelector('#lname + span.error');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const phone = document.getElementById('phone-num');
const phoneError = document.querySelector('#phone-num + span.error');
const password = document.getElementById('pwd');
const pwdError = document.querySelector('#pwd + span.error');
const confirmPwd = document.getElementById('confirm-pwd');

firstName.addEventListener('input', () => validationHandler(firstName, fNameError, fNameErrorHandler()));

lastName.addEventListener('input', () => validationHandler(lastName, lNameError, lNameErrorHandler()));

email.addEventListener('input', () => validationHandler(email, emailError, emailErrorHandler()));

phone.addEventListener('input', () => validationHandler(phone, phoneError, phoneErrorHandler()));

password.addEventListener('input', () => validationHandler(password, pwdError, pwdErrorHandler()));

confirmPwd.addEventListener('input', () => validationHandler(confirmPwd, pwdError, pwdErrorHandler()));

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
        case !phone.validity.valid:
            phoneErrorHandler();
            event.preventDefault();
            break;
        case !password.validity.valid:
        case password.value !== confirmPwd.value:
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
    else if (firstName.validity.patternMismatch) fNameError.textContent = 'You need to use uppercase and lowercase characters, which can be seperated by a hyphen or a space.'

    errorActive(firstName, fNameError);
}

function lNameErrorHandler() {
    if (lastName.validity.valueMissing) lNameError.textContent = 'You need to enter your last name.';
    else if (lastName.validity.patternMismatch) lNameError.textContent = 'You need to use uppercase and lowercase characters which can be seperated by a hyphen or a space.'

    errorActive(lastName, lNameError);
}

function emailErrorHandler() {
    if (email.validity.valueMissing) emailError.textContent = 'You need to enter an email address.';
    else if (email.validity.patternMismatch) emailError.textContent = 'You need to enter a valid email address.';

    errorActive(email, emailError);
}

function phoneErrorHandler() {
    if (phone.validity.valueMissing) phoneError.textContent = 'You need to enter a phone number';
    else if (phone.validity.patternMismatch) phoneError.textContent = 'Your phone number must contain numbers which can be separated by a hyphen or a space.';

    errorActive(phone, phoneError);
}

function pwdErrorHandler() {
    if (password.validity.valueMissing) {
        pwdError.textContent = 'You need to enter a password.';

        errorActive(password, pwdError);
    }
    else if (password.validity.patternMismatch) {
        pwdError.textContent = 'You passwords must contain at least a number, an uppercase and a lowercase character.';

        errorActive(password, pwdError);
    }
    else if (password.value !== confirmPwd.value) {
        pwdError.textContent = 'Passwords do not match.';

        errorActive(password, pwdError);
        errorActive(confirmPwd, pwdError);
    }
}