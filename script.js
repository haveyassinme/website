var fields = {};
let form = document.getElementById('form');;
document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
});

let cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = (e.pageX - 32) + 'px';
    cursor.style.top = (e.pageY - 32) + 'px';
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }
   
    return isFieldValid;
}

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);
   
    return valid;
 }

class Contact {
    constructor(firstName, lastName, email, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.message = message;
    }
}

function sendContact(event) {
    event.preventDefault();
    if (isValid()) {
        let c = new Contact(firstName.value, lastName.value, email.value, message.value);
        alert(`Hey, ${c.firstName}, thanks for reaching out! I'll get back to you soon.`);
    } else {
        alert('Oops, looks like there was a problem getting your contact info. Try again?')
    }
}

const submit = document.getElementById('submit');
// form.addEventListener('submit', sendContact);
