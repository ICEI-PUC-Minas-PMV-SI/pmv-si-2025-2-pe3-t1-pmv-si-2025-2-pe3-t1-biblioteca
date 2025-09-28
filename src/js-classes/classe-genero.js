export class ClasseGenero{

    static vetorGeneros = []
    static numeroGeneros

    nomeGenero
    // para o sistema de recomendações, pode ser útil um gênero ter "gêneros irmãos":
    gererosRelacionados = []
    //contador de acessos para o sistema de recomendação:
    numeroDeAcessos = 0

    
}