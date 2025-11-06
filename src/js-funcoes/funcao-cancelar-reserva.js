import { ClasseReserva } from "../js-classes/classe-reserva.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import {ClasseLivro} from "../js-classes/classe-livro.js"

export function cancelarReserva (reserva, leitor){


    //encontrando o livro para mudar sua disponibilidade
    const livro = ClasseLivro.vetorLivros.find(l => l.tombo === reserva.tomboLivro)

    //índice da reserva no vetor de reservas do leitor
    const indice1 = leitor.minhasReservas.findIndex(r => r.idReserva === reserva.idReserva)
    //índice da reserva no vetor com todas as reservas
    const indice2 = ClasseReserva.vetorReservas.findIndex(r => r.idReserva === reserva.idReserva)

    if(indice1!== -1){
    
        leitor.minhasReservas.splice(indice1,1)
        localStorage.setItem("lista de leitores", JSON.stringify(ClasseLeitor.vetorLeitores))
    }
    
   

    if(indice2!== -1){
    
        ClasseReserva.vetorReservas.splice(indice2,1)
        localStorage.setItem("lista de reservas", JSON.stringify(ClasseReserva.vetorReservas))
    }

    //atualizando a disponibilidade do livro
    livro.disponibilidade = true
    localStorage.setItem("lista de livros", JSON.stringify(ClasseLivro.vetorLivros))
    
    location.reload()
    
}