function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(road);
    showCow();
    showCars();
    moveCars();
    moveCow();
    punctuation();
    carCollision();
  }
  
  