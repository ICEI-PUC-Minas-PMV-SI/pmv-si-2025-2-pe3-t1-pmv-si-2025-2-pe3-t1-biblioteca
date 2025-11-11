import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { ClasseLivro } from "../js-classes/classe-livro.js"
import { selecionarLivro } from "../js-funcoes/funcao-selecionar-livro.js"

const botaoSelecionar = document.getElementById("livro-selecionar")

const isbn = sessionStorage.getItem("isbn_redirecionamento")


const leitor = ClasseLeitor.vetorLeitores.find(l => l.usuario === ClasseLeitor.leitorLogado )
const livro = ClasseLivro.vetorLivros.find(li => li.isbn ===  isbn)

botaoSelecionar.addEventListener("click", (evento) => {
    evento.preventDefault()
    
    selecionarLivro(leitor, livro)

})