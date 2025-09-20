export class ClasseLeitor {

    // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static vetorLeitores = JSON.parse(localStorage.getItem("lista de leitores")) || []
    static numeroDeLeitores
    //recebe o nome de usuário do leitor logado no ato de login
    static leitorLogado

    // aqui estão atributos específicos de cada objeto da classe (cada leitor específico)
    id
    usuario
    nome 
    sobrenome
    cpf
    telefone
    email
    cep
    rua
    numeroFachada
    bairro
    cidade
    estado
    meusGeneros = []
    senha
    
    // contrutor de objetos leitor
    constructor (id, usuario, nome, sobrenome, cpf, telefone, email, cep, rua, numeroFachada, bairro, cidade, estado, meusGeneros, senha) {

        this.id = id
        this.usuario = usuario
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.telefone = telefone
        this.email = email
        this.cep = cep
        this.rua = rua
        this.numeroFachada = numeroFachada
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.meusGeneros = meusGeneros
        this.senha = senha

        // a cada chamada de construtor bem sucedida, o contador de número de leitores é incrementado
        ClasseLeitor.numeroDeLeitores ++

    }
}