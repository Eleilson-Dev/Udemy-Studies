const dateNow = document.querySelector(".date_now");

const date = new Date();

const getDayOfWeek = (diaAtual) => {
  const daysOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabádo",
  ];

  return daysOfWeek[diaAtual];
};

const getMonthOfYear = (mesAtual) => {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julio",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return meses[mesAtual];
};

const zeroAEsquerda = (num) => {
  return num < 10 ? `0${num}` : num;
};

const writeInformations = () => {
  dateNow.innerHTML = `
    ${getDayOfWeek(date.getDay())},
    ${date.getDate()}
    de ${getMonthOfYear(date.getMonth())}
    de ${date.getFullYear()} <br/>
    ${date.getHours()}:
    ${zeroAEsquerda(date.getMinutes())}
  `;
};

writeInformations();

// const dateNow = document.querySelector(".date_now");
// const date = new Date();

// dateNow.innerHTML = date.toLocaleString("pt-BR", {
//   dateStyle: "full",
//   timeStyle: "short",
// });
