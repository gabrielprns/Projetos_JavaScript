const array = [95,32,80];

alert(mediaDoAluno(array));

function mediaDoAluno(notas){
  const media = calcularMedia(notas);

  if (media < 59) return "F" ;
  if (media < 69) return "D" ;
  if (media < 79) return "C" ;
  if (media < 89) return "B" ;

  return "A"
}

function calcularMedia(array) {
  let soma = 0;
  for (let valor of array){
    soma += valor;
  }
  return soma/(array.length);
}