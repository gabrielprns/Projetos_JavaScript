//Adicionando Elementos
const números = [1,2,3];

//Início
números.unshift(0);
alert(números);

//Meio
números.splice(3,2,"b");
alert(números);

//Final
números.push(5);
alert(números);
