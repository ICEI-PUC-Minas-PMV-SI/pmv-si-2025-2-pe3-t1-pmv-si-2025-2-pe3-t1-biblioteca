import { criarReserva } from "../js-funcoes/funcao-criar-reserva.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { ClasseLivro } from "../js-classes/classe-livro.js"

const botaoConfirmar = document.getElementById("botao-confirmar-reserva")

const isbn = sessionStorage.getItem("isbn_redirecionamento")

const leitor = ClasseLeitor.vetorLeitores.find(l => l.usuario === ClasseLeitor.leitorLogado )
const livro = ClasseLivro.vetorLivros.find(li => li.isbn ===  isbn)

botaoConfirmar.addEventListener("click", (evento) => {
    evento.preventDefault()
    criarReserva(leitor, livro)

})