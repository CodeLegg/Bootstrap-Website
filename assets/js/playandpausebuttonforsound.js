const audio1 = new Audio("assets/sounds/sound-1.mp3");
const audio2 = new Audio("");
const audio3 = new Audio("");

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
    audio1.pause();
  } else {
    audio1.play();
  }
  isPlayingSound1 = !isPlayingSound1;
  updatePlayPauseIcon(playPauseIconSound1, isPlayingSound1);
});

playButtonSound2.addEventListener("click", function () {
  if (isPlayingSound2) {
    audio2.pause();
  } else {
    audio2.play();
  }
  isPlayingSound2 = !isPlayingSound2;
  updatePlayPauseIcon(playPauseIconSound2, isPlayingSound2);
});

playButtonSound3.addEventListener("click", function () {
  if (isPlayingSound3) {
    audio3.pause();
  } else {
    audio3.play();
  }
  isPlayingSound3 = !isPlayingSound3;
  updatePlayPauseIcon(playPauseIconSound3, isPlayingSound3);
});

function updatePlayPauseIcon(iconElement, isPlaying) {
  if (isPlaying) {
    iconElement.classList.remove("fa-play-circle");
    iconElement.classList.add("fa-pause-circle");
  } else {
    iconElement.classList.remove("fa-pause-circle");
    iconElement.classList.add("fa-play-circle");
  }
}

audio1.addEventListener("ended", function () {
  isPlayingSound1 = false;
  updatePlayPauseIcon(playPauseIconSound1, isPlayingSound1);
});

audio2.addEventListener("ended", function () {
  isPlayingSound2 = false;
  updatePlayPauseIcon(playPauseIconSound2, isPlayingSound2);
});

audio3.addEventListener("ended", function () {
  isPlayingSound3 = false;
  updatePlayPauseIcon(playPauseIconSound3, isPlayingSound3);
});
