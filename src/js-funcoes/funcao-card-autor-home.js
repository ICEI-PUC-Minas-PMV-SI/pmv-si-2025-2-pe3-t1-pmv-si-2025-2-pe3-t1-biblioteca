// o intuito dessa função é trocar as informações dos cards de acordo com o autor que está carregado no carrossel de autores

import { ClasseAutor } from "../js-classes/classe-autor.js"

export function carregarCards(id1, id2, id3, id4, id5, id6, id7, id8){

    const vetorids = [id1, id2, id3, id4, id5, id6, id7, id8]

    const cardNomes = document.querySelectorAll(".container_card-nome")
    const cardDescricao = document.querySelectorAll(".container_card-bio")

    let vetorNomes = []
    let vetorDescricoesCurtas = []
    let x
    let y

    //encontrando os títulos e descrições curtas dos Autores mais acessados, em ordem
    for(x=0;x<vetorids.length;x++){

        for(y=0; y<ClasseAutor.vetorAutores.length;y++){

            if(ClasseAutor.vetorAutores[y].id === vetorids[x]){

                vetorNomes.push(ClasseAutor.vetorAutores[y].nome)
                vetorDescricoesCurtas.push(ClasseAutor.vetorAutores[y].descricaoCurta)
            }
        }  
    }

    let i

    for(i=0; i<cardNomes.length; i++){

        //substitui o conteúdo do título do card
        document.getElementById(`nome-autor-${i+1}`).textContent = vetorNomes[i]
        //substitui o conteúdo da descricao do card
        document.getElementById(`bio-${i+1}`).textContent = vetorDescricoesCurtas[i]

    }

}