//quando carrega a página do acervo vindo de clique na âncora da seção "Em alta", realiza automaticamente a busca por livros do gênero clicado
import { executarBusca } from "./buscar-no-acervo.js"

document.addEventListener("DOMContentLoaded", () => {

const CHAVE = "busca_em_alta"

const busca = sessionStorage.getItem(CHAVE) || ""

if(busca != ""){

    executarBusca(busca, "Gênero")

    sessionStorage.removeItem(CHAVE)

}

})