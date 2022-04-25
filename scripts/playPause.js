let webPlayer = document.getElementById("webPlayer");
let playButton = document.getElementById("playButton");
let isPlaying = true;
playButton.addEventListener("click", playPause);
webPlayer.loop = true;

function playPause() {
    console.log("playPause");
    if (isPlaying) {
        webPlayer.pause();
        playButton.innerHTML = "Play";
        isPlaying = false;
    } else {
        webPlayer.play();
        playButton.innerHTML = "Pause";
        isPlaying = true;
    }
}