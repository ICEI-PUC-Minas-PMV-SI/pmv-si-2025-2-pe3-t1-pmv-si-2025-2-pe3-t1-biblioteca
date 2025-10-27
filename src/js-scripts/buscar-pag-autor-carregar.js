//quando carrega a página do acervo vindo da página de um autor, realiza automaticamente a busca por livros daquele autor
import { executarBusca } from "./buscar-no-acervo.js"
import {ClasseAutor} from "../js-classes/classe-autor.js"

document.addEventListener("DOMContentLoaded", () => {

const CHAVE_1 = "id_autor_redirecionamento"
const CHAVE_2 = "veio do autor"

//encontrando o autor na lista de autores
const idAutor = sessionStorage.getItem(CHAVE_1) || ""

let autor = ""

let i

for (i=0;i<ClasseAutor.vetorAutores.length;i++){

    if (ClasseAutor.vetorAutores[i].id === idAutor){

        autor = ClasseAutor.vetorAutores[i].nome

        break
    }
}

const veioDoAutor = sessionStorage.getItem(CHAVE_2) || ""

if(veioDoAutor != ""){

    executarBusca(autor, "Autor")

    sessionStorage.removeItem(CHAVE_2)

}

})