const capas = document.querySelectorAll(".ancora-capas-index")

capas.forEach(capa => {

    capa.addEventListener("click", function(evento){

        evento.preventDefault()

        sessionStorage.setItem("isbn_redirecionamento", evento.currentTarget.id)

        window.location.href = "./src/html-paginas/livro.html"

    })
})