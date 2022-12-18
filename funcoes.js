function mostraVaca(){
    image(vaca, 100, yVaca, 30, 30);
  }
  
  function mostraCarros(){
    image(carro1, xCarro1, 40, 50, 40);
    image(carro2, xCarro2, 210, 50, 40);
    image(carro3, xCarro3, 320, 50, 40);
  }
  
  function movimentaCarros(){
    xCarro1 -= 5;
    xCarro2 -= 5;
    xCarro3 -= 5;

    if(xCarro1 < -40){
        xCarro1 = 600;
    }
    if(xCarro2 < -40){
        xCarro2 = 600;
    }
    if(xCarro3 < -40){
        xCarro3 = 600;
    }
  }
  
  function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yVaca -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      yVaca += 3;
    }
  }

  function pontos(){
    if(yVaca < 0){
        pontuacao += 1;
        yVaca = 368;
    }
  }
