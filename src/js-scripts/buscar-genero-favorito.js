const container = document.querySelector(".seus-generos-favoritos")

if (container) {
  container.addEventListener("click", (evento) => {
    const genero = evento.target.closest(".ancora-genero-favorito")
    if (!genero) return

    evento.preventDefault()
    
    const busca = genero.textContent.trim()
    const KEY = "busca_genero_favorito"

    sessionStorage.setItem(KEY, busca)

    window.location.href = "./src/html-paginas/acervo.html"
  })
}
