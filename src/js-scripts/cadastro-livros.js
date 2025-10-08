// src/js-scripts/cadastro-livros.js
// Uso no index.html (uma linha):
//   <script type="module" src="./src/js-scripts/cadastro-livros.js"></script>

import { ClasseLivro } from "../js-classes/classe-livro.js";
import { seedLivrosVersora } from "../js-funcoes/funcoes-cadastrar-livros.js";

// Chave única usada pela ClasseLivro
const KEY = ClasseLivro.chaveLS || "lista de livros";

// Helpers de persistência
function readLS() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
  catch { return []; }
}

function syncClasseComLS(arr) {
  ClasseLivro.vetorLivros.length = 0;
  ClasseLivro.vetorLivros.push(...arr);
  ClasseLivro.numeroDeLivros = ClasseLivro.vetorLivros.length;
}

function writeLS(arr) {
  localStorage.setItem(KEY, JSON.stringify(arr));
  syncClasseComLS(arr);
}

// Garante que o acervo esteja disponível no primeiro load
function ensureSeeded() {
  const existentes = readLS();
  if (!Array.isArray(existentes) || existentes.length === 0) {
    // Cria e persiste o acervo inicial (ISBN/ano/editora e número de chamada físico)
    seedLivrosVersora(); // já grava no LS e ajusta a ClasseLivro internamente
  } else {
    // Mantém o espelho estático da ClasseLivro alinhado ao LS
    syncClasseComLS(existentes);
  }
}

// Executa imediatamente na carga do módulo
ensureSeeded();

// Export opcional (debug/forçar reseed manual, se necessário)
// import { ensureSeeded } from "./src/js-scripts/cadastro-livros.js";
export { ensureSeeded, readLS, writeLS };

// === Preencher numeroDePaginas (strings) por ISBN ===
// Obs.: valores como string, sem validação; onde não confirmei ainda, deixei " ".
(function preencherPaginas() {
  const porIsbn = {
    // --- FILOSOFIA ---
    "9788527301114": "264",  // A Estrutura das Revoluções Científicas (Perspectiva)
    "9788527300070": "410",    // A Tensão Essencial 
    "9786558311461": "152",    // A Sabedoria da Insegurança (Vozes) 
    "9786558319429": "176",    // Tao: O Curso do Rio (Vozes)
    "9788535925654": "264",  // Despertar (Companhia das Letras)
    "9788535923292": "312",  // A Paisagem Moral (Companhia das Letras)

    // --- SOCIOLOGIA ---
    "9788544104688": "224",  // A Classe Média no Espelho (Estação Brasil/Sextante)
    "9788542212477": "256",  // A Herança do Golpe (LeYa)
    "9788587293046": "368",  // Desenvolvimento sem Trabalho (Esfera)
    "9788586796456": "272",  // O Ócio Criativo (Sextante)
    "9788537802656": "208",  // Vida a Crédito (Zahar)
    "9788537816103": "128",  // Estranhos à Nossa Porta (Zahar)

    // --- DIVULGAÇÃO CIENTÍFICA ---
    "9788535908596": "288",  // Bilhões e Bilhões (Companhia das Letras)
    "9788535918069": "440",  // Contato (Companhia das Letras)
    "9788580576467": "256",  // Uma Breve História do Tempo (Intrínseca)
    "9788580578881": "224",  // O Universo Numa Casca de Noz (Intrínseca)
    "9788535932171": "488",  // O Oráculo da Noite (Companhia das Letras)
    "9786559871254": "184",  // Limiar (Todavia)

    // --- PSICOLOGIA ---
    "9788571648463": "666",  // Como a Mente Funciona (Companhia das Letras)
    "9788535904949": "684",  // Tábula Rasa (Companhia das Letras)
    "9788535938531": "440",  // A Geração Ansiosa (Companhia das Letras)
    "9788550813905": "448",  // A Mente Moralista (Alta Books)
    "9788535930023": "184",  // O Rio da Consciência (Companhia das Letras)
    "9788535908961": "360",  // Um Antropólogo em Marte (Companhia de Bolso)

    // --- MISTÉRIO ---
    "9786560051812": "288",  // A Mansão Hollow (HarperCollins Brasil)
    "9788595085916": "256",  // Os Quatro Grandes (HarperCollins Brasil)
    "9786555655940": "320",  // O Segredo da Empregada (Arqueiro)
    "9788501923288": "336",  // Nunca Minta (Record/Galera)
    "9788501119520": "384",  // Um de Nós é o Próximo (Galera/Record)
    "9786559811885": "392",  // Nada a Declarar (Galera/Record)

    // --- ROMANCE ---
    "9788501078896": "448",  // Cem Anos de Solidão (Record)
    "9788501019431": "160",  // Crônica de uma Morte Anunciada (Record)
    "9788563560155": "424",  // Orgulho e Preconceito (Penguin-Companhia)
    "9788563560490": "448",  // Razão e Sensibilidade (Penguin-Companhia)
    "9788573266467": "561",  // Crime e Castigo (Editora 34)
    "9788573265385": "888",  // Os Irmãos Karamázov (Editora 34, vol. único)

    // --- FICÇÃO CIENTÍFICA ---
    "9788535910666": "312",  // Admirável Mundo Novo (Biblioteca Azul/Globo Livros)
    "9788535915463": "208",  // Macaco e Essência (Biblioteca Azul/Globo Livros)
    "9788535909554": "320",    // Fundação (Aleph) 
    "9788576572991": "277",    // Poeira de Estrelas (Aleph) - 
    "9788576162109": "230",    // Três Meses no Século 81 - 
    "9788576162116": "324",    // A Cidade Perdida - 

    // --- FANTASIA ---
    "9788532530782": "208",  // Harry Potter e a Pedra Filosofal (Rocco)
    "9788532511668": "224",  // Harry Potter e a Câmara Secreta (Rocco)
    "9788533613378": "576",  // O SdA – A Sociedade do Anel (HarperCollins Brasil)
    "9788533613385": "464",  // O SdA – As Duas Torres (HarperCollins Brasil)
    "9788578277108": "208",  // Nárnia: O Leão, a Feiticeira e o Guarda-Roupa (WMF)
    "9788578277115": "304",  // Nárnia: Príncipe Caspian (WMF)
  };

  for (const livro of ClasseLivro.vetorLivros) {
    if (porIsbn[livro.isbn] !== undefined) {
      livro.numeroDePaginas = porIsbn[livro.isbn]; // string
    }
  }

  localStorage.setItem(ClasseLivro.chaveLS, JSON.stringify(ClasseLivro.vetorLivros));
})();

