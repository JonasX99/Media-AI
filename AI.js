//turn AI ON OFF Button
let AIOnOff = false;

let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/KQf-sV4KB/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}
//test

function setupAI() {
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}


function setupAIDraw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  /*
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);*/
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();

}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  //console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}

function AIButton() {
  AIOnOff = !AIOnOff;
  console.log(AIOnOff)
  let button = document.getElementById("AIButton");
  let sound = document.getElementById("sound")
  if (button.value == "Turn AI on") {
    button.style.backgroundColor = "#c72810"

    button.value = "Turn AI off";
  }
  else {
    button.style.backgroundColor = "#4CAF50"

    button.value = "Turn AI on";
  }
  //The reason to pause in this function is to run pause only once
  if (AIOnOff == false) {
    document.getElementById("sound").pause();
    sound.style.border = "solid #1e1e1e"
  }
}

