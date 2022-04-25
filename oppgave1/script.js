let button = document.getElementsByTagName("button")[0];
let video = document.getElementsByTagName("video")[0];
let playing = false;

button.addEventListener("click", playPause);

function playPause() {
    console.log("ran")
    if (!playing) {
        video.play();
        button.innerHTML = "pause";
        playing = true;
    } else {
        video.pause();
        button.innerHTML = "play";
        playing = false;
    }
}