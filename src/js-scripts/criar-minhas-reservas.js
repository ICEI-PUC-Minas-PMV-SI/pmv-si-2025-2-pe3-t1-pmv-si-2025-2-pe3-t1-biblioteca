import { ClasseLeitor } from "../js-classes/classe-leitor.js";
import { criarMinhasReservas } from "../js-funcoes/funcao-criar-minhas-reservas.js";
import { ClasseLivro } from "../js-classes/classe-livro.js";

window.addEventListener("DOMContentLoaded", () => {
  const livrosReservados =
    JSON.parse(localStorage.getItem("lista de reservas")) || [];
  const leitor = ClasseLeitor.vetorLeitores.find(
    (l) => l.usuario === ClasseLeitor.leitorLogado
  );

  livrosReservados.forEach((reserva) => {
    if (leitor && leitor.id === reserva.idUsuario) {
      const livro = ClasseLivro.vetorLivros.find(
        (li) => li.tombo === reserva.tomboLivro
      );
      if (livro) {
        criarMinhasReservas(livro, leitor, reserva);
      }
    }
  });
});
