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

function FaixaPreço(tooltip, mínimo, máximo){
  this.tooltip = tooltip,
  this.mínimo = mínimo,
  this.máximo = máximo
}

let faixas3 = [
  new FaixaPreço("d",10,20),
  new FaixaPreço("e",10,30),
  new FaixaPreço("f",30,40)
]

console.log(faixas);
console.log(faixas2);
console.log(faixas3);
