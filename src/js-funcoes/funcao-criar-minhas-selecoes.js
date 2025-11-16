const mensagemPadraoSelecao = document.getElementById(
  "mensagem-padrao-selecao"
)

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
  disponibilidade.textContent =
    livro.disponibilidade === true ? "Disponível" : "Indisponível"

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

  const containerBotoes = document.createElement("section")
  containerBotoes.classList.add("container-botoes-selecao")

  const botaoIrParaLivro = document.createElement("button")
  botaoIrParaLivro.classList.add("botao-ir-para-livro")
  botaoIrParaLivro.textContent = "Ir para o livro"
  botaoIrParaLivro.type = "button"
  botaoIrParaLivro.title = `Clique para ver mais detalhes sobre esse livro`

  const botaoDeReserva = document.createElement("button")
  botaoDeReserva.classList.add("botao-reservar")
  botaoDeReserva.textContent = "Reservar"
  botaoDeReserva.type = "button"
  botaoDeReserva.title = `Clique para reservar esse livro`

  if (!selecao) {
    containerSelecao.display = ""
    mensagemPadraoSelecao.display = "flex"
  }

  if (!livro.disponibilidade) {
    disponibilidade.style.backgroundColor = "var(--vermelho-alaranjado)"
    disponibilidade.style.color = "var(--branco)"
    botaoDeReserva.style.cursor = "not-allowed"
    botaoDeReserva.disabled = true
    botaoDeReserva.setAttribute("title", "Livro indisponível para reserva")
    botaoDeReserva.style.opacity = "0.7"
  }

  main.appendChild(containerSelecao)
  containerSelecao.append(containerCapa, containerInformacaoLivro)
  containerCapa.appendChild(imagemCapa)
  containerInformacaoLivro.append(
    disponibilidade,
    tituloDoLivro,
    containerAutorEGenero,
    resumoDoLivro,
    containerBotoes
  )
  containerAutorEGenero.append(autorDoLivro, generoDoLivro)
  containerBotoes.append(botaoIrParaLivro, botaoDeReserva)
}
