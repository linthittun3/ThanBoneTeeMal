let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.src = "image/pause.svg";
    }else{
        mySong.pause();
        icon.src = "image/play.svg";
    }
}