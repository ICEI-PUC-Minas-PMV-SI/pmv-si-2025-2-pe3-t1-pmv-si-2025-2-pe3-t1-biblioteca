const botaoCancelar = document.getElementById("avaliacao-cancelar")
const janelaAvaliacao = document.getElementById("janela-avaliacao-livro")
const botaoAdicionarAvaliacao = document.getElementById("adicionar-avaliacao")

botaoAdicionarAvaliacao.addEventListener("click", (evento) => {

    evento.preventDefault()

    janelaAvaliacao.style.display = "flex";

})

botaoCancelar.addEventListener("click", (evento) => {

    evento.preventDefault()
    janelaAvaliacao.style.display = "none"

    return

})