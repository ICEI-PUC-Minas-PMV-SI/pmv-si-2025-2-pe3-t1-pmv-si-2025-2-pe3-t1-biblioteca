import { carregarJanelaReserva } from "../js-funcoes/funcao-janela-reserva.js";
const reserveContainer = document.querySelector(".reserve-container");
const buttonCancelReserve = document.getElementById("botao-cancelar-reserva")

document.addEventListener("click", (event) => {
  const botaoReservar = event.target.closest(".botao-reservar");
  if (!botaoReservar) return;

  event.preventDefault();

  const card = botaoReservar.closest(".container-selecao");

  const capa = card.querySelector(".capa");

  if(capa.id){
    
        carregarJanelaReserva(capa.id)
    }

  reserveContainer.style.display = "flex";
});

buttonCancelReserve.addEventListener("click", (event) => {
    event.preventDefault();

    reserveContainer.style.display = "none";
})