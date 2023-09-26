const nome = "Elleylson";
const sobrenome = "Santtos";
const idade = 24;
const peso = 75;
const altura = 1.79;

let imc = peso / altura ** 2;
let anoNascimento = 2023 - idade;

console.log(
  `
    ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kilos tem ${altura} de altura seu IMC é de 
    ${imc.toFixed(2)}, 
    ${nome} ${sobrenome} nasceu em ${anoNascimento}
  `
);
