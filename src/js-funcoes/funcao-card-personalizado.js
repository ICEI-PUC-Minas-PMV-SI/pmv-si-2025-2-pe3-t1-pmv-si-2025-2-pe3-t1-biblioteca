// o intuito dessa função é trocar as informações dos cards de acordo com o livro que está carregado no carrossel personalizado de livros

export function carregarCards(livros){


    // const cardTitulos = document.querySelectorAll(".p-container_card-titulo")

    // const cardDescricao = document.querySelectorAll(".p-container_card-descricao")

    let i

    for(i=0; i<livros.length; i++){

        //substitui o conteúdo do título do card
        document.getElementById(`p-titulo-${i+1}`).textContent = livros[i].titulo
        //substitui o conteúdo da descricao do card
        document.getElementById(`p-descricao-${i+1}`).textContent = livros[i].descricaoCurta

    }

}