export class ClasseLeitor {

    // aqui estão atributos estáticos, que pertencem à classe como um todo e não a objetos específicos
    static vetorLeitores = JSON.parse(localStorage.getItem("lista de leitores")) || []
    static numeroDeLeitores = ClasseLeitor.vetorLeitores.length
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
    rua
    numeroFachada
    bairro
    cidade
    estado
    senha
    
    // contrutor de objetos leitor
    constructor (id, usuario, nome, sobrenome, cpf, telefone, email, rua, numeroFachada, bairro, cidade, estado, senha) {

        this.id = id
        this.usuario = usuario
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.telefone = telefone
        this.email = email
        this.rua = rua
        this.numeroFachada = numeroFachada
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.senha = senha

        // a cada chamada de construtor bem sucedida, o contador de número de leitores é incrementado
        ClasseLeitor.numeroDeLeitores ++

    }
}