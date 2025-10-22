import { seedAutoresVersora } from "../js-funcoes/funcao-cadastrar-autores.js"

window.addEventListener("DOMContentLoaded", () => {


    const listaDeAutores = localStorage.getItem("lista de autores")

    if(!listaDeAutores){

        seedAutoresVersora()
    }
})
