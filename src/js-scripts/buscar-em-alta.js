const emAltaBuscar = document.querySelectorAll(".ancoras-em-alta");

emAltaBuscar.forEach(genero => {

    genero.addEventListener("click", function (evento) {
        evento.preventDefault();

        //capta o texto buscado antes de redirecionar para o acervo
        const busca = genero.textContent

        const KEY = "busca_em_alta"

        //armazena o texto buscado na session storage para ser usado no acervo
        sessionStorage.setItem(KEY, busca)

        //redireciona para o acervo
        window.location.href = "./src/html-paginas/acervo.html"

    })

})
