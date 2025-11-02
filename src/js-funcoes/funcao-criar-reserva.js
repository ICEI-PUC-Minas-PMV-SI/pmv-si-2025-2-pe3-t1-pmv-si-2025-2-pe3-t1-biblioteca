import { ClasseReserva } from "../js-classes/classe-reserva.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"

export function criarReserva(leitor, livro) {

    let i 

    if(ClasseReserva.vetorReservas.length != 0){

        for (i = 0; i < ClasseReserva.vetorReservas.length; i++) {

            console.log(i)
            
            if(livro.tombo === ClasseReserva.vetorReservas[i].tomboLivro && ClasseReserva.vetorReservas[i].status === "Aguardando retirada") {
                
                showAlertSync({
                    title: "Livro já reservado",
                    message: "Esse livro já está reservado e aguardando retirada. Tente novamente mais tarde!"
                })

                return
            }
        }
    }

    if (ClasseLeitor.leitorLogado === "") {
        showAlertSync({
            title: "Usuário não logado",
            message: "Acesse sua conta para poder reservar um livro."
        })
        return
    } else {

    }

    const reserva = new ClasseReserva(ClasseReserva.numeroDeReservas+1, leitor.id, livro.tombo, new Date())

    ClasseReserva.vetorReservas.push(reserva);
    localStorage.setItem("lista de reservas", JSON.stringify(ClasseReserva.vetorReservas));

    // atualizar lista de livros




    
    showAlertSync({
        title: "Reserva concluída",
        message: `${leitor?.nome || "Leitor"}, sua reserva foi registrada com sucesso!`
    }, () => {
        window.location.href = "../../index.html";
    })

}




