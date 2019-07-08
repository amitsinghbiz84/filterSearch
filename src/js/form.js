"use strict";
const submitButton = document.querySelector('.form__btn'),
    firstNameRegex = "^[a-zA-Z\\s]*$",
    lastNameRegex  = "^[a-zA-Z\\s]*$",
    phoneRegex     = /^[0-9]{10}$/,
    emailRegex     = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/,
    passwordRegex  = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";

const init = () => {
    // document.getElementById('form__btn').addEventListener("click", formSubmit);
    document.querySelector("#form").addEventListener("keyup", validateForm);
}

const firstVal = () => {
    let firstName = document.getElementById('firstname').value;
    if(firstName.length == 0) {
        producePrompt('First name is required', 'nameError' , 'red')
        return false;    
      }    
      if (!firstName.match(firstNameRegex)) {    
        producePrompt('Text only','nameError', 'red');
        return false;    
      }    
      producePrompt('Valid', 'nameError', 'green');
      return true;
}

const lastVal = () => {
    let lastName = document.getElementById('lastname').value;
    if(lastName.length == 0) {
        producePrompt('Last Name is required', 'lastError' , 'red')
        return false;   
    }
    if (!lastName.match(lastNameRegex)) {
        producePrompt('Text Only','lastError', 'red');
        return false;    
    }
    producePrompt('Valid', 'lastError', 'green');
    return true;
}

const phoneVal = () => {
    let phone = document.getElementById('phone').value;
    if (phone.length == 0) {
        producePrompt('Phone number is required.', 'phoneError', 'red');
        return false;
    }
    if (phone.length != 10) {
        producePrompt('Include area code.', 'phoneError', 'red');
        return false;
    }
    if (!phone.match(phoneRegex)) {
        producePrompt('Only digits, please.', 'phoneError', 'red');
        return false;
    }
    producePrompt('Valid', 'phoneError', 'green');
    return true;
}

const emailVal = () => {
    let email = document.getElementById('email').value;
    if (email.length == 0) {
        producePrompt('Email invalid', 'emailError', 'red');
        return false;
    }
    if(!email.match(emailRegex)) {
        producePrompt('Email invalid', 'emailError', 'red');
        return false;
    }
    producePrompt('Valid', 'emailError', 'green');
    return true;
}

const passwordVal = () => {
    let passowrd = document.getElementById('password').value;
    if (password.length == 0) {
        producePrompt('Password invalid', 'passwordError', 'red');
        return false;
    }
    if (!passowrd.match(passwordRegex)) {
        producePrompt('Password invalid', 'passwordError', 'red');
        return false;
    }
    producePrompt('Valid', 'passwordError', 'green');
    return true;
}

const validateForm = () => {    
    if (!firstVal() || !lastVal() || !phoneVal() || !emailVal() || !passwordVal()) {
       submitButton.disabled = true;        
       return false;
    }else {
        submitButton.disabled = false;
        return true;
    }
}

const producePrompt = (message, promptLocation, color) => {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}

const formSubmit = () => {
    //console.log('a');
}

init();