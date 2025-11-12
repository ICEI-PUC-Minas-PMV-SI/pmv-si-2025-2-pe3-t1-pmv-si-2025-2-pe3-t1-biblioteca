// ../js-scripts/limite-generos.js
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"

document.addEventListener("DOMContentLoaded", () => {
  const max = 3
  const checkboxes = Array.from(document.querySelectorAll(".checkbox-genero"))

  const syncAnchorClass = (cb) => {
    const anchor = document.querySelector(`label[for="${cb.id}"] .ancora-genero`)
    if (anchor) anchor.classList.toggle("selecionado", cb.checked)
  }

  checkboxes.forEach((cb) => {
    // estado inicial (caso venha marcado por algum motivo)
    syncAnchorClass(cb)

    cb.addEventListener("change", function () {
      const marcados = checkboxes.filter(c => c.checked)

      if (marcados.length > max) {
        this.checked = false // desfaz a 4ª marcação
        showAlertSync({
          title: "Limite de gêneros",
          message: `Escolha no máximo ${max} gêneros favoritos.`
        })
        return
      }

      // mantém o estilo da âncora em sincronia com o checkbox
      syncAnchorClass(this)
    })
  })
})
