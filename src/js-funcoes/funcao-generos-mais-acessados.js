import { ClasseGenero } from "../js-classes/classe-genero.js";

// chave para persistir o top 8 no localStorage (só ISBNs)
const CHAVE_TOP_ACESSOS = "top 3 gêneros";

function compararPorAcessosDesc(a, b) {
  const aAcc = Number(a.numeroDeAcessos) || 0;
  const bAcc = Number(b.numeroDeAcessos) || 0;

  if (bAcc !== aAcc) return bAcc - aAcc; // desc por acessos
  return (a.nomeGenero || "").localeCompare(b.nomeGenero || "", "pt-BR"); // desempate
}

export function obterTopAcessos(n = 3) {
  return [...ClasseGenero.vetorGeneros]
    .sort(compararPorAcessosDesc)
    .slice(0, n);
}

export function salvarTopAcessosGeneros(n = 3) {
  const top = obterTopAcessos(n).map(l => l.id);
  localStorage.setItem(CHAVE_TOP_ACESSOS, JSON.stringify(top));
  return top;
}

export function carregarTopAcessos(n = 3) {
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
  const ids = carregarTopAcessos(n);
  if (!ids.length) return [];
  // índice para lookup O(1)
  const idx = new Map(ClasseGenero.vetorGeneros.map(l => [l.id, l]));
  return ids.map(id => idx.get(id)).filter(Boolean);
}

