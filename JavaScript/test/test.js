const nome = "Elleylson";
const sobrenome = "santtos";
const idade = 24;
const altura = 1.79;
const peso = 75;

let imc = peso / altura ** 2;
let anoNascimento = 2023 - idade;

console.log(
  `
    ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kilos tem ${altura} de altura, e seu IMC é de 
    ${imc.toFixed(2)},
    ${nome} ${sobrenome} nasceu em ${anoNascimento}
  `
);
