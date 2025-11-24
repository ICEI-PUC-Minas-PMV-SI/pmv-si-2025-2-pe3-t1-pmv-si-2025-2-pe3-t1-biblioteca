export class ClasseAvaliacaoAutor{

    // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static chaveLS = "lista de avaliações - autores"
    static vetorAvaliacoes = JSON.parse(localStorage.getItem("lista de avaliações - autores")) || []

    // aqui estão atributos específicos de cada objeto da classe (cada avaliação específica)
    //id sequencial
    idAvaliacaoAutor
    //texto contendo data de avaliação ou de edição da avaliação
    dataTexto
    //id do leitor que realizou a avaliacao
    idLeitor
    //nome de usuário do leitor que realizou a avaliaçao
    usuario
    //id do autor
    idAutor
    //string com o nome do autor
    nomeAutor
    //inteiro de 1 a 5
    nota
    //string para possíveis comentários
    comentario

    //construtor de objetos avaliacao
    constructor (id, dataTexto, idLeitor, usuario, idAutor, nomeAutor, valor, comentario){

        this.idAvaliacaoAutor = id
        this.dataTexto = dataTexto
        this.idLeitor = idLeitor
        this.usuario = usuario
        this.idAutor = idAutor
        this.nomeAutor = nomeAutor
        this.nota = valor 
        this.comentario = comentario
    }
}