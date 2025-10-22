import { ClasseAutor } from "../js-classes/classe-autor.js"
//atribui o id dos livros correspondentes como id das âncoras do carrossel de recomendações da página de cada livro

//estou colocando a função como assíncrona porque ela estava acontecendo antes do carregamento do DOM na página do livro, então não estava pegando as âncoras no querySelectorAll
export async function carregarAncorasCarrossel(id1, id2, id3, id4, id5){


    await new Promise(resolve => setTimeout(resolve, 500))

    
    //carregando os ids das âncoras
    const vetorids = [id1, id2, id3, id4, id5]

    const ancoras = document.querySelectorAll(".ancora-carrossel-autor")

    let i

    for(i=0; i<ancoras.length; i++){

        //atribui como id de cada âncora do carrossel o id do autor correspondente
        ancoras[i].id =  vetorids[i]
       
    }


}