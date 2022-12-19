//anythings cars's variables
let speedCar = [7,5,6,4,8];
let lengthCars = 50;
let heightCars = 40;

//posiction actors
let xCar = [600,400,150,0,227];
let yCow = 368;


function showCow(){
    image(cow, 100, yCow, 30, 30);
  }
  
  function showCars(){
    image(car1, xCar[0], 40, lengthCars, heightCars);
    image(car2, xCar[1], 210, lengthCars, heightCars);
    image(car3, xCar[2], 320, lengthCars, heightCars);
    image(car4, xCar[3], 95, lengthCars, heightCars);
    image(car5, xCar[4], 150, lengthCars, heightCars);
  }
  
  function moveCars(){
    xCar[0] -= speedCar[0];
    xCar[1] -= speedCar[1];
    xCar[2] -= speedCar[2];
    xCar[3] -= speedCar[3];
    xCar[4] -= speedCar[4];

    if(xCar[0] < -40){
        xCar[0] = width;
    }
    if(xCar[1] < -40){
        xCar[1] = width;
    }
    if(xCar[2] < -40){
        xCar[2] = width;
    }
    if(xCar[3] < -40){
      xCar[3] = width;
    }
    if(xCar[4] < -40){
    xCar[4] = width;
    }
  }
  
  function moveCow(){
    if (keyIsDown(UP_ARROW)){
      yCow -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      yCow += 3;
    }
  }

  function punctuation(){
    text(score, 50, 25);
    textSize(25);
    fill(255);
    if(yCow < 0){
        score += 1;
        yCow = 368;
    }
  }
