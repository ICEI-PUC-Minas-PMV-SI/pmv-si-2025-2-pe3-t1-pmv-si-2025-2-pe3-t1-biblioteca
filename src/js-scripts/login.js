import { logarLeitor } from "../js-funcoes/funcao-login.js"

console.log("Login carregado")

const botaoLogar = document.getElementById("botao_logar")

botaoLogar.addEventListener("click", function (evento) {

    evento.preventDefault()

    const usuarioOuEmailLeitor = document.getElementById("input_usuario").value
    const senhaLeitor = document.getElementById("input_senha").value

    logarLeitor(usuarioOuEmailLeitor, senhaLeitor)

    // Verifica se há um usuário logado
    const leitorLogado = JSON.parse(localStorage.getItem("leitor logado"))
    const primeiroNomeLeitorLogado = JSON.parse(localStorage.getItem("nome do leitor logado"))

    if (leitorLogado) {
    // Seleciona o <span> dentro do botão "Entrar"
    const rotuloLogin = document.querySelector(".entrar-rotulo span")

    if (rotuloLogin) {
        rotuloLogin.textContent = primeiroNomeLeitorLogado // Substitui por nome de usuário
    }
}


})