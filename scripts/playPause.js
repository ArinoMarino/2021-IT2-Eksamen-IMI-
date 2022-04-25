let webPlayer = document.getElementById("webPlayer");
let playButton = document.getElementById("playButton");
let isPlaying = false;

function playPause() {
    if (isPlaying) {
        webPlayer.pause();
        playButton.innerHTML = "Play";
    } else {
        webPlayer.play();
        playButton.innerHTML = "Pause";
    }
}