function playSong() {
  document.getElementById("sound").play();
}
function pauseSong() {
  song.pause();
}

function AIPlayPause() {
  let sound = document.getElementById("sound")
  if (AIOnOff == false) {
  } else if (AIOnOff == true) {
    if (label == "Play") {
      sound.style.border = "solid #4CAF50"
      document.getElementById("sound").play();
    } else if (label == "Pause") {
      sound.style.border = "solid #c72810"
      document.getElementById("sound").pause();
    }
  }
}

