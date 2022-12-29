//anythings cars's variables
let speedCar = [7,5,6,4,8,5];
let lengthCars = 50;
let heightCars = 40;
let level3 = false;

//posiction actors
let xCar = [600,400,150,0,227,500];
let yCar = [40,95,150,210,260,320];
let yCow = 368;
let xCow = 100;
let widthCow = 30;
let heightCow = widthCow;
let initialPositionCow = 368;
let cowOnScreen = true;
let speedCow = 3;

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
    if(level3 == true){
      for(let i = -1; i < cars.length; i = i + 2){
        xCar[i] += (speedCar[i]*2)// if it was *1 the movement would be canceled
      }
    }
  }

  function repositionCars(){
    for(let i = 0; i < cars.length ; i++){//movement of cars in loop
      if(xCar[i] < -lengthCars){
          xCar[i] = width;
      }
    }
    if(level3 == true){
      for(let i = -1; i < cars.length; i = i + 2){
        if(xCar[i] > width + lengthCars){ // the contrary repositioning of the cars
          xCar[i] = -lengthCars;//so the car doesn't come out of nowhere
        }
      }
    }    
  }
  
  function moveCow(){
    if (keyIsDown(UP_ARROW)){
      yCow -= speedCow;
    }
    if (keyIsDown(DOWN_ARROW)){
      if(yCow > 360){
        yCow = 368//The use this function is only for down because if the cow will go for up, the player win one point
      }
      yCow += speedCow;
    }

    if(level3 == true){
      if (keyIsDown(RIGHT_ARROW)){
        xCow += speedCow;
        if(xCow + widthCow > 600){
          xCow = 570
        }
      }
      if (keyIsDown(LEFT_ARROW)){
        xCow -= speedCow;
        if(xCow < 0){
          xCow = 0;
        }
      }
    }
  }

  function punctuation(){
    text(score, 50, 26);
    textSize(25);
    fill(255);
    if(yCow < 0){
        score += 1;
        yCow = initialPositionCow;
        dotSound.play();
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
      collisionSound.play();
      }
    }
  }

  function nivel1(){
    speedCar = [3,5,2,5,4,3];
    score = 0;
    level3 = false;
    xCow = 100;
  }

  function nivel2(){
    speedCar = [7,5,6,7,8,5];
    score = 0;
    level3 = false;
    xCow = 100;
  }

  function nivel3(){
    speedCar = [7,5,6,7,8,5];
    speedCow = 2;
    score = 0;
    level3 = true;
    xCow = 280;
  }