let listName = select('#fav-list-name');
let btnManage = select('#btn-manage-list');
let iconFavDel = selectAll('.fav-icon-del');
let addElement = select('.add-element');
let linkWishList = select('#link-wish-list');

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

// When click on button manage
btnManage.onclick = function () {
    // display delete button
    for (let i = 0; i < iconFavDel.length; i++) {
        iconFavDel[i].style.display = 'block';
    }
    // Change button function
    setTimeout(() => {
        btnManage.value = 'Save';
    }, 1000/1000);
    addElement.style.display = 'block';
    // Reload favourite list after saved
    if (btnManage.value == 'Save') {
        $('.body-block').fadeOut('slow', function () {
            bodyBlock.style.display = 'block';
            bodyBlock.innerText = '';
            $('.body-block').load('./block/favourite-list.html', function () {
                $('.body-block').fadeIn(3000);
            });
        })
    } else {
    }
}

// When click on go wish list
linkWishList.onclick = function (event) {
    event.preventDefault();
    loadBlock(mainBlock, './block/wish-list.html');
}