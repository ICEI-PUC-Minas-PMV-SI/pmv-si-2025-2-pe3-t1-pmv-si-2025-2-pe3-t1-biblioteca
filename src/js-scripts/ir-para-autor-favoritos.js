document.addEventListener("click", (e) => {
  const capa = e.target.closest("a.capa-favorito")
  if (!capa) return

  e.preventDefault()
  sessionStorage.setItem("id_autor_redirecionamento", (capa.id))
  window.location.href = "./autor.html"
})
