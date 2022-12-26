//anythings cars's variables
let speedCar = [7,5,6,4,8,5];
let lengthCars = 50;
let heightCars = 40;

//posiction actors
let xCar = [600,400,150,0,227,500];
let yCar = [40,210,320,95,150,260];
let yCow = 368;
let xCow = 100;
let widthCow = 30;
let heightCow = widthCow;
let initialPositionCow = 368;
let cowOnScreen = true;


function showCow(){
    image(cow, xCow, yCow, heightCow, widthCow);
  }
  
  function showCars(){
    for(let i = 0; i < cars.length ; i++){
      image(car1, xCar[0], yCar[0], lengthCars, heightCars);
      image(car2, xCar[1], yCar[1], lengthCars, heightCars);
      image(car3, xCar[2], yCar[2], lengthCars, heightCars);
      image(car4, xCar[3], yCar[3], lengthCars, heightCars);
      image(car5, xCar[4], yCar[4], lengthCars, heightCars);
      image(car6, xCar[5], yCar[5], lengthCars, heightCars);
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
      if(yCow > 360){
        cowOnScreen = false;
        keepsCowOnTheScreen()
      }
      yCow += 3;
    }
  }

  function punctuation(){
    text(score, 50, 26);
    textSize(25);
    fill(255);
    if(yCow < 0){
        score += 1;
        yCow = initialPositionCow;
    }
    if(score < 0){//so there is no negative score
      score = 0;
    }
  }

  function carCollision() {//when the car collide with cow, it returns at initial position
    for (let i = 0; i < cars.length; i += 1) {
  
      if (yCow < yCar[i] + heightCars && 
        xCow + widthCow > xCar[i] &&
        xCow < xCar[i] + heightCars &&
        yCow + heightCow > yCar[i]) {
  
      yCow = initialPositionCow;
      score -= 1;
  
      }
    }
  }

  function keepsCowOnTheScreen(){
    if(cowOnScreen == false){
      yCow = 368;
    }
  }
