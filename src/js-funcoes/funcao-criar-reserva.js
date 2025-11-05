import { ClasseReserva } from "../js-classes/classe-reserva.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { ClasseLivro } from "../js-classes/classe-livro.js"
import { obterDataHoraServidor, hojeISO, horaBrasilia, calcularLimiteReserva } from "./funcoes-de-data-e-hora.js"

export async function criarReserva(leitor, livro) {


    if (ClasseLeitor.leitorLogado === "") {
        showAlertSync({
            title: "Usuário não logado",
            message: "Acesse sua conta para poder reservar um livro."
        })
        return
    }

    const numeroReservasAtivas = leitor.minhasReservas.filter(r => r.status.toLowerCase() === "aguardando retirada").length

    if(numeroReservasAtivas >= 2){

        showAlertSync({
            title: "Limite de reservas",
            message: "Você já atingiu o limite de 2 reservas ativas. Para realizar uma nova reserva, você deve cancelar uma de suas reservas ativas."
        })
        return
    }

    //datas e horário em formato manipulável
    const data = await obterDataHoraServidor()
    const dataMs = data.getTime()
    const limiteMs = calcularLimiteReserva(dataMs)

    //datas e horários em formato legível
    const dataSolicitacao = hojeISO(dataMs)
    const horaSolicitacao = horaBrasilia(dataMs)
    const dataLimite = hojeISO(limiteMs)
    const horaLimite = horaBrasilia(limiteMs)
   
  
    const reserva = new ClasseReserva(ClasseReserva.numeroDeReservas+1, leitor.id, livro.tombo, dataMs, dataSolicitacao, horaSolicitacao,  limiteMs, dataLimite, horaLimite)
    
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




