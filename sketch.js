//imagens atores
let estrada;
let vaca;
let carro1;
let carro2;
let carro3;

//posiçoes atores
let xCarro1 = 600;
let xCarro2 = 400;
let xCarro3 = 150;
let yVaca = 368;

let pontuacao = 0;

function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(estrada);
    mostraVaca();
    mostraCarros();
    movimentaCarros();
    movimentaAtor();
    pontos();
  }
  
  