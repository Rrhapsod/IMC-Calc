import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateIMC, notANumber, Tabela } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')

// 1
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  // Fechar a janela de erro ao digitar no campo
  // evento é de nome input
  inputWeight.oninput = () => AlertError.close();
  inputHeight.oninput = () => AlertError.close();

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    inputWeight.value = "";
    inputHeight.value = "";
    return;
  }
  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
  form.reset();
};

// 2
// form.submit = function() {}

function displayResultMessage(result) {
  let categoria;
  if (result < 18.5) {
    categoria = Tabela.abaixo;
  } else if (result < 25) {
    categoria = Tabela.normal;
  } else if (result < 30) {
    categoria = Tabela.sobrepeso;
  } else if (result < 35) {
    categoria = Tabela.obesidade1;
  } else if (result < 40) {
    categoria = Tabela.obesidade2;
  } else {
    categoria = Tabela.obesidade3;
  }

  const message = `Seu IMC é de ${result}
  
  ${categoria}`;

  Modal.message.innerText = message;
  Modal.open();
  // modalWrapper.classList.add('open')
}
