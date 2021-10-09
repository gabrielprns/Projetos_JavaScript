const array = [70,90,80];

alert(mediaDoAluno(array));

function mediaDoAluno(notas){
  const media = calcularMedia(notas);

  if (media < 59) return "f" ;
  if (media < 69) return "d" ;
  if (media < 79) return "c" ;
  if (media < 89) return "b" ;

  return "A"
}

function calcularMedia(array) {
  let soma = 0;
  for (let valor of array){
    soma += valor;
  }
  return soma/(array.length);
}