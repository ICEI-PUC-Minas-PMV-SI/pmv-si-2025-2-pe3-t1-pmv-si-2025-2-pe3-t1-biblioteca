import { ClasseLeitor } from "../js-classes/classe-leitor.js";
import { criarMinhasReservas } from "../js-funcoes/funcao-criar-minhas-reservas.js";
import { ClasseLivro } from "../js-classes/classe-livro.js";

// modifiquei o código para se adequar à assincronicidade da função `criarMinhasReservas`
window.addEventListener("DOMContentLoaded", async () => {
  const leitor = ClasseLeitor.vetorLeitores.find(
    (l) => l.usuario === ClasseLeitor.leitorLogado
  )

  // garante que as reservas mais recentes estejam no topo da página com o método reverse(), que inverte a ordem das reservas realizadas pelo leitor
  for (const reserva of leitor.minhasReservas.reverse()) {
    const livro = ClasseLivro.vetorLivros.find(li => li.tombo === reserva.tomboLivro)
    if (livro) {
      await criarMinhasReservas(livro, reserva)
    }
  }

})
  
