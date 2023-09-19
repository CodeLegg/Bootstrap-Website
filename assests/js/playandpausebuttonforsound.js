const audioSound1 = new Audio("sound1.mp3");
const audioSound2 = new Audio("sound2.mp3");
const audioSound3 = new Audio("sound3.mp3");

const playButtonSound1 = document.getElementById("play-button-sound1");
const playButtonSound2 = document.getElementById("play-button-sound2");
const playButtonSound3 = document.getElementById("play-button-sound3");

const playPauseIconSound1 = document.getElementById("play-pause-icon-sound1");
const playPauseIconSound2 = document.getElementById("play-pause-icon-sound2");
const playPauseIconSound3 = document.getElementById("play-pause-icon-sound3");

let isPlayingSound1 = false;
let isPlayingSound2 = false;
let isPlayingSound3 = false;

playButtonSound1.addEventListener("click", function () {
  if (isPlayingSound1) {
    audioSound1.pause();
    playPauseIconSound1.classList.remove("fa-pause");
    playPauseIconSound1.classList.add("fa-play");
  } else {
    audioSound1.play();
    playPauseIconSound1.classList.remove("fa-play");
    playPauseIconSound1.classList.add("fa-pause");
  }
  isPlayingSound1 = !isPlayingSound1;
});

playButtonSound2.addEventListener("click", function () {
  if (isPlayingSound2) {
    audioSound2.pause();
    playPauseIconSound2.classList.remove("fa-pause");
    playPauseIconSound2.classList.add("fa-play");
  } else {
    audioSound2.play();
    playPauseIconSound2.classList.remove("fa-play");
    playPauseIconSound2.classList.add("fa-pause");
  }
  isPlayingSound2 = !isPlayingSound2;
});

playButtonSound3.addEventListener("click", function () {
  if (isPlayingSound3) {
    audioSound3.pause();
    playPauseIconSound3.classList.remove("fa-pause");
    playPauseIconSound3.classList.add("fa-play");
  } else {
    audioSound3.play();
    playPauseIconSound3.classList.remove("fa-play");
    playPauseIconSound3.classList.add("fa-pause");
  }
  isPlayingSound3 = !isPlayingSound3;
});

// Add event listeners to handle audio ending for each sound
audioSound1.addEventListener("ended", function () {
  playPauseIconSound1.classList.remove("fa-pause");
  playPauseIconSound1.classList.add("fa-play");
  isPlayingSound1 = false;
});

audioSound2.addEventListener("ended", function () {
  playPauseIconSound2.classList.remove("fa-pause");
  playPauseIconSound2.classList.add("fa-play");
  isPlayingSound2 = false;
});

audioSound3.addEventListener("ended", function () {
  playPauseIconSound3.classList.remove("fa-pause");
  playPauseIconSound3.classList.add("fa-play");
  isPlayingSound3 = false;
});
