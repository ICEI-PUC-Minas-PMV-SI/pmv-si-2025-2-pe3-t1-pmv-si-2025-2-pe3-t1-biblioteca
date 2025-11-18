import { logarLeitor } from "../js-funcoes/funcao-logar.js"
import { _applyLoginStateNow } from "./login-persistencia.js"


const botaoLogar = document.getElementById("botao_logar")
const botaoDeEntrada = document.querySelector(".login_container")
const containerLogin = document.querySelector(".menu_login")
const containerUsuario = document.querySelector(".menu_usuario")

botaoLogar.addEventListener("click", async function (evento) {

    evento.preventDefault()

    const usuarioOuEmailLeitor = document.getElementById("input_usuario").value
    const senhaLeitor = document.getElementById("input_senha").value
    
    await logarLeitor(usuarioOuEmailLeitor, senhaLeitor)

    const leitorLogado = localStorage.getItem("leitor logado") || ""

    // Verifica se há um usuário logado
    if (leitorLogado.trim() !== "") {
    // Seleciona o <span> dentro do botão "Entrar"
    const rotuloLogin = document.querySelector(".login_container span")

    // Substitui o "Entrar" pelo nome de usuário
    if (rotuloLogin) {
        rotuloLogin.textContent = leitorLogado 
    }

    //limpa os inputs do login após a confirmação de entrada
    const inputUsuario = document.getElementById("input_usuario");
    const inputSenha   = document.getElementById("input_senha");
    if (inputUsuario) inputUsuario.value = "";
    if (inputSenha)   inputSenha.value   = "";

    _applyLoginStateNow();

    //fecha o menu de login
    containerLogin.classList.remove("visibility")
    containerUsuario.classList.remove("visibility")

    return
}

})

containerLogin.addEventListener("click", e => e.stopPropagation());
containerUsuario.addEventListener("click", e => e.stopPropagation());
botaoDeEntrada.addEventListener("click", e => e.stopPropagation());

botaoDeEntrada.addEventListener("click", (event) => {

    event.preventDefault()

    const leitorLogado = localStorage.getItem("leitor logado") || ""

    if (leitorLogado.trim() !== "") {
        containerUsuario.classList.toggle("visibility")
    } else {
        containerLogin.classList.toggle("visibility")
    }
})