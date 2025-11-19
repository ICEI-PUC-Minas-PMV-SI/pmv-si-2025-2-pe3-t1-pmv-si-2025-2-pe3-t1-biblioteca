import { removerSelecao } from "../js-funcoes/funcao-remover-selecao.js"

document.addEventListener("click", (e) => {

  const lixeira = e.target.closest("button.btn-trash")
  if (!lixeira) return

  e.preventDefault()
  
  const isbn = lixeira.id.split("-")[1]
  
  showConfirmSync(
    {
      title: "Prosseguir com o cancelamento",
      message: "Deseja cancelar sua seleção?",
      confirmText: "Cancelar essa seleção",
      cancelText: "Manter essa seleção",
    },
    (ok) => {
      if (!ok) return

      // Mostra o alerta e SÓ DEPOIS executa o cancelamento
      showAlertSync(
        {
          title: "Seleção cancelada",
          message: "Sua seleção foi cancelada, mas você ainda pode buscar esse livro em nosso acervo.",
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