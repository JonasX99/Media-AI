  //turn AI ON OFF Button
  let AiOnOff = false;
  
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


  function setupAI(){
        // Create the video
        video = createCapture(VIDEO);
        video.size(320, 240);
        video.hide();
    
        flippedVideo = ml5.flipImage(video);
        // Start classifying
        classifyVideo();
  }


  function setupAIDraw(){
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);

    // Draw the label
    
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
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

  function AIButton(){
    //AiOnOff = !AiOnOff;
    let button = document.getElementById("AIButton");
    if(button.value=="Turn AI on")
    {
      button.value = "Turn AI off";
    }
    else
    {
      button.value = "Turn AI on";
    }
  }
 
  