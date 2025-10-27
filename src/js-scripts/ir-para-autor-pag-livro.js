//esse script redireciona para a página do autor a partir de clique no nome do autor na página do livro
import {ClasseAutor} from "../js-classes/classe-autor.js"

const irParaAutor = document.getElementById("autor")

irParaAutor.addEventListener("click", (evento) =>
{

    evento.preventDefault()

    const nome = document.getElementById("autor").textContent

    //encontrando o id do autor na lista de autores

    let i

    let id = ""

    for(i=0; i<ClasseAutor.vetorAutores.length; i++){

        if(ClasseAutor.vetorAutores[i].nome === nome){

            id = ClasseAutor.vetorAutores[i].id

            break

        }
    }

    const CHAVE = "id_autor_redirecionamento"

    //coloca o id na session storage pra ser usado no carregamento dinâmico das informações do autor
    sessionStorage.setItem(CHAVE, id)

    //redireciona para a página do autor
    window.location.href = "./autor.html"

})