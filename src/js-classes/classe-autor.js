export class ClasseAutor{

    // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static vetorAutores = JSON.parse(localStorage.getItem("lista de autores")) || []
    static numeroDeAutores

    // aqui estão atributos específicos de cada objeto da classe (cada autor específico)
    id
    primeiroNome
    sobrenome
    descricao
    //booleano que indica se o autor é brasileiro (true) ou estrangeiro(false)
    eBrasileiro
    generos = []
    titulos = []
    
    constructor(id, primeiroNome, sobrenome, descricao, generos, titulos){

        this.id = id
        this.primeiroNome = primeiroNome
        this.sobrenome = sobrenome
        this.descricao = descricao
        this.generos = generos
        this.titulos = titulos

         // a cada chamada de construtor bem sucedida, o contador de número de autores é incrementado
        ClasseAutor.numeroDeAutores ++
    }
}