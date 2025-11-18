import { ClasseLeitor } from "../js-classes/classe-leitor.js";
import { ClasseLivro } from "../js-classes/classe-livro.js";

const mensagemPadraoSelecao = document.getElementById(
  "mensagem-padrao-selecao"
);

export async function criarMinhasSelecoes(livro, selecao) {

  const leitor = ClasseLeitor.vetorLeitores.find(
    (l) => l.usuario === ClasseLeitor.leitorLogado
  );
  
  let vetorLeitor

  leitor.minhaSelecao.forEach(selecao => {
      const livro = ClasseLivro.vetorLivros.find(li => li.isbn === selecao.isbn)
      if (livro) {
        vetorLeitor = livro.isbn
      }
  })

  const main = document.querySelector("main");

  mensagemPadraoSelecao.style.display = "none";

  const containerSelecao = document.createElement("section");
  containerSelecao.classList.add("container-selecao");

  const containerCapa = document.createElement("section");
  containerCapa.classList.add("container-capa");

  const imagemCapa = document.createElement("img");
  imagemCapa.src = `../img/capas/${livro.capaId}.jpg`;
  imagemCapa.alt = livro.altCapa;
  imagemCapa.classList.add("capa");
  imagemCapa.id = livro.capaId;

  const containerInformacaoLivro = document.createElement("section");
  containerInformacaoLivro.classList.add("container-informacoes-livro");

  const disponibilidade = document.createElement("span");
  disponibilidade.id = "disponibilidade";
  disponibilidade.textContent =
    livro.disponibilidade === true ? "Disponível" : "Indisponível";

  const tituloDoLivro = document.createElement("h3");
  tituloDoLivro.classList.add("titulo");
  tituloDoLivro.textContent = livro.titulo;

  const containerAutorEGenero = document.createElement("div");
  containerAutorEGenero.classList.add("autor-e-genero");

  const autorDoLivro = document.createElement("span");
  autorDoLivro.classList.add("autor");
  autorDoLivro.title = "Clique para ir para a página do autor";
  autorDoLivro.textContent = livro.autor;

  const generoDoLivro = document.createElement("span");
  generoDoLivro.classList.add("genero");
  generoDoLivro.textContent = livro.genero;

  const resumoDoLivro = document.createElement("span");
  resumoDoLivro.classList.add("resumo");
  resumoDoLivro.textContent = livro.descricaoCurta;

  const containerBotoes = document.createElement("section");
  containerBotoes.classList.add("container-botoes-selecao");

  const botaoIrParaLivro = document.createElement("button");
  botaoIrParaLivro.classList.add("botao-ir-para-livro");
  botaoIrParaLivro.textContent = "Ir para o livro";
  botaoIrParaLivro.type = "button";
  botaoIrParaLivro.title = `Clique para ver mais detalhes sobre esse livro`;

  const botaoDeReserva = document.createElement("button");
  botaoDeReserva.classList.add("botao-reservar");
  botaoDeReserva.textContent = "Reservar";
  botaoDeReserva.type = "button";
  botaoDeReserva.title = `Clique para reservar esse livro`;

  const botaoLixeira = document.createElement("button");
  botaoLixeira.className = "btn-trash";
  botaoLixeira.type = "button";
  botaoLixeira.id = `lixeira-${vetorLeitor}`;
  botaoLixeira.setAttribute("aria-label", "Remover dos favoritos");
  botaoLixeira.title = "Remover dos favoritos";

  // Cria o SVG
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.classList.add("icon-trash");

  // Adiciona os caminhos
  const paths = [
    { d: "M3 6h18" },
    { d: "M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6" },
    { d: "M10 11v6M14 11v6" },
  ];

  // Retângulo do corpo
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", "5");
  rect.setAttribute("y", "6");
  rect.setAttribute("width", "14");
  rect.setAttribute("height", "15");
  rect.setAttribute("rx", "2");
  svg.appendChild(rect);

  // Cria os paths e adiciona ao SVG
  paths.forEach((p) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", p.d);
    svg.appendChild(path);
  });

  // Junta SVG dentro do botão
  botaoLixeira.appendChild(svg);

  if (!selecao) {
    containerSelecao.display = "";
    mensagemPadraoSelecao.classList.add("visibility")
  }

  if (!livro.disponibilidade) {
    disponibilidade.style.backgroundColor = "var(--vermelho-alaranjado)";
    disponibilidade.style.color = "var(--branco)";
    botaoDeReserva.style.cursor = "not-allowed";
    botaoDeReserva.disabled = true;
    botaoDeReserva.setAttribute("title", "Livro indisponível para reserva");
    botaoDeReserva.style.opacity = "0.7";
  }


  main.appendChild(containerSelecao);
  containerSelecao.append(containerCapa, containerInformacaoLivro, botaoLixeira);
  containerCapa.appendChild(imagemCapa);
  containerInformacaoLivro.append(
    disponibilidade,
    tituloDoLivro,
    containerAutorEGenero,
    resumoDoLivro,
    containerBotoes
  );
  containerAutorEGenero.append(autorDoLivro, generoDoLivro);
  containerBotoes.append(botaoIrParaLivro, botaoDeReserva);
}
