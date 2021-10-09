let endereço = {
  rua: "a",
  cidade: "b",
  cep: "c",

};

function exibirEndereço(endereço){
  for(let chave in endereço)
    alert(chave, endereço[chave]);
}

//exibirEndereço(endereço);