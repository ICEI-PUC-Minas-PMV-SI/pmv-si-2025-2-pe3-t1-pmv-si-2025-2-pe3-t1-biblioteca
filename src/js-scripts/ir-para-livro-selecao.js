document.addEventListener("click", (event) => {
    const botao = event.target.closest(".botao-ir-para-livro")
    if (!botao) return

    event.preventDefault()

    const card = botao.closest(".container-selecao")

    const capa = card.querySelector(".capa")

    sessionStorage.setItem("isbn_redirecionamento", capa.id)

    window.location.href = "./livro.html"
})