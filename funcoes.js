//algumas das variaveis dos carros
let velocidadeCarro1 = 7;
let velocidadeCarro2 = 5;
let velocidadeCarro3 = 6;
let velocidadeCarro4 = 4;
let velocidadeCarro5 = 8;
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraVaca(){
    image(vaca, 100, yVaca, 30, 30);
  }
  
  function mostraCarros(){
    image(carro1, xCarro1, 40, comprimentoCarros, alturaCarros);
    image(carro2, xCarro2, 210, comprimentoCarros, alturaCarros);
    image(carro3, xCarro3, 320, comprimentoCarros, alturaCarros);
    image(carro4, xCarro4, 95, comprimentoCarros, alturaCarros);
    image(carro5, xCarro5, 150, comprimentoCarros, alturaCarros);
  }
  
  function movimentaCarros(){
    xCarro1 -= velocidadeCarro1;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
    xCarro4 -= velocidadeCarro4;
    xCarro5 -= velocidadeCarro5;

    if(xCarro1 < -40){
        xCarro1 = width;
    }
    if(xCarro2 < -40){
        xCarro2 = width;
    }
    if(xCarro3 < -40){
        xCarro3 = width;
    }
    if(xCarro4 < -40){
      xCarro4 = width;
    }
    if(xCarro5 < -40){
    xCarro5 = width;
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
    text(pontuacao, 50, 25);
    textSize(25);
    fill(255);
    if(yVaca < 0){
        pontuacao += 1;
        yVaca = 368;
    }
  }


