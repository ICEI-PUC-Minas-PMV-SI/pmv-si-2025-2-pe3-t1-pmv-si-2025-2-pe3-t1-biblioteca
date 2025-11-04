export class ClasseReserva{

     // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static vetorReservas = JSON.parse(localStorage.getItem("lista de reservas")) || []
    static numeroDeReservas = ClasseReserva.vetorReservas.length

    // aqui estão atributos específicos de cada objeto da classe (cada livro específico)
    idReserva
    idUsuario
    tomboLivro
    //registra a hora de solicitação da reserva em formato matematicamente manipulável
    dataHoraSolicitacao
    //indica a data de solicitação da reserva em formato legível
    dataSolicitacao
    //indica o horário de solicitação da reserva em formato legível
    horarioSolicitacao
    //registra a hora limite para retirada do livro em formato matematicamente manipulável
    dataHoraLimite
    //indica a data limite em formato legível
    dataLimite
    //indica o horário limite em formato legível
    horarioLimite
    //indica o status da reserva: 'aguardando retirada' ou 'expirada'
    status

    //construtor de objetos reserva

    constructor (idReserva, idUsuario, tomboLivro, dataHoraSolicitacao, dataSolicitacao, horarioSolicitacao, dataHoraLimite, dataLimite, horarioLimite){

    this.idReserva = idReserva
    this.idUsuario = idUsuario
    this.tomboLivro = tomboLivro
    this.dataHoraSolicitacao = dataHoraSolicitacao
    this.dataSolicitacao = dataSolicitacao
    this.horarioSolicitacao = horarioSolicitacao
    this.dataHoraLimite = dataHoraLimite
    this.dataLimite = dataLimite
    this.horarioLimite = horarioLimite
    this.status = "Aguardando retirada"
    
    // a cada chamada de construtor bem sucedida, o contador de número de reservas é incrementado
        ClasseReserva.numeroDeReservas ++
    }

}