export class ClasseReserva{

     // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static vetorReservas = JSON.parse(localStorage.getItem("lista de reservas")) || []
    static numeroDeReservas = ClasseReserva.vetorReservas.length

    // aqui estão atributos específicos de cada objeto da classe (cada livro específico)
    idReserva
    idLeitor
    //como pode haver uma fila de reservas, esse atributo guarda a quantidade de usuários que está na sua frente na fila
    tamanhoFila
    tomboLivro
    //indica a data e hora de solicitação da reserva
    dataHoraSolicitacao
    //indica a data e hora limites para efetivamente coletar o livro
    dataHoraLimite

    //construtor de objetos reserva

    constructor (idReserva, idUsuario, tamanhoFila, tomboLivro, estaReservado, dataHoraSolicitacao, dataHoraLimite){

    this.idReserva = idReserva
    this.idUsuario = idUsuario
    this.tomboLivro = tomboLivro
    this.estaReservado = estaReservado
    this.dataHoraSolicitacao = dataHoraSolicitacao
    this.dataHoraLimite = dataHoraLimite
    
    // a cada chamada de construtor bem sucedida, o contador de número de reservas é incrementado
        ClasseReserva.numeroDeReservas ++
    }

}