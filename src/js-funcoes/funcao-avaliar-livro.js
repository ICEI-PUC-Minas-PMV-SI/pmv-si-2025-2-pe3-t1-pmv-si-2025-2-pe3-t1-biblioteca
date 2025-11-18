import { ClasseAvaliacaoLivro } from "../js-classes/classe-avaliacao-livro.js"
import {showAlertSync} from "../js-funcoes/funcoes-de-dialogo.js"


export function avaliarLivro(leitor, livro){

const nota = document.querySelector('input[name="rating"]:checked')?.value
const comentario = document.getElementById("comentario").value

const idAvaliacao = ClasseAvaliacaoLivro.vetorAvaliacoes.length + 1

const avaliacao = new ClasseAvaliacaoLivro(idAvaliacao, leitor.id, livro.tombo, livro.titulo, nota, comentario)

ClasseAvaliacaoLivro.vetorAvaliacoes.push(avaliacao)

localStorage.setItem(ClasseAvaliacaoLivro.chaveLS, JSON.stringify(ClasseAvaliacaoLivro.vetorAvaliacoes))

showAlertSync({
    title: "Avaliação registrada",
    message: "Obrigado por sua avaliação. Agora sua avaliação pode ser visualizada na página do livro"
    })

    return

}


