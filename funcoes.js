//algumas das variaveis dos carros
let velocidadeCarro = [7,5,6,4,8];
let comprimentoCarros = 50;
let alturaCarros = 40;

//posiçoes atores
let xCarro = [600,400,150,0,227];
let yVaca = 368;


function mostraVaca(){
    image(vaca, 100, yVaca, 30, 30);
  }
  
  function mostraCarros(){
    image(carro1, xCarro[0], 40, comprimentoCarros, alturaCarros);
    image(carro2, xCarro[1], 210, comprimentoCarros, alturaCarros);
    image(carro3, xCarro[2], 320, comprimentoCarros, alturaCarros);
    image(carro4, xCarro[3], 95, comprimentoCarros, alturaCarros);
    image(carro5, xCarro[4], 150, comprimentoCarros, alturaCarros);
  }
  
  function movimentaCarros(){
    xCarro[0] -= velocidadeCarro[0];
    xCarro[1] -= velocidadeCarro[1];
    xCarro[2] -= velocidadeCarro[2];
    xCarro[3] -= velocidadeCarro[3];
    xCarro[4] -= velocidadeCarro[4];

    if(xCarro[0] < -40){
        xCarro[0] = width;
    }
    if(xCarro[1] < -40){
        xCarro[1] = width;
    }
    if(xCarro[2] < -40){
        xCarro[2] = width;
    }
    if(xCarro[3] < -40){
      xCarro[3] = width;
    }
    if(xCarro[4] < -40){
    xCarro[4] = width;
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


