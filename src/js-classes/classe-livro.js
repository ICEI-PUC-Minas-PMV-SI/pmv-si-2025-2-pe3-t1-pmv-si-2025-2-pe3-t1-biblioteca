export class ClasseLivro{

    // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    //chave dos objetos no Local Storage
    static chaveLS = "lista de livros"
    static vetorLivros = JSON.parse(localStorage.getItem(ClasseLivro.chaveLS)) || []
    static numeroDeLivros = ClasseLivro.vetorLivros.length
    //conta o número de títulos distintos (um título pode ter mais de um exemplar)
    static numeroTitulos = 0

    // aqui estão atributos específicos de cada objeto da classe (cada livro específico)
    //obs: o "tombo" é o "id" de um livro no acervo
    tombo
     //"número de chamada" é a localização do livro nas estantes físicas
    numeroChamada
    isbn
    titulo
    autor
    genero
    editora
    edicao
    anoPublicacao
    numeroDePaginas
    idioma
    data_cadastro
    disponibilidade
    numeroDeAcessos = 0

    //atributos descritivos e visuais
    descricaoCurta
    sinopse
    capa

    //construtor de objetos livro
    constructor (tombo, numeroChamada, isbn, titulo, genero, editora, anoPublicacao, data_cadastro, disponibilidade, descricaoCurta, sinopse, capa){

        this.tombo = tombo
        this.numeroChamada = numeroChamada
        this.isbn = isbn
        this.isbn = isbn
        this.titulo = titulo
        this.genero = genero
        this.anoPublicacao = anoPublicacao
        this.editora = editora
        this.data_cadastro = data_cadastro
        this.disponibilidade = disponibilidade

        // a cada chamada de construtor bem sucedida, o contador de número de livros é incrementado
        ClasseLivro.numeroDeLivros ++
    }
}