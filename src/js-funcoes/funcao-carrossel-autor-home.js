//atribui o id dos autores correspondentes como id das âncoras do carrossel de autores mais acessados na página inicial

import { ClasseAutor } from "../js-classes/classe-autor.js"

export function carregarAncorasCarrossel(id1, id2, id3, id4, id5, id6, id7, id8){

    const vetorids = [id1, id2, id3, id4, id5, id6, id7, id8]

    const ancoras = document.querySelectorAll(".ancora-autores-index")

    let i

    for(i=0; i<ancoras.length; i++){

        //atribui como id de cada âncora do carrossel o id do Autor correspondente
        ancoras[i].id =  vetorids[i]
    }

    let j
    let k

    for(j=0;j<ClasseAutor.vetorAutores.length;j++){

        for(k=0;k<ancoras.length;k++){

            if(ClasseAutor.vetorAutores[j].id === ancoras[k].id){
                
                document.getElementById(`foto-${k+1}`).src = `./src/img/fotos-autores/${ClasseAutor.vetorAutores[j].id}.jpg`
                document.getElementById(`foto-${k+1}`).alt = ClasseAutor.vetorAutores[j].nome
            }
        }   
    }     
}