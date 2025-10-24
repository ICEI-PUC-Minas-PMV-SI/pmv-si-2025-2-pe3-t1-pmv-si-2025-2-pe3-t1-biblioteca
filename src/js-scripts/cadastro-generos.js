import { seedGenerosVersora } from "../js-funcoes/funcao-cadastrar-generos.js"

window.addEventListener("DOMContentLoaded", () => {


    const listaDeGeneros = localStorage.getItem("lista de gêneros")

    if(!listaDeGeneros){

        seedGenerosVersora()
    }
})