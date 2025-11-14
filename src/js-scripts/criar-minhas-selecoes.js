import { ClasseLeitor } from "../js-classes/classe-leitor.js";
import { criarMinhasSelecoes } from "../js-funcoes/funcao-criar-minhas-selecoes.js";
import { ClasseLivro } from "../js-classes/classe-livro.js";

window.addEventListener("DOMContentLoaded", () => {
  const leitor = ClasseLeitor.vetorLeitores.find(
    (l) => l.usuario === ClasseLeitor.leitorLogado
  );

  leitor.minhaSelecao.forEach((selecao) => {
    const livro = ClasseLivro.vetorLivros.find(
      (li) => li.tombo === selecao.tombo
    );
    if (livro) {
      criarMinhasSelecoes(livro, selecao);
    }
  });
});
