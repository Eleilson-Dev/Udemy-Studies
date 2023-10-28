const form = document.querySelector(".form");
const result = document.querySelector(".result");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const p = result.querySelector("p");

const imcs = [
  { value: 18.5, status: "Abaixo do peso", color: "rgb(230, 19, 82)" },
  { value: 24.9, status: "Peso normal", color: "rgb(64, 241, 132)" },
  { value: 25, status: "Sobrepeso", color: "rgb(230, 146, 19)" },
  { value: 29.9, status: "Sobrepeso", color: "rgb(230, 146, 19)" },
  { value: 30, status: "Obesidade grau 1", color: "rgb(230, 19, 82)" },
  { value: 34.9, status: "Obesidade grau 1", color: "rgb(230, 19, 82)" },
  { value: 35, status: "Obesidade grau 2", color: "rgb(230, 19, 82)" },
  { value: 39.9, status: "Obesidade grau 2", color: "rgb(230, 19, 82)" },
  { value: 40, status: "Obesidade grau 3", color: "rgb(230, 19, 82)" },
];

const setColorAndText = (myIMC, status, color) => {
  p.innerHTML = `Seu IMC é ${myIMC.toFixed(2)}(${status})`;
  p.style.background = color;
};

const getImcStatus = (myIMC) => {
  for (const imc of imcs) {
    if (myIMC < imc.value) {
      return imc;
    }
  }
  return imcs[imcs.length - 1];
};

const calcIMC = (myIMC) => {
  const imcStatus = getImcStatus(myIMC);
  setColorAndText(myIMC, imcStatus.status, imcStatus.color);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const myIMC = Number(peso.value) / (Number(altura.value) * 2);
  calcIMC(myIMC);
  result.style.display = "block";
  peso.value = "";
  altura.value = "";
  peso.focus();
});
