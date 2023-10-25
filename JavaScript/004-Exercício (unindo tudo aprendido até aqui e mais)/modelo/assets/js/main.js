const btn = document.querySelector("#btn");
const result = document.querySelector(".result");
const p = result.querySelector("p");

const imcs = [
  { value: 18.5, status: "Abaixo do peso" },
  { value: 24.9, status: "Peso normal" },
  { value: 25, status: "Sobrepeso" },
  { value: 29.9, status: "Sobrepeso" },
  { value: 30, status: "Obesidade grau 1" },
  { value: 34.9, status: "Obesidade grau 1" },
  { value: 35, status: "Obesidade grau 2" },
  { value: 39.9, status: "Obesidade grau 2" },
  { value: 40, status: "Obesidade grau 3" },
];

const calcIMC = (myIMC) => {
  if (myIMC < imcs[0].value) {
    p.innerHTML = `Seu IMC é ${myIMC}(${imcs[0].status})`;
    p.style.background = "red";
  } else if (myIMC >= imcs[0].value && myIMC <= imcs[1].value) {
    p.innerHTML = `Seu IMC é ${myIMC}(${imcs[1].status})`;
    p.style.background = "rgb(64, 241, 132)";
  } else if (myIMC >= imcs[2].value && myIMC <= imcs[3].value) {
    p.innerHTML = `Seu IMC é ${myIMC}(${imcs[2].status})`;
    p.style.background = "rgb(247, 191, 34)";
  } else if (myIMC >= imcs[4].value && myIMC <= imcs[5].value) {
    p.innerHTML = `Seu IMC é ${myIMC}(${imcs[4].status})`;
    p.style.background = "red";
  } else if (myIMC >= imcs[6].value && myIMC <= imcs[7].value) {
    p.innerHTML = `Seu IMC é ${myIMC}(${imcs[6].status})`;
    p.style.background = "red";
  } else if (myIMC >= 40) {
    p.innerHTML = `Seu IMC é ${myIMC}(${imcs[8].status})`;
    p.style.background = "red";
  }
};

btn.addEventListener("click", () => {
  const peso = document.querySelector(".peso");
  const altura = document.querySelector(".altura");
  const myIMC = Number(peso.value) / (Number(altura.value) * 2);
  peso.value = "";
  altura.value = "";
  peso.focus();
  calcIMC(myIMC.toFixed(2));
  result.style.display = "block";
});
