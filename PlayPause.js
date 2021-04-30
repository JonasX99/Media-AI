
var result = 'results[0]'
let Play;
let Pause;
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

console.log(result)