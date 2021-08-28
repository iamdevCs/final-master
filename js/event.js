// Variable reuse
const select = document.querySelector.bind(document);
const selectAll = document.querySelectorAll.bind(document);
let bodyBlock = select('.body-block');
let audio = select('audio');
// let currentSongIndex = 3;
let isPlaying = false;
let btnPlayPause = select('#btn-play-pause');
let btnPlay = select('#btn-play-img');
let btnPause = select('#btn-pause-img');
let cdOnPlaying = select('#cd');

/** Navbar event
 * =================================================================
 */
// When click on join
// Handle event click
let btnJoin = select('#join');
btnJoin.onclick = function (event) {
    event.preventDefault();
    $('.body-block').fadeOut('slow', function () {
        bodyBlock.style.display = 'block';
        bodyBlock.innerText = '';
        $('.body-block').load('./block/sign-in.html', function () {
            $('.body-block').fadeIn(3000);
        });
    })
}

// When click on My List - load list default music
// List default music
const song = [
    {
        title: 'Hồng lâu mộng',
        author: 'MC ILL',
        image: './img/hlm.jpg',
        // background: '/img/hlm-background.jpg',
        song: './audio/hlm.mp3',
    },
    {
        title: 'Đi ngang ngày buồn',
        author: 'Vanh Vanh',
        image: './img/dnnb.jpg',
        // background: '/img/dnnb-background.jpg',
        song: '..../audio/dnnb.mp3',
    },
    {
        title: 'Sao em lại tắt máy',
        author: 'Phạm Nguyên Ngọc',
        image: './img/seltm.jpg',
        // background: '/img/seltm-background.jpg',
        song: './audio/seltm.mp3',
    },
    {
        title: 'Cheating on you',
        author: 'Charlie Puth',
        image: './img/coy-author.jpg',
        // background: '/img/seltm-background.jpg',
        song: './audio/coy.mp3',
    },
    {
        title: 'Attention',
        author: 'Charlie Puth',
        image: './img/attention.jpg',
        // background: '/img/seltm-background.jpg',
        song: './audio/attention.mp3',
    },
    {
        title: 'How long',
        author: 'Charlie Puth',
        image: './img/hl.jpg',
        // background: '/img/seltm-background.jpg',
        song: './audio/hl.mp3',
    },
]

// Prepare list song to load
html = song.map(function (element, index) {
    return `<div class="song-item" onclick=render(${index})>
                <div class="cd">
                    <img id="cd-image" src="${element.image}" alt="">
                </div>
                <h4 id="song-name">${element.title}</h4>
                <div class="option">
                    <img id="btn-option" src="./img/option-icon.png" alt="">
                </div>
            </div>`
})

// Handle event click
let btnMyList = select('#mylist');
btnMyList.onclick = function (event) {
    event.preventDefault();
    $('.body-block').fadeOut('slow', function () {
        bodyBlock.style.display = 'block';
        bodyBlock.innerText = '';
        $('.body-block').load('./block/user-list.html', function () {
            $('.body-block').fadeIn(3000);
        });
    })
    // Load list song
    setTimeout(() => {
        let listSong = select('.list-song');
        listSong.innerHTML = html.join('');
    }, 1000);
}

/** Scroll section event
 * =================================================================
 */
let currSection = select('section');
let poi = currSection.getBoundingClientRect();
bodyBlock.onscroll = function () {
    poi = currSection.getBoundingClientRect();
    console.log(poi.top);
// console.log(poi.top);
}

/** Player button event
 * =================================================================
 */
// When click play or pause
btnPlayPause.onclick = function () {
    if (isPlaying == false) {
        isPlaying = !isPlaying;
        btnPlay.style.display = 'none';
        btnPause.style.display = 'block';
        audio.play();
    } else {
        isPlaying = !isPlaying;
        btnPlay.style.display = 'block';
        btnPause.style.display = 'none';
        audio.pause();
    }
}

// When click on a song, set that song on playing
function render(index) {
    cdOnPlaying.style.backgroundImage = `url('${song[index].image}')`;
    audio.src = `${song[index].song}`;
    if (isPlaying == true) {
        audio.play();
    }
}