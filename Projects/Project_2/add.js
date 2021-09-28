//Adicionando Elementos a lista
const números = [1,2,3];

//Início
números.unshift(0);
alert(números);

//Meio
números.splice(4,2,"b");
alert(números);

//Final
números.push(5);
alert(números);
