export class ClasseAutor{

    // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static chaveLS = "lista de autores"
    static vetorAutores = JSON.parse(localStorage.getItem("lista de autores")) || []
    static numeroDeAutores = ClasseAutor.vetorAutores.length

    // aqui estão atributos específicos de cada objeto da classe (cada autor específico)
    id
    nome
    descricaoCurta
    descricaoLonga
    nacionalidade
    generos = []
    generoIrmao
    titulos = []
    numeroDeAcessos = 0
    dataDeCadastro
    
    constructor(id, nome, descricaoCurta, descricaoLonga, nacionalidade, generos, generoIrmao, titulos, dataDeCadastro){

        this.id = id
        this.nome = nome
        this.descricaoCurta = descricaoCurta
        this.descricaoLonga = descricaoLonga
        this.nacionalidade = nacionalidade
        this.generos = generos
        this.generoIrmao = generoIrmao
        this.titulos = titulos
        this.dataDeCadastro = dataDeCadastro

         // a cada chamada de construtor bem sucedida, o contador de número de autores é incrementado
        ClasseAutor.numeroDeAutores ++
    }
}