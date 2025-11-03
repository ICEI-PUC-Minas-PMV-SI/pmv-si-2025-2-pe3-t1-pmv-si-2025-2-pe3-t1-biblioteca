export class ClasseReserva{

     // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static vetorReservas = JSON.parse(localStorage.getItem("lista de reservas")) || []
    static numeroDeReservas = ClasseReserva.vetorReservas.length

    // aqui estão atributos específicos de cada objeto da classe (cada livro específico)
    idReserva
    idUsuario
    tomboLivro
    //indica a data e hora de solicitação da reserva
    dataHoraSolicitacao
    //formatação da data e hora de solicitação para um formato mais legível para pessoas
    dataHoraSolicitacaoFormatado
    //indica a data e hora limites para efetivamente coletar o livro
    dataHoraLimite
    //formatação da data e hora de expiração para um formato mais legível para pessoas
    dataHoraLimiteFormatado
    //indica o status da reserva: 'aguardando retirada' ou 'expirada'
    status

    //construtor de objetos reserva

    constructor (idReserva, idUsuario, tomboLivro, dataHoraSolicitacao, dataHoraLimite){

    this.idReserva = idReserva
    this.idUsuario = idUsuario
    this.tomboLivro = tomboLivro
    this.dataHoraSolicitacao = dataHoraSolicitacao
    this.dataHoraSolicitacaoFormatado = dataHoraSolicitacao.toLocaleString('pt-BR')
    this.dataHoraLimite = dataHoraLimite
    this.dataHoraLimiteFormatado = dataHoraLimite.toLocaleString('pt-BR')
    this.status = "Aguardando retirada"
    
    // a cada chamada de construtor bem sucedida, o contador de número de reservas é incrementado
        ClasseReserva.numeroDeReservas ++
    }

}