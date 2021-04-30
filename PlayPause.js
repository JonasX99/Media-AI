


function playSong() {
  document.getElementById("sound").play();
}
function pauseSong() {
  song.pause();
}

function AIPlayPause(){
  if(AIOnOff == false){

  }else if(AIOnOff == true){
    if(label == "Play")
    {
      document.getElementById("sound").play();
    }
    else if (label == "Pause"){
      document.getElementById("sound").pause();
    }
  }

}

