import { avaliarAutor, jaComentou } from "../js-funcoes/funcoes-avaliacao-autor.js"
import { ClasseAutor } from "../js-classes/classe-autor.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"
import { ClasseAvaliacaoAutor } from "../js-classes/classe-avaliacao-autor.js"

const botaoCancelar = document.getElementById("avaliacao-cancelar")
const botaoEnviar = document.getElementById("avaliacao-enviar")
const janelaAvaliacao = document.getElementById("janela-avaliacao-autor")
const botaoAdicionarAvaliacao = document.getElementById("adicionar-avaliacao")
const leitorLogado = localStorage.getItem("leitor logado") || ""

// encontrando o leitor logado e o livro da página
const leitor = ClasseLeitor.vetorLeitores.find(le => le.usuario === localStorage.getItem("leitor logado"))
const autor = ClasseAutor.vetorAutores.find(a => a.id === sessionStorage.getItem("id_autor_redirecionamento"))

botaoAdicionarAvaliacao.addEventListener("click", (evento) => {

    evento.preventDefault()


    if(leitorLogado === ""){

        showAlertSync({
            title: "Usuário não logado",
            message: "Acesse sua conta para adicionar uma avaliação."
        })

        return
    } else if(!jaComentou(autor.id, leitor)){

        janelaAvaliacao.style.display = "flex"
        
    } else{

        janelaAvaliacao.style.display = "flex"

        let i
        for(i=0;i<ClasseAvaliacaoAutor.vetorAvaliacoes.length;i++){

            if(ClasseAvaliacaoAutor.vetorAvaliacoes[i].idAutor === autor.id && ClasseAvaliacaoAutor.vetorAvaliacoes[i].usuario === leitor.usuario){

                //recupera a estrela com o valor correto
                document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false)
                const alvo = document.querySelector(`input[name="rating"][value="${ClasseAvaliacaoAutor.vetorAvaliacoes[i].nota}"]`)
                if (alvo) alvo.checked = true

                //recupera o comentário que havia sido feito
                document.getElementById("comentario").value = ClasseAvaliacaoAutor.vetorAvaliacoes[i].comentario
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
    
    if(await avaliarAutor(leitor, autor)){

        window.location.reload()
    }

})

