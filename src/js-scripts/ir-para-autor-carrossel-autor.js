const capas = document.querySelectorAll(".ancora-carrossel-autor")

capas.forEach(foto => {

    foto.addEventListener("click", function(evento){

        evento.preventDefault()

        sessionStorage.setItem("id_autor_redirecionamento", evento.currentTarget.id)

        window.location.href = "./autor.html"

    })
})