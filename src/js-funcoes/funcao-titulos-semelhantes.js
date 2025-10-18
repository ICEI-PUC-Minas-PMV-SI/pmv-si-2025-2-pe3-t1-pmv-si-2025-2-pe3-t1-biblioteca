import { ClasseLivro } from "../js-classes/classe-livro.js"

export function titulosSemelhantesISBN(genero, isbn){

    let i

    let vetor = []

    for(i=0; i<ClasseLivro.vetorLivros.length; i++){

        if(ClasseLivro.vetorLivros[i].genero === genero && ClasseLivro.vetorLivros[i].isbn != isbn){

            vetor.push(ClasseLivro.vetorLivros[i].isbn)
        }
    }

    //retorna um vetor com o ISBN dos livros de mesmo gênero
    return vetor

}

export function titulosSemelhantesTitulo(genero, isbn){

    let i

    let vetor = []

    for(i=0; i<ClasseLivro.vetorLivros.length; i++){

        if(ClasseLivro.vetorLivros[i].genero === genero &&ClasseLivro.vetorLivros[i].isbn != isbn){

            vetor.push(ClasseLivro.vetorLivros[i].titulo)
        }
    }

    //retorna um vetor com o título dos livros de mesmo gênero
    return vetor

}