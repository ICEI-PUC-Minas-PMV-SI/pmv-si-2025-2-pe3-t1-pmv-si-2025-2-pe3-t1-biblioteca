import { avaliarLivro } from "../js-funcoes/funcoes-avaliacao-livro.js"
import { ClasseLivro } from "../js-classes/classe-livro.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"

const botaoCancelar = document.getElementById("avaliacao-cancelar")
const botaoEnviar = document.getElementById("avaliacao-enviar")
const janelaAvaliacao = document.getElementById("janela-avaliacao-livro")
const botaoAdicionarAvaliacao = document.getElementById("adicionar-avaliacao")
const leitorLogado = localStorage.getItem("leitor logado") || ""

// encontrando o leitor logado e o livro da página
const leitor = ClasseLeitor.vetorLeitores.find(le => le.usuario === localStorage.getItem("leitor logado"))
const livro = ClasseLivro.vetorLivros.find(li => li.isbn === sessionStorage.getItem("isbn_redirecionamento"))

botaoAdicionarAvaliacao.addEventListener("click", (evento) => {

    evento.preventDefault()


    if(leitorLogado === ""){

        showAlertSync({
            title: "Usuário não logado",
            message: "Acesse sua conta para adicionar uma avaliação."
        })

        return
    }

    janelaAvaliacao.style.display = "flex";

})

botaoCancelar.addEventListener("click", (evento) => {

    evento.preventDefault()
    janelaAvaliacao.style.display = "none"

    return

})


botaoEnviar.addEventListener("click", async (evento) => {

    evento.preventDefault()
    
    if(await avaliarLivro(leitor, livro)){

        window.location.reload()
    }

})

