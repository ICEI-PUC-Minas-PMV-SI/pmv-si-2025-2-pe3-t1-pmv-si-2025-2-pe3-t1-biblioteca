import { removerFavorito } from "../js-funcoes/funcao-favorito-remover-autor.js"

document.addEventListener("click", (e) => {

  const lixeira = e.target.closest("button.btn-trash")
  if (!lixeira) return

  e.preventDefault()
  
  const id = lixeira.id.split("-")[1]

  removerFavorito(id)

  location.reload()

})
