import { removerSelecao } from "../js-funcoes/funcao-remover-selecao.js"

document.addEventListener("click", (e) => {

  const lixeira = e.target.closest("button.btn-trash")
  if (!lixeira) return

  e.preventDefault()
  
  const isbn = lixeira.id.split("-")[1]
  
  removerSelecao(isbn)

  location.reload()

})