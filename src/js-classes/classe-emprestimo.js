export class ClasseEmprestimo{

     // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static vetorEmprestimos = JSON.parse(localStorage.getItem("lista de esmprestimos")) || []
    static numeroDeEmprestimos = ClasseEmprestimo.vetorEmprestimos.length

    // aqui estão atributos específicos de cada objeto da classe (cada emprestimo específico)
    idEmprestimo
    idLeitor
    idBibliotecario
    tomboLivro
    //indica a data da coleta do livro
    dataEmprestimo
    //indica a data inicial para devolução do livro
    dataDevolucao
    //booleano que indica se houve pedido de prolongamento do empréstimo
    foiProlongado
    //indica a nova data de devolução após o prolongamento do empréstimo
    dataProlongamento
    // indica se o empréstimo está em vigor ou se foi finalizado
    estaAtivo

    //construtor de objetos empréstimo

    constructor (idemprestimo, idUsuario, tomboLivro, estaEmprestado, dataEmprestimo, dataDevolucao, foiProlongado){

    this.idemprestimo = idemprestimo
    this.idUsuario = idUsuario
    this.tomboLivro = tomboLivro
    this.estaEmprestado = estaEmprestado
    this.dataEmprestimo = dataEmprestimo
    this.dataDevolucao = dataDevolucao
    this.foiProlongado = false
    
    // a cada chamada de construtor bem sucedida, o contador de número de empréstimos é incrementado
        ClasseEmprestimo.numeroDeEmprestimos ++
    }

}