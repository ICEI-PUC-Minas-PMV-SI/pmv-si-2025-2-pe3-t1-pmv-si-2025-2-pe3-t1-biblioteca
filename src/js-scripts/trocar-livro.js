import { trocarLivro } from "../js-funcoes/funcao-trocar-livro.js"
import { ClasseLivro } from "../js-classes/classe-livro.js"
import { ClasseGenero} from "../js-classes/classe-genero.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { titulosSemelhantesTitulo, titulosSemelhantesISBN } from "../js-funcoes/funcao-titulos-semelhantes.js"
import { carregarAncorasCarrossel } from "../js-funcoes/funcao-carrosel-livro.js"
import { salvarTopAcessos} from "../js-funcoes/funcao-livros-mais-acessados.js"
import { salvarTopAcessosGeneros} from "../js-funcoes/funcao-generos-mais-acessados.js"
import { persistirLike } from "../js-funcoes/funcao-favorito-persistir.js"


window.addEventListener("DOMContentLoaded", () => {

    //trecho que carrega as informações do livro
    const isbn = sessionStorage.getItem("isbn_redirecionamento")

    trocarLivro(isbn)

    //trecho que carrega o carrossel de livros semelhantes

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
        document.getElementById(`capa-${j+1}`).title = vetorSemelhantesTitulo[j]
    }

    carregarAncorasCarrossel(vetorSemelhantesISBN[0],vetorSemelhantesISBN[1],vetorSemelhantesISBN[2],vetorSemelhantesISBN[3],vetorSemelhantesISBN[4])

    // incrementa o número de acessos do livro
    ClasseLivro.vetorLivros[i].numeroDeAcessos++

    //esse trecho é para incrementar o número de acessos do objeto gênero associado ao livro
    let k

    for(k=0;k<8;k++){

        if (livro.genero === ClasseGenero.vetorGeneros[k].nomeGenero){

            ClasseGenero.vetorGeneros[k].numeroDeAcessos++

            break
        }
    }

    //atualiza a lista de gêneros no local storage
    localStorage.setItem("lista de gêneros", JSON.stringify(ClasseGenero.vetorGeneros))

    //atualiza a lista de livros no local storage
    localStorage.setItem("lista de livros", JSON.stringify(ClasseLivro.vetorLivros))

    //chama a função que salva o vetor de 8 livros mais acessados no local storage
    salvarTopAcessos(8)
    //chama a função que salva o vetor de 3 gêneros mais acessados no local storage
    salvarTopAcessosGeneros(3)

    //trecho que permite a persistência do like

    const usuarioLogado = localStorage.getItem("leitor logado")

    if(!usuarioLogado){
        return
    }

    let vetorFavoritos = []

    let leitor

    let n

    for(n=0; n<ClasseLeitor.vetorLeitores.length;n++){

        if(ClasseLeitor.vetorLeitores[n].usuario === usuarioLogado){

            leitor = ClasseLeitor.vetorLeitores[n]

            break
        }
    }

    vetorFavoritos = leitor.meusFavoritos

    persistirLike(vetorFavoritos)

    

})