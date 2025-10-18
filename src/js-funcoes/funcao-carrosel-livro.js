//atribui o ISBN dos livros correspondentes como id das âncoras do carrossel de recomendações da página de cada livro

//estou colocando a função como assíncrona porque ela estava acontecendo antes do carregamento do DOM na página do livro, então não estava pegando as âncoras no querySelectorAll
export async function carregarAncorasCarrossel(isbn1, isbn2, isbn3, isbn4, isbn5){


    await new Promise(resolve => setTimeout(resolve, 500))

    const vetorISBNs = [isbn1, isbn2, isbn3, isbn4, isbn5]

    const ancoras = document.querySelectorAll(".ancora-carrossel-livro")

    let i

    for(i=0; i<ancoras.length; i++){

        //atribui como id de cada âncora do carrossel o isbn do livro correspondente
        ancoras[i].id =  vetorISBNs[i]
       
    }

}