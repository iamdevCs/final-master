let btnEdit = select('.btn-info');

// When click on edit profile
btnEdit.onclick = function (event) {
    event.preventDefault();
    loadBlock(mainBlock, './block/edit-profile.html');
}