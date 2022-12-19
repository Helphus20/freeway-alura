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
  
  