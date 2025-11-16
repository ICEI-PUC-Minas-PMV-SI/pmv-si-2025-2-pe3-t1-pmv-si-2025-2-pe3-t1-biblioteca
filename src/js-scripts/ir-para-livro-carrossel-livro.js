const capas = document.querySelectorAll(".mais-acessados")

capas.forEach(capa => {

    capa.addEventListener("click", function(evento){

        evento.preventDefault()

        sessionStorage.setItem("isbn_redirecionamento", evento.currentTarget.id)

        window.location.href = "./livro.html"

    })
})