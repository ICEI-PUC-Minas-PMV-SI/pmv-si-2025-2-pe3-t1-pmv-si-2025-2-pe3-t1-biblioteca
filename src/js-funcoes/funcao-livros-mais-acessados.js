import { ClasseLivro } from "../js-classes/classe-livro.js";

// chave para persistir o top 8 no localStorage (só ISBNs)
const CHAVE_TOP_ACESSOS = "top 8 livros";

function compararPorAcessosDesc(a, b) {
  const aAcc = Number(a.numeroDeAcessos) || 0;
  const bAcc = Number(b.numeroDeAcessos) || 0;

  if (bAcc !== aAcc) return bAcc - aAcc; // desc por acessos
  return (a.titulo || "").localeCompare(b.titulo || "", "pt-BR"); // desempate
}

export function obterTopAcessos(n = 8) {
  return [...ClasseLivro.vetorLivros]
    .sort(compararPorAcessosDesc)
    .slice(0, n);
}

export function salvarTopAcessos(n = 8) {
  const top = obterTopAcessos(n).map(l => l.isbn);
  localStorage.setItem(CHAVE_TOP_ACESSOS, JSON.stringify(top));
  return top;
}

export function carregarTopAcessos(n = 8) {
  const bruto = localStorage.getItem(CHAVE_TOP_ACESSOS);
  if (bruto) {
    try {
      const arr = JSON.parse(bruto);
      if (Array.isArray(arr) && arr.length) return arr.slice(0, n);
    } catch {}
  }
  return salvarTopAcessos(n);
}

export function carregarTopAcessosLivros(n = 8) {
  const isbns = carregarTopAcessos(n);
  if (!isbns.length) return [];
  // índice para lookup O(1)
  const idx = new Map(ClasseLivro.vetorLivros.map(l => [l.isbn, l]));
  return isbns.map(isbn => idx.get(isbn)).filter(Boolean);
}

