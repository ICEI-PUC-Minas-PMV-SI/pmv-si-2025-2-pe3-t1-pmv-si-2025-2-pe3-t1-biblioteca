import { removerAvaliacao } from "../js-funcoes/funcoes-avaliacao-livro.js"
import { ClasseAvaliacaoLivro } from "../js-classes/classe-avaliacao-livro.js"
import { showAlertSync, showConfirmSync } from "../js-funcoes/funcoes-de-dialogo.js"

document.addEventListener("click", (e) => {

    const lixeira = e.target.closest("button.btn-trash")
    if (!lixeira) return

    e.preventDefault()

    const idAvaliacao = parseInt(lixeira.id.split("-")[1])

    //encontrando a avaliação
    let i
    let avaliacao

    for(i=0; i<ClasseAvaliacaoLivro.vetorAvaliacoes.length;i++){

        if(ClasseAvaliacaoLivro.vetorAvaliacoes[i].idAvaliacaoLivro === idAvaliacao){

            avaliacao = ClasseAvaliacaoLivro.vetorAvaliacoes[i]

            break

        }
    }

    showConfirmSync(
        {
          title: "Prosseguir com a remoção",
          message: "Deseja remover essa avaliação?",
          confirmText: "Remover a avaliação",
          cancelText: "Manter a avaliação",
        },
        (ok) => {
          if (!ok) return
    
          
            removerAvaliacao(avaliacao)
            
            window.location.reload()
        }
         
    )
      
})
