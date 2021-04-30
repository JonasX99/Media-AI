function setup() {
    createCanvas(320, 240);
    setupAI();

  }

function draw(){
    setupAIDraw();
    //console.log(label)
    if(label == "Play"){
        document.getElementById("sound").play();
    }else if (label == "Pause"){
        document.getElementById("sound").pause();
    }
  }