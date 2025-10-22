const capas = document.querySelectorAll(".ancora-autores-index")

capas.forEach(capa => {

    capa.addEventListener("click", function(evento){

        evento.preventDefault()

        sessionStorage.setItem("id_autor_redirecionamento", evento.currentTarget.id)

        window.location.href = "./src/html-paginas/autor.html"

    })
})