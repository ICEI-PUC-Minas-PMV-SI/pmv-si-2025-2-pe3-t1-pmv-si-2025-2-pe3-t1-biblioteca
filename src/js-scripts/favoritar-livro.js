import { adicionarFavorito } from "../js-funcoes/funcao-favorito-adicionar.js"
import {removerFavorito} from "../js-funcoes/funcao-favorito-remover.js"

const coracao = document.getElementById("rotulo-like")

coracao.addEventListener("click", function(evento){

    evento.preventDefault()

    const isbn = sessionStorage.getItem("isbn_redirecionamento")

    let valorCheckbox = document.getElementById("like").checked
    
    if(valorCheckbox === true){

        document.getElementById("like").checked = false

        removerFavorito(isbn)
        document.getElementById("rotulo-like").title = "Favoritar esse livro"

    } else {

        document.getElementById("like").checked = true

        adicionarFavorito(isbn)

        document.getElementById("rotulo-like").title = "Desfazer curtida"
    }
    
})