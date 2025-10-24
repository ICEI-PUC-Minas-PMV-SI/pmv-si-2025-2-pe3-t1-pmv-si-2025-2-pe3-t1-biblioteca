//carrega a seção "Em alta" no index

import { carregarEmAlta } from "../js-funcoes/funcao-carregar-em-alta.js"

window.addEventListener("DOMContentLoaded", () => {

    let vetorTop3 = []

    vetorTop3 = JSON.parse(localStorage.getItem("top 3 gêneros"))

    carregarEmAlta(vetorTop3[0], vetorTop3[1], vetorTop3[2])

})