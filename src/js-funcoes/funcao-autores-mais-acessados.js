import { ClasseAutor } from "../js-classes/classe-autor.js"

// chave para persistir o top 8 no localStorage (só ids)
const CHAVE_TOP_ACESSOS = "top 8 autores"

function compararPorAcessosDesc(a, b) {
  const aAcc = Number(a.numeroDeAcessos) || 0;
  const bAcc = Number(b.numeroDeAcessos) || 0;

  if (bAcc !== aAcc) return bAcc - aAcc; // desc por acessos
  return (a.nome || "").localeCompare(b.nome || "", "pt-BR"); // desempate
}

export function obterTopAcessos(n = 8) {
  return [...ClasseAutor.vetorAutores]
    .sort(compararPorAcessosDesc)
    .slice(0, n);
}

export function salvarTopAcessos(n = 8) {
  const top = obterTopAcessos(n).map(l => l.id);
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

export function carregarTopAcessosAutores(n = 8) {
  const ids = carregarTopAcessos(n);
  if (!ids.length) return [];
  // índice para lookup O(1)
  const idx = new Map(ClasseAutor.vetorAutores.map(l => [l.id, l]));
  return ids.map(id => idx.get(id)).filter(Boolean);
}

