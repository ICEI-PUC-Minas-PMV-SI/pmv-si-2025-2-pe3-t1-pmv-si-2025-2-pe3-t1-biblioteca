//atribui o ISBN dos livros correspondentes como parte do id das âncoras do carrossel de livros recomendados após login do leitor

import {ClasseLeitor} from "../js-classes/classe-leitor.js"
import { selecionadosParaVoce } from "./funcao-selecionados-para-voce.js"

window.addEventListener("DOMContentLoaded", () => {
const usuario = localStorage.getItem("leitor logado")

const leitor = ClasseLeitor.vetorLeitores.find( l => l.usuario === usuario)

const vetor = selecionadosParaVoce(leitor)

console.log(vetor)

})