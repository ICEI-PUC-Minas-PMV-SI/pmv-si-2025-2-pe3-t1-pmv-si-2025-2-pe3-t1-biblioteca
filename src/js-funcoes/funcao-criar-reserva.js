import { ClasseReserva } from "../js-classes/classe-reserva.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { ClasseLivro } from "../js-classes/classe-livro.js"

export function criarReserva(leitor, livro) {


    if (ClasseLeitor.leitorLogado === "") {
        showAlertSync({
            title: "Usuário não logado",
            message: "Acesse sua conta para poder reservar um livro."
        })
        return
    }

    const reserva = new ClasseReserva(ClasseReserva.numeroDeReservas+1, leitor.id, livro.tombo, livro.numeroChamada, new Date())

    ClasseReserva.vetorReservas.push(reserva);
    localStorage.setItem("lista de reservas", JSON.stringify(ClasseReserva.vetorReservas));

    // atualizar lista de livros
    livro.disponibilidade = false;
    localStorage.setItem("lista de livros", JSON.stringify(ClasseLivro.vetorLivros));

    //atualiza a lista de leitores pra incluir a nova reserva
    leitor.minhasReservas.push(reserva)
    localStorage.setItem("lista de leitores", JSON.stringify(ClasseLeitor.vetorLeitores));


    showAlertSync({
        title: "Reserva concluída",
        message: `${leitor?.nome || "Leitor"}, sua reserva foi registrada com sucesso!`
    }, () => {
        window.location.href = "../../src/html-paginas/reservas.html";
    })

}




