//atribui o ISBN dos livros correspondentes como parte do id das âncoras do carrossel de livros recomendados após login do leitor, para referenciar corretamente o redirecionamento para a página do livro

export function carregarAncorasCarrosselPersonalizado(livros){

    const ancoras = document.querySelectorAll(".p-ancora-capas-index")

    let i

    for(i=0; i<ancoras.length; i++){

        //atribui como parte do id de cada âncora do carrossel o isbn do livro correspondente
        ancoras[i].id =  `p-${livros[i].isbn}`
    }

    let j

    for(j=0;j<ancoras.length;j++){

        console.log(livros[j].isbn)
        document.getElementById(`p-capa-${j+1}`).src = `./src/img/capas/${livros[j].isbn}.jpg`
        document.getElementById(`p-capa-${j+1}`).alt = livros[j].titulo
    }
                   
}