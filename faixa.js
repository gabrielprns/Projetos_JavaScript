let faixas = [
  {tooltip: "até R$700", min: 0, max: 700},
  {tooltip: "até R$700 a R$1000", min: 700, max: 1000},
  {tooltip: "R$1000 ou mais", min: 1000, max: 9999999}
];

function criaFaixaPreço(tooltip, mínimo, máximo){
  return{
    tooltip,
    mínimo,
    máximo
  }
}

let faixas2=[
  criaFaixaPreço('a',1,100),
  criaFaixaPreço('b',100,1000),
  criaFaixaPreço('c',1000,10000)
]