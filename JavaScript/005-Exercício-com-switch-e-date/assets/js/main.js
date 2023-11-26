const dateNow = document.querySelector(".date_now");

const date = new Date();

const day = date.getDay();
const dateDay = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hoursAndMinutes = `${date.getHours()}:${date.getMinutes()}`;
const outputInfomations = {
  getDay: day,
  getDateDay: dateDay,
  getMonth: month,
  getYear: year,
  getHoursAndMinutes: hoursAndMinutes,
};

const getDayOfWeek = () => {
  let dayOfWeek;

  switch (day) {
    case 0:
      dayOfWeek = "Domingo";
      break;
    case 1:
      dayOfWeek = "Segunda-feira";
      break;
    case 2:
      dayOfWeek = "Terça-feira";
      break;
    case 3:
      dayOfWeek = "Quarta-feira";
      break;
    case 4:
      dayOfWeek = "Quinta-feira";
      break;
    case 5:
      dayOfWeek = "Sexta-feira";
      break;
    case 6:
      dayOfWeek = "Sabádo";
      break;
  }

  outputInfomations.getDay = dayOfWeek;
};

getDayOfWeek();

const getMonthOfYear = () => {
  let monthOfYear;
  switch (month) {
    case 0:
      monthOfYear = "Janeiro";
      break;
    case 1:
      monthOfYear = "Fevereiro";
      break;
    case 2:
      monthOfYear = "Março";
      break;
    case 3:
      monthOfYear = "Abril";
      break;
    case 4:
      monthOfYear = "Maio";
      break;
    case 5:
      monthOfYear = "Junho";
      break;
    case 6:
      monthOfYear = "Julio";
      break;
    case 7:
      monthOfYear = "Agosto";
      break;
    case 8:
      monthOfYear = "Setembro";
      break;
    case 9:
      monthOfYear = "Outubro";
      break;
    case 10:
      monthOfYear = "Novembro";
      break;
    case 11:
      monthOfYear = "Dezembro";
      break;
  }

  outputInfomations.getMonth = monthOfYear;
};

getMonthOfYear();

const writeInformations = () => {
  dateNow.innerHTML = `
    ${outputInfomations.getDay}, 
    ${outputInfomations.getDateDay}
    de ${outputInfomations.getMonth} 
    de ${outputInfomations.getYear} 
    ${outputInfomations.getHoursAndMinutes}
  `;
};

writeInformations();
