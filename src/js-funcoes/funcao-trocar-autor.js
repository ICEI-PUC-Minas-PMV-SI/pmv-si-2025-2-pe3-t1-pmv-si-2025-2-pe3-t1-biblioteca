import { ClasseAutor } from "../js-classes/classe-autor.js"

export function trocarAutor(id){

    let i 

    for(i=0; i<ClasseAutor.vetorAutores.length; i++){

        if(ClasseAutor.vetorAutores[i].id === id) {

        
            const nome = ClasseAutor.vetorAutores[i].nome
            const descricao = ClasseAutor.vetorAutores[i].descricaoLonga
            const nacionalidade = ClasseAutor.vetorAutores[i].nacionalidade
            const genero = ClasseAutor.vetorAutores[i].generos[0]
          

            document.getElementById("foto").src = `../img/fotos-autores/${id}.jpg`
            document.getElementById("nome-autor").textContent = nome
            document.getElementById("genero").textContent = genero
            document.getElementById("nacionalidade").textContent = nacionalidade
            document.getElementById("bio").textContent = descricao

            break
        }
    }

}

