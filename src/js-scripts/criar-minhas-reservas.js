import { ClasseLeitor } from "../js-classes/classe-leitor.js";
import { criarMinhasReservas } from "../js-funcoes/funcao-criar-minhas-reservas.js";
import { ClasseLivro } from "../js-classes/classe-livro.js";

window.addEventListener("DOMContentLoaded", () => {
  const leitor = ClasseLeitor.vetorLeitores.find(
    (l) => l.usuario === ClasseLeitor.leitorLogado
  );

  leitor.minhasReservas.forEach(reserva => {
    const livro = ClasseLivro.vetorLivros.find(li => li.tombo === reserva.tomboLivro)
    if (livro) {
      criarMinhasReservas(livro, reserva)
    }
  })
  
});
