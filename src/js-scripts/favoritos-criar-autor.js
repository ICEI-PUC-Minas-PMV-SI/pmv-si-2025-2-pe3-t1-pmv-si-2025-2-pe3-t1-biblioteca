import { criarFavoritos } from "../js-funcoes/funcao-favorito-criar-autor.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"

window.addEventListener("DOMContentLoaded", () => {

    const usuarioLogado = localStorage.getItem("leitor logado")

    //encontrando o vetor de favoritos do leitor logado
    let leitor

    let n

    for(n=0; n<ClasseLeitor.vetorLeitores.length;n++){

        if(ClasseLeitor.vetorLeitores[n].usuario === usuarioLogado){

            leitor = ClasseLeitor.vetorLeitores[n]

            break
        }
    }

    const vetorFavoritos = leitor.meusAutoresFavoritos


    console.log(vetorFavoritos.length)

    if(vetorFavoritos.length != 0){

        document.getElementById("mensagem-padrao").style.display = "none"
    
        criarFavoritos(vetorFavoritos)
    }
    
})