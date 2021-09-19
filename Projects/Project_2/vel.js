verificarVelocidade(60);

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70;
  const kmPorPonto = 5;
  if (velocidade <=velocidadeMaxima)
    alert('ok');
  else {
    const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
    if(pontos>=12)
      alert("carteira suspensa");
    else
      alert("pontos", pontos);
  }

}