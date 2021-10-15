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
            field.classList.add('invalid');
        } else {
            field.style.border = 'none';
            field.classList.remove('invalid');
        }
    }
    // Remove warning if user input
    field.oninput = function () {
        field.style.border = 'none';
        field.classList.remove('invalid');
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
            emailField.classList.add('invalid');
        }
    }
}

function searchRequire(searchBar, btnSearch) {
    let getSearchBar = select(searchBar);
    let getBtnSearch = select(btnSearch);
    getSearchBar.onblur = function () {
        console.log(getBtnSearch.value);
        if (getSearchBar.value == '') {
            getBtnSearch.style.display = 'none';
        } else {
            getBtnSearch.style.display = 'block';
        }
    }
    getSearchBar.oninput = function () {
        getBtnSearch.style.display = 'block';
    }
}