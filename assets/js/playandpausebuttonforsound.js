// Define the audio elements
const audio1 = document.getElementById("audio-sound1");
const audio2 = document.getElementById("audio-sound2");
const audio3 = document.getElementById("audio-sound3");

// Define the play buttons and their corresponding icons
const playButton1 = document.getElementById("play-button-sound1");
const playPauseIcon1 = document.getElementById("play-pause-icon-sound1");

const playButton2 = document.getElementById("play-button-sound2");
const playPauseIcon2 = document.getElementById("play-pause-icon-sound2");

const playButton3 = document.getElementById("play-button-sound3");
const playPauseIcon3 = document.getElementById("play-pause-icon-sound3");

// Initialize play status for each audio
let isPlaying1 = false;
let isPlaying2 = false;
let isPlaying3 = false;

// Function to toggle play/pause
function togglePlay(audio, playPauseIcon) {
  if (audio.paused) {
    audio.play();
    playPauseIcon.classList.remove("fa-circle-play");
    playPauseIcon.classList.add("fa-circle-pause"); // Corrected class names
  } else {
    audio.pause();
    playPauseIcon.classList.remove("fa-circle-pause"); // Corrected class names
    playPauseIcon.classList.add("fa-circle-play");
  }
}

// Add click event listeners for each play button
playButton1.addEventListener("click", function () {
  togglePlay(audio1, playPauseIcon1);
  isPlaying1 = !isPlaying1;
});

playButton2.addEventListener("click", function () {
  togglePlay(audio2, playPauseIcon2);
  isPlaying2 = !isPlaying2;
});

playButton3.addEventListener("click", function () {
  togglePlay(audio3, playPauseIcon3);
  isPlaying3 = !isPlaying3;
});

// Add event listeners to handle audio ending for each sound
audio1.addEventListener("ended", function () {
  playPauseIcon1.classList.remove("fa-circle-pause");
  playPauseIcon1.classList.add("fa-circle-play");
  isPlaying1 = false;
});

audio2.addEventListener("ended", function () {
  playPauseIcon2.classList.remove("fa-circle-pause");
  playPauseIcon2.classList.add("fa-circle-play");
  isPlaying2 = false;
});

audio3.addEventListener("ended", function () {
  playPauseIcon3.classList.remove("fa-circle-pause");
  playPauseIcon3.classList.add("fa-circle-play");
  isPlaying3 = false;
});
