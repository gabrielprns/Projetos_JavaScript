//Adicionando Elementos a lista
const números = [1,2,3];

//Início
números.unshift(0);
console.log(números);

//Meio
números.splice(4,2,"b");
console.log(números);

//Final
números.push(5);
console.log(números);
