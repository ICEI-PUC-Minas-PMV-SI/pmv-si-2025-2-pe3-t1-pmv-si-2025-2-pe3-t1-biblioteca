import { adicionarFavorito } from "../js-funcoes/funcao-favorito-adicionar-autor.js"
import {removerFavorito} from "../js-funcoes/funcao-favorito-remover-autor.js"

const coracao = document.getElementById("rotulo-like")

coracao.addEventListener("click", function(evento){

    evento.preventDefault()

    const id = sessionStorage.getItem("id_autor_redirecionamento")

    let valorCheckbox = document.getElementById("like").checked
    
    if(valorCheckbox === true){

        document.getElementById("like").checked = false

        removerFavorito(id)
        document.getElementById("rotulo-like").title = "Favoritar esse autor"

    } else {

        document.getElementById("like").checked = true

        adicionarFavorito(id)

        document.getElementById("rotulo-like").title = "Desfazer curtida"
    }
    
})