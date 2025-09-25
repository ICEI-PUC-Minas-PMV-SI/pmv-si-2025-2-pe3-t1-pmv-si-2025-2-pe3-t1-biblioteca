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
