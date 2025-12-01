import { avaliarLivro, jaComentou } from "../js-funcoes/funcoes-avaliacao-livro.js"
import { ClasseLivro } from "../js-classes/classe-livro.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"
import { ClasseAvaliacaoLivro } from "../js-classes/classe-avaliacao-livro.js"

const botaoCancelar = document.getElementById("avaliacao-cancelar")
const botaoEnviar = document.getElementById("avaliacao-enviar")
const janelaAvaliacao = document.getElementById("janela-avaliacao-livro")
const botaoAdicionarAvaliacao = document.getElementById("adicionar-avaliacao")
const leitorLogado = localStorage.getItem("leitor logado") || ""

// encontrando o leitor logado e o livro da página
const leitor = ClasseLeitor.vetorLeitores.find(le => le.usuario === localStorage.getItem("leitor logado"))
const livro = ClasseLivro.vetorLivros.find(li => li.isbn === sessionStorage.getItem("isbn_redirecionamento"))

// if (leitorLogado === "") {
//     botaoAdicionarAvaliacao.style.display = "none"
// }

botaoAdicionarAvaliacao.addEventListener("click", (evento) => {

    evento.preventDefault()


    if(leitorLogado === ""){
        
        showAlertSync({
            title: "Usuário não logado",
            message: "Acesse sua conta para adicionar uma avaliação."
        })

        return
    } else if(!jaComentou(livro.isbn, leitor)){

        janelaAvaliacao.style.display = "flex"
        
    } else{

        janelaAvaliacao.style.display = "flex"

        let i
        for(i=0;i<ClasseAvaliacaoLivro.vetorAvaliacoes.length;i++){

            if(ClasseAvaliacaoLivro.vetorAvaliacoes[i].isbnLivro === livro.isbn && ClasseAvaliacaoLivro.vetorAvaliacoes[i].usuario === leitor.usuario){

                //recupera a estrela com o valor correto
                document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false)
                const alvo = document.querySelector(`input[name="rating"][value="${ClasseAvaliacaoLivro.vetorAvaliacoes[i].nota}"]`)
                if (alvo) alvo.checked = true

                //recupera o comentário que havia sido feito
                document.getElementById("comentario").value = ClasseAvaliacaoLivro.vetorAvaliacoes[i].comentario
            }
        }
    }

})

botaoCancelar.addEventListener("click", (evento) => {

    evento.preventDefault()

    //limpa valores que podem ter sido preenchidos
    document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false)
    const alvo = document.querySelector(`input[name="rating"][value=""]`)
    if (alvo) alvo.checked = true
    document.getElementById("comentario").value = ""

    janelaAvaliacao.style.display = "none"

    return

})


botaoEnviar.addEventListener("click", async (evento) => {

    evento.preventDefault()
    
    if(await avaliarLivro(leitor, livro)){

        window.location.reload()
    }

})

