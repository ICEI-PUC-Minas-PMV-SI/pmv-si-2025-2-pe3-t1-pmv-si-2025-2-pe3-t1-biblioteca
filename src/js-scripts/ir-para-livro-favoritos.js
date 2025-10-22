document.addEventListener("click", (e) => {
  const capa = e.target.closest("a.capa-favorito")
  if (!capa) return

  e.preventDefault()
  sessionStorage.setItem("isbn_redirecionamento", (capa.id))
  window.location.href = "./livro.html"
})
