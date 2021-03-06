// const select = document.querySelector.bind(document);
// const selectAll = document.querySelectorAll.bind(document);

/** 
 * =================================================================
 */

// Body block after load
// var bodyBlock = select('.body-block');

// Script validate sign-up
let scriptValidateSignUp = `
    <script>
        Validate({
            rules: [
                Validate.isRequired('#username'),
                Validate.isRequired('#password'),
                Validate.isRequired('#re-password'),
                Validate.isRequired('#phone'),
                Validate.isRequired('#email'),
                Validate.isEmail('#email'),
            ]
        });
    </script>
    `

// When click on sign up
var btnSignUp = select('#sign-up');
btnSignUp.onclick = function (event) {
    event.preventDefault();
    $('.body-block').fadeOut('slow', function () {
        bodyBlock.innerText = '';
        bodyBlock.style.display = 'block';
        $('.body-block').load('./block/sign-up.html', function () {
            $('.body-block').fadeIn(1000);
        });
    })
    setTimeout(() => {
        $('body.main').append(scriptValidateSignUp);
        scriptValidateSignUp = ``;
    }, 1000);
}

// Handle event when click login
let btnLogIn = select('#btn-login');
let userField = select('#username');
btnLogIn.onclick = function (event) {
    event.preventDefault();
    // Wait if user not fill all the fields
    let validStatus = select('.invalid');
    if (validStatus != null || userField.value == '') {
        alert('You must do all the field');
    } else {
        alert('Login success!');
    }
}