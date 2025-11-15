const capas = document.querySelectorAll(".p-ancora-capas-index")

capas.forEach(capa => {

    capa.addEventListener("click", function(evento){

        evento.preventDefault()

        sessionStorage.setItem("isbn_redirecionamento", evento.currentTarget.id.split("-")[1])

        window.location.href = "./src/html-paginas/livro.html"

    })
})