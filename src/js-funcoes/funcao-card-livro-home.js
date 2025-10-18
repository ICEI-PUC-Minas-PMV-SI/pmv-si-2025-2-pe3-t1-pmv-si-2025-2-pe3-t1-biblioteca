// o intuito dessa função é trocar as informações dos cards de acordo com o livro que está carregado no carrossel de livros

import { ClasseLivro } from "../js-classes/classe-livro.js"

export function carregarCards(isbn1, isbn2, isbn3, isbn4, isbn5, isbn6, isbn7, isbn8){

    const vetorISBNs = [isbn1, isbn2, isbn3, isbn4, isbn5, isbn6, isbn7, isbn8]

    const cardTitulos = document.querySelectorAll(".container_card-titulo")
    const cardDescricao = document.querySelectorAll(".container_card-descricao")

    let vetorTitulos = []
    let vetorDescricoesCurtas = []
    let x
    let y

    //encontrando os títulos e descrições curtas dos livros mais acessados, em ordem
    for(x=0;x<vetorISBNs.length;x++){

        for(y=0; y<ClasseLivro.vetorLivros.length;y++){

            if(ClasseLivro.vetorLivros[y].isbn === vetorISBNs[x]){

                vetorTitulos.push(ClasseLivro.vetorLivros[y].titulo)
                vetorDescricoesCurtas.push(ClasseLivro.vetorLivros[y].descricaoCurta)
            }
        }  
    }

    let i

    for(i=0; i<cardTitulos.length; i++){

        //substitui o conteúdo do título do card
        document.getElementById(`titulo-${i+1}`).textContent = vetorTitulos[i]
        //substitui o conteúdo da descricao do card
        document.getElementById(`descricao-${i+1}`).textContent = vetorDescricoesCurtas[i]

    }

}