import { ClasseReserva } from "../js-classes/classe-reserva.js"
import { obterDataHoraServidor } from "./funcoes-de-data-e-hora.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"

export function expirarReserva(reserva){

    const dataHoraLimite = reserva.dataHoraLimite
    
    const agora = obterDataHoraServidor()

    //capta a reserva no vetor de todas as reservas, para alterar também essa lista no local storage
    const reservaVetorReservas = ClasseReserva.vetorReservas.find(r => r.id = reserva.id)

    if (agora > dataHoraLimite){

        //atualiza a expiração da reserva no vetor de reservas do leitor
        reserva.expirou = true
        //atualiza a expiração da reserva no vetor com todas as reservas
        reservaVetorReservas.expirou = true

        localStorage.setItem("lista de reservas", JSON.stringify(ClasseReserva.vetorReservas))
        localStorage.setItem("lista de leitores", JSON.stringify(ClasseLeitor.vetorLeitores))

    }
}