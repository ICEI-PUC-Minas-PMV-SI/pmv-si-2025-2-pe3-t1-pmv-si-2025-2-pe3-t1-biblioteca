const capas = document.querySelectorAll(".capa-ancora")

capas.forEach(capa => {

    capa.addEventListener("click", function(evento){

        evento.preventDefault()

        sessionStorage.setItem("isbn_redirecionamento", evento.currentTarget.id)

        window.location.href = "./livro.html"

    })

})