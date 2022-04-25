button = document.getElementsByTagName("button")[0];
video = document.getElementsByTagName("video")[0];
playing = false;

button.addEventListener("click", playPause);

function playPause(){
    console.log("ran")
    if(playing == false){
        video.play();
        button.innerHTML = "pause";
        playing = true;
    } else {
        video.pause();
        button.innerHTML = "play";
        playing = false;
    }
}