//atribui o ID dos gêneros correspondentes como id das âncoras da seção "Em alta"

import { ClasseGenero } from "../js-classes/classe-genero.js"

//estou colocando a função como assíncrona porque ela estava acontecendo antes do carregamento do DOM no index, então não estava pegando as âncoras no querySelectorAll
export async function carregarEmAlta(id1, id2, id3){

    await new Promise(resolve => setTimeout(resolve, 500))

    const vetorIDs = [id1, id2, id3]

    const ancoras = document.querySelectorAll(".ancoras-em-alta")

    let i

    for(i=0; i<ancoras.length; i++){

        //atribui como id de cada âncora da seção o id do gênero correspondente
        ancoras[i].id =  vetorIDs[i]
       
    }

    let j
    let k

    for(j=0;j<ClasseGenero.vetorGeneros.length;j++){

        for(k=0;k<ancoras.length;k++){

            if(ClasseGenero.vetorGeneros[j].id === ancoras[k].id){
                
                document.getElementById(ancoras[k].id).textContent = ClasseGenero.vetorGeneros[j].nomeGenero
                document.getElementById(ancoras[k].id).title = `Clique para buscar livros de ${ClasseGenero.vetorGeneros[j].nomeGenero.toLowerCase()}`
            }
        }   
    }  
}