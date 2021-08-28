// const select = document.querySelector.bind(document);
// const selectAll = document.querySelectorAll.bind(document);

/** 
 * =================================================================
 */

// Body block after load
// var bodyBlock = select('.body-block');

// When click on sign up
var btnSignUp = select('#sign-up');
btnSignUp.onclick = function (event) {
    event.preventDefault();
    $('.body-block').fadeOut('slow', function () {
        bodyBlock.innerText = '';
        bodyBlock.style.display = 'block';
        $('.body-block').load('./block/sign-up.html', function () {
            $('.body-block').fadeIn('slow');
        });
    })
}