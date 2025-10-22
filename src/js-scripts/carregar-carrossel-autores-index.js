//carrega tanto o carrossel dos livros mais acessados no index quanto os cards com as informações correspondentes

import { carregarAncorasCarrossel } from "../js-funcoes/funcao-carrossel-autor-home.js"
import { carregarCards } from "../js-funcoes/funcao-card-autor-home.js"

window.addEventListener("DOMContentLoaded", () => {

    let vetorTop8 = []

    vetorTop8 = JSON.parse(localStorage.getItem("top 8 autores"))

    carregarAncorasCarrossel(vetorTop8[0],vetorTop8[1],vetorTop8[2],vetorTop8[3],vetorTop8[4],vetorTop8[5],vetorTop8[6],vetorTop8[7])

    carregarCards(vetorTop8[0],vetorTop8[1],vetorTop8[2],vetorTop8[3],vetorTop8[4],vetorTop8[5],vetorTop8[6],vetorTop8[7])



})