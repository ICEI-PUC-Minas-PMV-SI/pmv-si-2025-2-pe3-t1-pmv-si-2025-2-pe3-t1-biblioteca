import { ClasseGenero } from "../js-classes/classe-genero.js"

const CATALOGO_GENEROS = [

    {
        id: "001",
        nomeGenero: "Filosofia",
        generoIrmao: "Divulgação científica",
        generoPrimo: "Ficção científica",
        numeroDeAcessos: 0
    },
    {
        id: "002",
        nomeGenero: "Divulgação científica",
        generoIrmao: "Filosofia",
        generoPrimo: "Sociologia",
        numeroDeAcessos: 0
    },
    {
        id: "003",
        nomeGenero: "Psicologia",
        generoIrmao: "Sociologia",
        generoPrimo: "Divulgação científica",
        numeroDeAcessos: 0
    },
    {
        id: "004",
        nomeGenero: "Sociologia",
        generoIrmao: "Psicologia",
        generoPrimo: "Filosofia",
        numeroDeAcessos: 0
    },
    {
        id: "005",
        nomeGenero: "Ficção científica",
        generoIrmao: "Mistério",
        generoPrimo: "Fantasia",
        numeroDeAcessos: 0
    },
    {
        id: "006",
        nomeGenero: "Mistério",
        generoIrmao: "Ficção científica",
        generoPrimo: "Romance",
        numeroDeAcessos: 0
    },
    {
        id: "007",
        nomeGenero: "Romance",
        generoIrmao: "Fantasia",
        generoPrimo: "Psicologia",
        numeroDeAcessos: 0
    },
    {
        id: "008",
        nomeGenero: "Fantasia",
        generoIrmao: "Romance",
        generoPrimo: "Mistério",
        numeroDeAcessos: 0
    }
]

export function seedGenerosVersora(){

    //limpa o vetor atual
    ClasseGenero.vetorGeneros.length = 0

    CATALOGO_GENEROS.forEach((m) => {

        const genero = new ClasseGenero(

            m.id,
            m.nomeGenero,
            m.generoIrmao,
            m.generoPrimo,
            m.numeroDeAcessos
        )

        ClasseGenero.vetorGeneros.push(genero)
    })

    localStorage.setItem(ClasseGenero.chaveLS, JSON.stringify(ClasseGenero.vetorGeneros));

}