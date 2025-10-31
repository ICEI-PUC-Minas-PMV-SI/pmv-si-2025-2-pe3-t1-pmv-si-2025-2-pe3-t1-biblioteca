import { carregarJanelaReserva } from "../js-funcoes/funcao-janela-reserva.js"

const botaoReservar = document.getElementById("livro-reservar")

botaoReservar.addEventListener("click", (evento) => {

    evento.preventDefault()

    const isbn = sessionStorage.getItem("isbn_redirecionamento")

    if(isbn){
    
        carregarJanelaReserva(isbn)
    }


})