import { trocarLivro } from "../js-funcoes/funcao-trocar-livro.js"
import { ClasseLivro } from "../js-classes/classe-livro.js"
import { ClasseGenero} from "../js-classes/classe-genero.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { titulosSemelhantesTitulo, titulosSemelhantesISBN } from "../js-funcoes/funcao-titulos-semelhantes.js"
import { carregarAncorasCarrossel } from "../js-funcoes/funcao-carrosel-livro.js"
import { salvarTopAcessos} from "../js-funcoes/funcao-livros-mais-acessados.js"
import { salvarTopAcessosGeneros} from "../js-funcoes/funcao-generos-mais-acessados.js"
import { persistirLike } from "../js-funcoes/funcao-favorito-persistir.js"
import { calcularMediaLivro, listarAvaliacoes, preencherBarras, preencherEstrelas, quantidadeAvaliacoes, jaComentou } from "../js-funcoes/funcoes-avaliacao-livro.js"
import { ClasseAvaliacaoLivro } from "../js-classes/classe-avaliacao-livro.js"


//encontrando o objeto leitor
const usuarioLogado = localStorage.getItem("leitor logado") || ""
let leitor

let n

for(n=0; n<ClasseLeitor.vetorLeitores.length;n++){

    if(ClasseLeitor.vetorLeitores[n].usuario === usuarioLogado){

        leitor = ClasseLeitor.vetorLeitores[n]

        break
    }
}

//encontrando o isbn do livro
const isbn = sessionStorage.getItem("isbn_redirecionamento")

let livro

let i

for(i=0; i<ClasseLivro.vetorLivros.length;i++){

    if(ClasseLivro.vetorLivros[i].isbn === isbn){
        livro = ClasseLivro.vetorLivros[i]
        break
    }
}


window.addEventListener("DOMContentLoaded", () => {

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


    if(!usuarioLogado){
        return
    }

    let vetorFavoritos = []

    vetorFavoritos = leitor.meusFavoritos

    persistirLike(vetorFavoritos)

    // daqui pra baixo serão as chamadas de funções relacionadas às avaliações

    const media = calcularMediaLivro(isbn)

    preencherEstrelas(media)

    document.getElementById("quantidade-avaliacoes").textContent = `${quantidadeAvaliacoes(isbn)} classificaçoes`

    if(quantidadeAvaliacoes(isbn) === 0){

        document.querySelector("#rating-media-topo .rating-display__stars").title = "Esse livro ainda não recebeu classificações"
    }
    if(quantidadeAvaliacoes(isbn)>0){


        if(quantidadeAvaliacoes(isbn) === 1){

            document.getElementById("quantidade-avaliacoes").textContent = "1 classificação"
        }
        else{
        document.getElementById("quantidade-avaliacoes").textContent = `${quantidadeAvaliacoes(isbn)} classificações`
        }
        document.getElementById("nota-avaliacao").textContent = String(media).replace(".",",")
        document.getElementById("nota-avaliacao").style.fontSize = "5.0rem";
    }

    preencherBarras(isbn)

    listarAvaliacoes(isbn, leitor)

    //encontrando o id do comentário que pertence ao leitor, caso exista
    let z
    let idAvaliacaoLivro

    for(z=0; z<ClasseAvaliacaoLivro.vetorAvaliacoes.length;z++){

        if(ClasseAvaliacaoLivro.vetorAvaliacoes[z].usuario === leitor.usuario && ClasseAvaliacaoLivro.vetorAvaliacoes[z].isbnLivro === isbn){

          idAvaliacaoLivro = ClasseAvaliacaoLivro.vetorAvaliacoes[z].idAvaliacaoLivro
          break
        }
    }

    //escondendo a lixeira das avaliações que não pertencem ao leitor logado
    const manter = `lixeira-${idAvaliacaoLivro}` 
    const lixeiras = document.querySelectorAll('[id^="lixeira-"]')

    lixeiras.forEach(el => {
        if (el.id === manter) {
             el.style.display = ""     
        } else {
            el.style.display = "none" 
        }
    })

    if(jaComentou(isbn, leitor)){

        const botao = document.getElementById("adicionar-avaliacao")

        const texto = document.getElementById("texto-botao-avaliacao-livro")
        texto.textContent = "Editar sua avaliação"
    
        const lapis = document.createElement("img")
        lapis.src = "../img/icone_lapis_branco.svg"
        lapis.classList.add("icone-lapis")
        botao.appendChild(lapis)

        botao.title = "Você já avaliou esse livro. Clique para editar sua avaliação."
    }
})