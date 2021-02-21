let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");

const audio = new Audio('./sound/song.m4a');
icon.onclick = function(){
    if(audio.paused){
        audio.play();
        icon.src = "image/pause.svg";
    }else{
        audio.pause();
        icon.src = "image/play.svg";
    }
};
