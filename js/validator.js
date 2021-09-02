function Validate () {
    
}

// Check if all input is not null
Validate.isRequired = function (target) {
    // console.log(select(target));
    let getTarget = select(target);
    getTarget.onblur = function () {
        if (getTarget.value == '') {
            getTarget.style.border = '1px solid red';
        } else {
            getTarget.style.border = 'none';
        }
    }
}

// Check if email is correct form
Validate.isEmail = function (target) {
    
}