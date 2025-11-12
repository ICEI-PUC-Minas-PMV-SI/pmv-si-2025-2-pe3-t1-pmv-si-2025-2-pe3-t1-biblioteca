//carrega a seção "Seus gêneros favoritos" no index
import { carregarSeusFavoritos } from "../js-funcoes/funcao-carregar-generos-favoritos.js"
import {ClasseLeitor} from "../js-classes/classe-leitor.js"

window.addEventListener("DOMContentLoaded", async () => {

    let vetorGenerosFavoritos = []

    const usuarioLogado = localStorage.getItem("leitor logado")

    const leitor = ClasseLeitor.vetorLeitores.find(l => l.usuario === usuarioLogado)

    vetorGenerosFavoritos = leitor.meusGeneros

    await carregarSeusFavoritos(vetorGenerosFavoritos)
    
})