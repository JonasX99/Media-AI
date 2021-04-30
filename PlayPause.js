
var result = results[0]
var song = document.getElementById("sound");

function playSong() {
  song.play();
}
function pauseSong() {
  song.pause();
}

if (result == Play) {
  playSong()
} else {
  pauseSong()
}