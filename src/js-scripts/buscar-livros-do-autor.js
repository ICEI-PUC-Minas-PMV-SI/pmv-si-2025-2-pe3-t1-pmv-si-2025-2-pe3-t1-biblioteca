//esse módulo é para redirecionar pro acervo a partir da página do autor, botão "Ver livros"

const verLivrosDoAutor = document.getElementById("buscar-livros-do-autor")

verLivrosDoAutor.addEventListener("click", function (evento){

    evento.preventDefault()

    const CHAVE = "veio do autor"

    //vai jogar na session storage um elemento que confirma que fomos redirecionados para o acervo direto da página do autor
    sessionStorage.setItem(CHAVE, true)
    

    //redireciona para o acervo
    window.location.href = "./acervo.html"

})