import playList from './playList.js';

const audio = document.querySelector('audio');
const play = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

let isPlay = false;
let playNum = 0;

playList.forEach(el => {
  // здесь ваш код
  let li = document.createElement('li');
  li.textContent = el.title;
  li.classList.add('play-item');
  if (li.textContent === playList[playNum].title) {
    li.classList.add('item-active');
  } else {
    li.classList.remove('item-active');
  }
  playListContainer.appendChild(li);
});

function playAudio() {
  if (!isPlay) {
    audio.currentTime = 0;
    
    audio.src = playList[playNum].src;
    
    audio.play();
    isPlay = true;
    play.classList.add('pause');
    play.classList.remove('play');

    playListContainer.childNodes[playNum].classList.add('item-active');
    //playListContainer.childNodes[playNum - 1].classList.remove('item-active');
  } else {
    audio.pause();
    isPlay = false;
    play.classList.add('play');
    play.classList.remove('pause');
  }
}

play.addEventListener('click', () => {
  playAudio();
});

const playNext = () => {
  if (playNum === (playList.length - 1)) {
    playListContainer.childNodes[playNum].classList.remove('item-active');
    playNum = -1;
  } else {
    playListContainer.childNodes[playNum].classList.remove('item-active');
  }
  playNum++;
  isPlay = false;
  playAudio();
};

const playPrev = () => {
  if (playNum === 0) {
    playListContainer.childNodes[playNum].classList.remove('item-active');
    playNum = playList.length;
  } else {
    playListContainer.childNodes[playNum].classList.remove('item-active');
  }
  playNum--;
  isPlay = false;
  playAudio();
};

playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);

audio.addEventListener('ended', playNext);

