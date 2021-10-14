// Name of sign-up button is still login button

// Handle event when click login
let btnLogIn = select('#btn-login');
let userField = select('#username');
btnLogIn.onclick = function (event) {
    event.preventDefault();
    // Wait if user not fill all the fields
    let validStatus = select('.invalid');
    if (validStatus != null || userField.value == '') {
        alert('You must finish all the field');
    } else {
        alert('Regist success! Please enjoy your music');
    }
}