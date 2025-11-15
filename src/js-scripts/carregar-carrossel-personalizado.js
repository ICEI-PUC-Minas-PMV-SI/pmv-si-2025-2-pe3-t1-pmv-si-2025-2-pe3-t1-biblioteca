//carrega tanto o carrossel de indicações personalizadas no index quanto os cards com as informações correspondentes

import { selecionadosParaVoce } from "../js-funcoes/funcao-selecionados-para-voce.js"
import { carregarAncorasCarrosselPersonalizado } from "../js-funcoes/funcao-carrossel-para-voce.js"
import {ClasseLeitor} from "../js-classes/classe-leitor.js"
import { carregarCards } from "../js-funcoes/funcao-card-personalizado.js"


window.addEventListener("DOMContentLoaded", () => {

    //encontrando o leitor logado no vetor de leitores
    const usuario = localStorage.getItem("leitor logado")
    const leitor = ClasseLeitor.vetorLeitores.find(l => l.usuario === usuario)

    //chama a função que retorna 6 livros correspondentes aos gêneros favoritos do leitor
    const livros = selecionadosParaVoce(leitor)

    carregarAncorasCarrosselPersonalizado(livros)
    carregarCards(livros)

})