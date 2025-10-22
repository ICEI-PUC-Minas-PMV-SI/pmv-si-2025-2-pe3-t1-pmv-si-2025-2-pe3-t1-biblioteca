import { removerFavorito } from "../js-funcoes/funcao-favorito-remover.js"

document.addEventListener("click", (e) => {

  const lixeira = e.target.closest("button.btn-trash")
  if (!lixeira) return

  e.preventDefault()
  
  const isbn = lixeira.id.split("-")[1]

  removerFavorito(isbn)

  location.reload()

})
