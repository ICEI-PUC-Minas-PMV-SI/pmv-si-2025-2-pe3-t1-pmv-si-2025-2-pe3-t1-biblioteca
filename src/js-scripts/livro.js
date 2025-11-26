import { ClasseLeitor } from "../js-classes/classe-leitor.js";
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js";

const reserveContainer = document.querySelector(".reserve-container");
const reserveButton = document.getElementById("livro-reservar");
const selectButton = document.getElementById("livro-selecionar");
const allContainers = document.querySelectorAll(".opacity05");
const buttonCancelReserve = document.getElementById("botao-cancelar-reserva");
const reserveDisponibility = document.getElementById("disponibilidade");

reserveButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (ClasseLeitor.leitorLogado === "") {
    showAlertSync({
      title: "Usuário não logado",
      message: "Acesse sua conta para poder reservar um livro.",
    });
    return;
  }

  reserveContainer.style.display = "flex";
  allContainers.forEach((container) => {
    container.style.opacity = "0.2";
    container.disabled = true;
  });
});

buttonCancelReserve.addEventListener("click", (event) => {
  event.preventDefault();

  reserveContainer.style.display = "none";
  allContainers.forEach((container) => {
    container.style.opacity = "1";
    container.disabled = false;
  });
});
