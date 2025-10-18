import { trocarLivro } from "../js-funcoes/funcao-trocar-livro.js"
import { ClasseLivro } from "../js-classes/classe-livro.js"
import { titulosSemelhantesTitulo, titulosSemelhantesISBN } from "../js-funcoes/funcao-titulos-semelhantes.js"
import { carregarAncorasCarrossel } from "../js-funcoes/funcao-carrosel-livro.js"
import { salvarTopAcessos} from "../js-funcoes/funcao-livros-mais-acessados.js"

window.addEventListener("DOMContentLoaded", () => {

    const isbn = sessionStorage.getItem("isbn_redirecionamento")

    trocarLivro(isbn)

    let livro

    let i

    for(i=0; i<ClasseLivro.vetorLivros.length;i++){

        if(ClasseLivro.vetorLivros[i].isbn === isbn){
            livro = ClasseLivro.vetorLivros[i]
            break
        }
    }

    const vetorSemelhantesISBN = titulosSemelhantesISBN(livro.genero, livro.isbn)
    const vetorSemelhantesTitulo = titulosSemelhantesTitulo(livro.genero, livro.isbn)

    let j

    for(j=0; j<5;j++){

        document.getElementById(`capa-${j+1}`).src = `../img/capas/${vetorSemelhantesISBN[j]}.jpg`
        document.getElementById(`capa-${j+1}`).alt = vetorSemelhantesTitulo[j]
    }

    carregarAncorasCarrossel(vetorSemelhantesISBN[0],vetorSemelhantesISBN[1],vetorSemelhantesISBN[2],vetorSemelhantesISBN[3],vetorSemelhantesISBN[4])

    // incrementa o número de acessos do livro
    ClasseLivro.vetorLivros[i].numeroDeAcessos++

    //atualiza a lista de livros no local storage
    localStorage.setItem("lista de livros", JSON.stringify(ClasseLivro.vetorLivros))

    //chama a função que salva o vetor de 8 livros mais acessados no local storage
    salvarTopAcessos(8)

})