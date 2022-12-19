//anythings cars's variables
let speedCar = [7,5,6,4,8];
let lengthCars = 50;
let heightCars = 40;

//posiction actors
let xCar = [600,400,150,0,227];
let yCar = [40,210,320,95,150];
let yCow = 368;
let xCow = 100;
let initialPositionCow = 368;


function showCow(){
    image(cow, xCow, yCow, 30, 30);
  }
  
  function showCars(){
    for(let i = 0; i < cars.length ; i++){
      image(cars[i], xCar[i], yCar[i], lengthCars, heightCars);
    }
  }
  
  function moveCars(){
    for(let i = 0; i < cars.length ; i++){  //movement of cars
      xCar[i] -= speedCar[i];
    }

    for(let i = 0; i < cars.length ; i++){
      if(xCar[i] < -lengthCars){
          xCar[i] = width;
      }
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
        yCow = initialPositionCow;
    }
  }

  function carCollision(){
    if(xCow == xCar[0] && yCow == yCar[0]){
      yCow = initialPositionCow;
    }
  }
