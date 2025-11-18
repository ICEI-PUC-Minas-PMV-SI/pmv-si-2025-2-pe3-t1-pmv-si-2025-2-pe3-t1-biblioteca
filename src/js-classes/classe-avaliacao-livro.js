export class ClasseAvaliacaoLivro{

    // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static chaveLS = "lista de avaliações - livros"
    static vetorAvaliacoes = JSON.parse(localStorage.getItem("lista de avaliações - livros")) || []
    static numeroDeAvaliacoes = ClasseAvaliacaoLivro.vetorAvaliacoes.length

    // aqui estão atributos específicos de cada objeto da classe (cada avaliação específica)
    //id sequencial
    idAvaliacaoLivro
    //id do leitor que realizou a avaliacao
    idLeitor
    //tombo do livro 
    tomboLivro
    //string com o título do livro
    tituloLivro
    //inteiro de 1 a 5
    nota
    //string para possíveis comentários
    comentario

    //construtor de objetos avaliacao
    constructor (id, idLeitor, tombo, nome, valor, comentario){

        this.idAvaliacaoLivro = id
        this.idLeitor = idLeitor
        this.tomboLivro = tombo
        this.tituloLivro = nome
        this.nota = valor 
        this.comentário = comentario

        // a cada chamada de construtor bem sucedida, o contador de avaliações é incrementado
        ClasseAvaliacaoLivro.numeroDeAvaliacoes ++
    }
}