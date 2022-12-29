function setup() {
    createCanvas(600, 400);
    soundtrack.loop();
  }
  
  function draw() {
    background(road);
    showCow();
    showCars();
    moveCars();
    moveCow();
    punctuation();
    carCollision();
    repositionCars();
  }
  
  