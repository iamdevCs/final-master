function Validate () {
    // Validate.hello = function () {
    //     console.log('hello');
    // }
    // Validate.hello();
}

// Check if all input is not null
Validate.isRequired = function (target) {
    // Warning if user not finished field yet
    let field = select(target);
    field.onblur = function () {
        if (field.value == '') {
            field.style.border = '1px solid red';
        } else {
            field.style.border = 'none';
        }
    }
    // Remove warning if user input
    field.oninput = function () {
        field.style.border = 'none';
    }
}

// Check if email is correct form
Validate.isEmail = function (target) {
    let emailField = select(target);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailField.onblur = function () {
        let emailInputValue = emailField.value;
        if(re.test(emailInputValue) == false) {
            emailField.style.border = '1px solid red';
        }
    }
}