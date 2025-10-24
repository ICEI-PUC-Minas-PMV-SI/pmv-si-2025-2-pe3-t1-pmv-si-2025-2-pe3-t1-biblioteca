export class ClasseGenero{

    static chaveLS = "lista de gêneros"
    static vetorGeneros = JSON.parse(localStorage.getItem(ClasseGenero.chaveLS)) || []
   
    id
    nomeGenero
    // para o sistema de recomendações, pode ser útil um gênero ter "gêneros irmãos" e "gêneros primos"
    generoIrmao 
    generoPrimo 

    //contador de acessos para o sistema de recomendação:
    numeroDeAcessos

    constructor(id, nomeGenero, generoIrmao, generoPrimo, numeroDeAcessos){

        this.id = id
        this.nomeGenero = nomeGenero
        this.generoIrmao = generoIrmao
        this.generoPrimo = generoPrimo
        this.numeroDeAcessos = numeroDeAcessos
    }


}