import { ClasseLivro } from "../js-classes/classe-livro.js";

const KEY = "busca_pendente";
const botaoBuscar = document.getElementById("botao-buscar-acervo");
let livrosExibidos = [];


// Técnica da Distância de Levenshtein (tolerância a erros de digitação)
function distanciaLevenshtein(a, b) {
  a = (a ?? "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  b = (b ?? "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const m = Array.from({ length: a.length + 1 }, () => []);
  for (let i = 0; i <= a.length; i++) m[i][0] = i;
  for (let j = 0; j <= b.length; j++) m[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const custo = a[i - 1] === b[j - 1] ? 0 : 1;
      m[i][j] = Math.min(
        m[i - 1][j] + 1,      // remoção
        m[i][j - 1] + 1,      // inserção
        m[i - 1][j - 1] + custo // substituição
      );
    }
  }
  return m[a.length][b.length];
}

// Refinamento da comparação 
function correspondeAproximadamente(valorCampo, termoBusca) {
  if (!valorCampo || !termoBusca) return false;

  const campo = valorCampo.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const termo = termoBusca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 1) Caso direto
  if (campo.includes(termo)) return true;

  // 2) Tolerância por tamanho 
  const len = termo.length;
  let maxDist;
  if (len <= 5) maxDist = 1;
  else if (len <= 10) maxDist = 2;
  else if (len <= 20) maxDist = 3;
  else maxDist = 4;

  // 3) Comparação global (nome completo vs termo completo)
  const distGlobal = distanciaLevenshtein(campo, termo);
  if (distGlobal <= maxDist) return true;

  // 4) Compara palavra a palavra apenas se o termo tiver UMA palavra 
  const palavrasTermo = termo.split(/\s+/);
  if (palavrasTermo.length === 1) {
    const palavrasCampo = campo.split(/\s+/);
    for (const p1 of palavrasCampo) {
      if (distanciaLevenshtein(p1, termo) <= maxDist) return true;
    }
  }

  return false;
}

// Execução da busca 
export function executarBusca(busca, tipoBusca = "Todos os campos") {
  livrosExibidos = [];

  // Capture as capas sempre no DOM atual do acervo
  const todosOsLivros = Array.from(document.querySelectorAll(".capa-ancora"));

  // Esconde todas as capas
  for (let j = 0; j < todosOsLivros.length; j++) {
    todosOsLivros[j].style.display = "none";
  }

  const termo = (busca || "").toLowerCase().trim();
  if (!termo) return;


  //texto inicial que indica que não foram encontrados livros (caso sejam encontrados, o texto é modificado em trecho posterior)
  let contagem = "Não foram encontrados livros correspondentes à sua busca. Tente novamente."

  document.getElementById("contagem-de-encontrados").textContent = contagem

  for (let i = 0; i < ClasseLivro.vetorLivros.length; i++) {
    const livro = ClasseLivro.vetorLivros[i];
    let corresponde = false;

    switch (tipoBusca) {
      case "Todos os campos":
        corresponde =
          correspondeAproximadamente(livro.titulo, termo) ||
          correspondeAproximadamente(livro.autor, termo) ||
          correspondeAproximadamente(livro.genero, termo) || 
          correspondeAproximadamente(livro.editora, termo)
        break;

      case "Título":
        corresponde = correspondeAproximadamente(livro.titulo, termo);
        break;

      case "Autor":
        corresponde = correspondeAproximadamente(livro.autor, termo);
        break;

      case "Gênero":
        corresponde = correspondeAproximadamente(livro.genero, termo);
        break;

      case "Editora":
        corresponde = correspondeAproximadamente(livro.editora, termo);
        break;
    }

    if (corresponde) {
      const capa = document.getElementById(livro.isbn);
      if (capa) {
        capa.style.display = "inline-block";
        livrosExibidos.push(livro);

        //recebe o número total de livros encontrados na busca
        let totalDeLivros = livrosExibidos.length

        contagem = `Total de livros encontrados: ${totalDeLivros}`

        document.getElementById("contagem-de-encontrados").textContent = contagem
       
      }
    } 
  }
}

// Evento principal (clique no botão de busca do acervo)
if (botaoBuscar) {
  botaoBuscar.addEventListener("click", function (evento) {
    evento.preventDefault();

    const busca = document.getElementById("busca-acervo")?.value?.trim() || ""
    const tipoBusca = document.getElementById("selectSearch")?.innerHTML || "Todos os campos"

    executarBusca(busca, tipoBusca);

    document.getElementById("busca-acervo").value = ""
  });
}


// Controle da transição de página com autorun e referrer
document.addEventListener("DOMContentLoaded", () => {
  const raw = sessionStorage.getItem(KEY);
  if (!raw) return;

  let payload;
  try { payload = JSON.parse(raw); } catch { return; }

  // Confirmar origem: veio do index + pediu autorun, então usa o termo buscado no index na página do acervo
  let fromIndex = false;
  try {
    const ref = new URL(document.referrer);
    fromIndex = ref.origin === location.origin && (/\/index\.html?$|\/$/.test(ref.pathname));
  } catch { /* sem referrer útil */ }

  if (!(payload?.autorun && payload?.source === "index" && fromIndex)) return;

  // Remove o valor da session storage
  sessionStorage.removeItem(KEY);

  const termo = (payload.termo || payload.busca || "").trim();
  const tipo  = payload.tipo || "Todos os campos";
  if (!termo) return;

  requestAnimationFrame(() => executarBusca(termo, tipo));
});


