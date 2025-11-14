const mensagemPadraoSelecao = document.getElementById("mensagem-padrao-selecao")

export async function criarMinhasSelecoes(livro, selecao) {

    const main = document.querySelector("main")

    mensagemPadraoSelecao.style.display = "none"

    const containerSelecao = document.createElement("section")
    containerSelecao.classList.add("container-selecao")

    const containerCapa = document.createElement("section")
    containerCapa.classList.add("container-capa")

    const imagemCapa = document.createElement("img")
    imagemCapa.src = `../img/capas/${livro.capaId}.jpg`
    imagemCapa.alt = livro.altCapa
    imagemCapa.classList.add("capa")
    imagemCapa.id = livro.capaId

    const containerInformacaoLivro = document.createElement("section")
    containerInformacaoLivro.classList.add("container-informacoes-livro")

    const disponibilidade = document.createElement("span")
    disponibilidade.id = "disponibilidade"
    disponibilidade.textContent = livro.disponibilidade === true ? "Disponível" : "Indisponível"

    const tituloDoLivro = document.createElement("h3")
    tituloDoLivro.classList.add("titulo")
    tituloDoLivro.textContent = livro.titulo

    const containerAutorEGenero = document.createElement("div")
    containerAutorEGenero.classList.add("autor-e-genero")

    const autorDoLivro = document.createElement("span")
    autorDoLivro.classList.add("autor")
    autorDoLivro.title = "Clique para ir para a página do autor"
    autorDoLivro.textContent = livro.autor

    const generoDoLivro = document.createElement("span")
    generoDoLivro.classList.add("genero")
    generoDoLivro.textContent = livro.genero

    const resumoDoLivro = document.createElement("span")
    resumoDoLivro.classList.add("resumo")
    resumoDoLivro.textContent = livro.descricaoCurta

    if (!selecao) {
        containerSelecao.display = ""
        mensagemPadraoSelecao.display = "flex"
    }

    main.appendChild(containerSelecao)
    containerSelecao.append(containerCapa, containerInformacaoLivro)
    containerCapa.appendChild(imagemCapa)   
    containerInformacaoLivro.append(disponibilidade, tituloDoLivro, containerAutorEGenero, resumoDoLivro,)
    containerAutorEGenero.append(autorDoLivro, generoDoLivro)

}