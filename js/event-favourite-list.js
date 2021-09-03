let listName = select('#fav-list-name');
// When click on a list
listName.onclick = function (event) {
    event.preventDefault();
    $('.body-block').fadeOut('slow', function () {
        bodyBlock.style.display = 'block';
        bodyBlock.innerText = '';
        $('.body-block').load('./block/a-favourite.html', function () {
            $('.body-block').fadeIn(3000);
        });
    })
    // Load list song
    setTimeout(() => {
        let listSong = select('.list-song');
        listSong.innerHTML = html.join('');
    }, 1000);
}