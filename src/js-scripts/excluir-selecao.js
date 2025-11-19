import { showConfirmSync, showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"
import { removerSelecao } from "../js-funcoes/funcao-remover-selecao.js"

document.addEventListener("click", (e) => {

  const lixeira = e.target.closest("button.btn-trash")
  if (!lixeira) return

  e.preventDefault()
  
  const isbn = lixeira.id.split("-")[1]
  
  showConfirmSync(
    {
      title: "Prosseguir com a remoção",
      message: "Deseja remover esse livro de sua seleção?",
      confirmText: "Remover esse livro",
      cancelText: "Manter esse livro",
    },
    (ok) => {
      if (!ok) return

      // Mostra o alerta e SÓ DEPOIS executa o cancelamento
      showAlertSync(
        {
          title: "Livro removido",
          message: "O livro foi removido de sua seleção, mas você ainda pode buscar esse livro em nosso acervo.",
          okText: "OK",
        },
        () => {
          removerSelecao(isbn)

          location.reload()
        }
      )
    }
  )

})