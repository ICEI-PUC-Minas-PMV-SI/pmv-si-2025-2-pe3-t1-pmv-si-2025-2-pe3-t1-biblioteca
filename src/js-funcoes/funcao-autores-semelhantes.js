import { ClasseAutor } from "../js-classes/classe-autor.js"

export function autoresSemelhantesId(id, genero, generoIrmao){

    let i
    let vetorSemelhantes = []

    for(i=0; i<ClasseAutor.vetorAutores.length;i++){

        if((ClasseAutor.vetorAutores[i].generos[0] === genero || ClasseAutor.vetorAutores[i].generos[0] === generoIrmao) && ClasseAutor.vetorAutores[i].id != id){

            vetorSemelhantes.push(ClasseAutor.vetorAutores[i].id)
        }
    }

    return vetorSemelhantes
}

export function autoresSemelhantesNome(id, genero, generoIrmao){

    let i
    let vetorSemelhantes = []

    for(i=0; i<ClasseAutor.vetorAutores.length;i++){

        if((ClasseAutor.vetorAutores[i].generos[0] === genero || ClasseAutor.vetorAutores[i].generos[0] === generoIrmao) && ClasseAutor.vetorAutores[i].id != id){

            vetorSemelhantes.push(ClasseAutor.vetorAutores[i].nome)
        }
    }

    return vetorSemelhantes
}