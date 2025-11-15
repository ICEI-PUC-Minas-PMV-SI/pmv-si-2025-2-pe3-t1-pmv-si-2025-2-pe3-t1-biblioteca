//cria um vetor com 6 livros correspondentes aos gêneros favoritos escolhidos pelo leitor

import { ClasseLivro } from "../js-classes/classe-livro.js"

export function selecionadosParaVoce(leitor){

    //recebe a quantidade de gêneros favoritos do leitor (1, 2 ou 3)
    const quantidade = leitor.meusGeneros.length

    //recebe o vetor com os gêneros favoritos do leitor
    const generos = leitor.meusGeneros

    //vetor que recebe todos os 48 livros cadastrados
    const todos = ClasseLivro.vetorLivros

    //vetor que vai receber os ISBNs dos livros que correspondem aos gêneros favoritos do leitor
    let livros = []

    //considerei que o carrossel de recomendações personalizadas terá sempre 6 livros. Portanto, se houver 1 gênero favorito apenas, todos os 6 livros do carrossel serão desse gênero:
    if(quantidade === 1){

        let i 

        for(i=0;i<48;i++){

            if(todos[i].genero === generos[0]){

                livros.push(todos[i])
            }     
        }  
    }

    //se houver 2 gêneros favoritos, haverá 3 livros do primeiro gênero e 3 livros do segundo gênero
    if(quantidade === 2){

        let i 

        for(i=0;i<48;i+=2){

            if(livros.length > 5){
                break
            }

            if(todos[i].genero === generos[0] || todos[i].genero === generos[1]){

                console.log(todos[i].genero)
                console.log(livros.length)
                livros.push(todos[i])
            }       
        }  
    }

    //se houver 3 gêneros favoritos, haverá 2 livros de cada gênero
    if(quantidade === 3){

        let i 

        for(i=0;i<48;i+=3){

            if(livros.length > 5){
                break
            }

            if(todos[i].genero === generos[0] || todos[i].genero === generos[1] || todos[i].genero === generos[2]){

                console.log(todos[i].genero)
                console.log(livros.length)
                livros.push(todos[i])
            }     

        }  
    }

    //joga os livros selecionados no local storage
    localStorage.setItem("livros de seus gêneros favoritos", JSON.stringify(livros))

    return livros

}