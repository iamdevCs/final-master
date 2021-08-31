let cpSong = selectAll('.CP');
let pnnSong = selectAll('.PNN');
// let trending = select('.trending');
let authorSong = selectAll('.author-song');

// CP song prevent default
for (i = 0; i < cpSong.length; ++i) {
    cpSong[i].onclick = function (event) {
        event.preventDefault();
    }
}

// PNN song prevent default
for (i = 0; i < pnnSong.length; ++i) {
    pnnSong[i].onclick = function (event) {
        event.preventDefault();
    }
}

// Author song prevent default
for (i = 0; i < authorSong.length; ++i) {
    authorSong[i].onclick = function (event) {
        event.preventDefault();
    }
}

// trending.onclick = function (event) {
//     event.preventDefault();
// }