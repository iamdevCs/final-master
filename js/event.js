// Variable reuse
const select = document.querySelector.bind(document);
const selectAll = document.querySelectorAll.bind(document);
let bodyBlock = select('.body-block');
// Navbar handler
let btnHome = select('#home');
let btnMyList = select('#mylist');
let btnAbout = select('#about');
let btnJoin = select('#join');
// Audio handler
let audio = select('audio');
let currentSongIndex = 3;
let isPlaying = false;
let btnPlayPause = select('#btn-play-pause');
let btnPlay = select('#btn-play-img');
let btnPause = select('#btn-pause-img');
let btnPrev = select('#btn-prev-img');
let btnNext = select('#btn-next-img');
let btnRepeat = select('#btn-repeat-img');
let btnRandom = select('#btn-random-img');
let cdOnPlaying = select('#cd');
let progressBar = select('.progress');
let isRepeat = false;
let isRandom = false;
let randomSongIndex = Math.floor(Math.random() * 10);
let btnVolume = select('.volume');
let volumeBar = select('.volume-bar-hiding');
let currentVolume = select('.volume-bar');
// Section index
let allSectionIndex = selectAll('.section-index');
// script validate
let scriptValidate = `<script>
        Validate({
            rules: [
                Validate.isRequired('#username'),
                Validate.isRequired('#password'),
            ]
        });
    </script>`;

/** Navbar event
 * =================================================================
 */
// When click on join
btnJoin.onclick = function (event) {
    event.preventDefault();
    $('.body-block').fadeOut('slow', function () {
        bodyBlock.innerText = '';
        bodyBlock.style.display = 'block';
        $('.body-block').load('./block/sign-in.html', function () {
            $('.body-block').fadeIn(1000);
        });
    })
    setTimeout(() => {
        $('body.main').append(scriptValidate);
        // scriptValidate = ``;
    }, 1000);
}

// When click on home
btnHome.onclick = function (event) {
    event.preventDefault();
    $('.body-block').fadeOut('slow', function () {
        bodyBlock.style.display = 'block';
        bodyBlock.innerText = '';
        $('.body-block').load('./block/home.html', function () {
            $('.body-block').fadeIn(3000);
        });
    })
}

// When click on My List - load list default music
// List default music
const song = [
    {
        title: 'Xa - Chờ đến mùa gió',
        author: 'Phạm Nguyên Ngọc',
        image: './img/cdmg-xa.jpg',
        // background: '/img/hlm-background.jpg',
        song: './audio/Cdmg-xa.mp3',
    },
    {
        title: '3107 3',
        author: 'Nâu',
        image: './img/31073.jpg',
        // background: '/img/hlm-background.jpg',
        song: './audio/31073.mp3',
    },
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
        song: './audio/dnnb.mp3',
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
// If user click on a section index
let sectionPoint = selectAll('.section-index');
sectionPoint[0].onclick = function () {
    sectionPoint[0].classList.add('isActive');
    sectionPoint[1].classList.remove('isActive');
    sectionPoint[2].classList.remove('isActive');
    sectionPoint[3].classList.remove('isActive');
}

sectionPoint[1].onclick = function () {
    sectionPoint[1].classList.add('isActive');
    sectionPoint[0].classList.remove('isActive');
    sectionPoint[2].classList.remove('isActive');
    sectionPoint[3].classList.remove('isActive');
}

sectionPoint[2].onclick = function () {
    sectionPoint[2].classList.add('isActive');
    sectionPoint[1].classList.remove('isActive');
    sectionPoint[0].classList.remove('isActive');
    sectionPoint[3].classList.remove('isActive');
}

sectionPoint[3].onclick = function () {
    sectionPoint[3].classList.add('isActive');
    sectionPoint[1].classList.remove('isActive');
    sectionPoint[2].classList.remove('isActive');
    sectionPoint[0].classList.remove('isActive');
}


/** Player button event
 * =================================================================
 */
// Make click effect
function clickEffect (button) {
    button.style.opacity = `50%`;
    setTimeout(function () {
        button.style.opacity = `100%`;
    }, 1000/4)
}

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
    clickEffect(btnPlayPause);
    cdRotate();
}

// When click next button
btnNext.onclick = function () {
    if (currentSongIndex + 1 == song.length) {
        currentSongIndex = 0;
    } else {
        currentSongIndex += 1;
    }
    render(currentSongIndex);
    clickEffect(btnNext);
}

// When click prev button
btnPrev.onclick = function () {
    if (currentSongIndex == 0) {
        currentSongIndex = song.length - 1;
    } else {
        currentSongIndex -= 1;
    }
    render(currentSongIndex);
    clickEffect(btnPrev);
}

// When click repeat button
btnRepeat.onclick = function () {
    isRepeat = !isRepeat;
    btnRepeat.classList.toggle('active', btnRepeat.isRepeat);
    clickEffect(btnRepeat);
}

// When click random button
btnRandom.onclick = function () {
    isRandom = !isRandom;
    btnRandom.classList.toggle('active', btnRandom.isRandom);
    clickEffect(btnRandom);
}

// When click on a song, set that song on playing
function render(index) {
    cdOnPlaying.style.backgroundImage = `url('${song[index].image}')`;
    audio.src = `${song[index].song}`;
    if (isPlaying == true) {
        audio.play();
    }
    currentSongIndex = index;
}

// Set progress up to the current time of the song if the song is onplaying
audio.ontimeupdate = function () {
    let progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
    progressBar.value = progressPercent;
    progressBar.style.backgroundSize = `${progressPercent}% 100%`;
}

// When user skip to a time
progressBar.onchange = function(event) {
    var skipTime = ((event.target.value)/100)*audio.duration;
    audio.currentTime = skipTime;
}

// Handle when a song ended
// If repeat, repeat song when ended, else
// If random, random song when enede, else next song instead of
audio.onended = function () {
    if (isRepeat) {
        audio.play();
    } else {
        if (isRandom) {
            while (randomSongIndex == currentSongIndex) {
                randomSongIndex = Math.floor(Math.random() * song.length);
            }
            currentSongIndex = randomSongIndex;
            render(currentSongIndex);
        } else {
            if (currentSongIndex + 1 == song.length) {
                currentSongIndex = 0;
            } else {
                currentSongIndex += 1;
            }
            render(currentSongIndex);
        }
    }
}

// Cd rotation
const cdThumbAnimate = cdOnPlaying.animate([
                { transform: 'rotate(360deg)'}
            ], {
                duration: 10000, //10 secs
                iterations: Infinity,
            })
cdThumbAnimate.pause();
function cdRotate () {
    if (isPlaying) {
        cdThumbAnimate.play();
    } else {
        cdThumbAnimate.pause();
    }
}

// Volume adjust appear
btnVolume.onclick = function () {
    volumeBar.style.display = 'block';
    btnVolume.style.display = 'none'
    setTimeout(() => {
        volumeBar.style.display = 'none';
        btnVolume.style.display = 'block';
    }, 5000)
}

// When user adjust volume
currentVolume.onchange = function () {
    audio.volume = currentVolume.value/100;
}