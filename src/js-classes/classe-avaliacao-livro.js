export class ClasseAvaliacaoLivro{

    // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static chaveLS = "lista de avaliações - livros"
    static vetorAvaliacoes = JSON.parse(localStorage.getItem("lista de avaliações - livros")) || []

    // aqui estão atributos específicos de cada objeto da classe (cada avaliação específica)
    //id sequencial
    idAvaliacaoLivro
    //texto contendo data de avaliação ou de edição da avaliação
    dataTexto
    //id do leitor que realizou a avaliacao
    idLeitor
    //nome de usuário do leitor que realizou a avaliaçao
    usuario
    //ISBN do livro 
    isbnLivro
    //string com o título do livro
    tituloLivro
    //inteiro de 1 a 5
    nota
    //string para possíveis comentários
    comentario

    //construtor de objetos avaliacao
    constructor (id, dataTexto, idLeitor, usuario, isbnLivro, tituloLivro, valor, comentario){

        this.idAvaliacaoLivro = id
        this.dataTexto = dataTexto
        this.idLeitor = idLeitor
        this.usuario = usuario
        this.isbnLivro = isbnLivro
        this.tituloLivro = tituloLivro
        this.nota = valor 
        this.comentario = comentario
    }
}