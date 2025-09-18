import { logarLeitor } from "../js-funcoes/funcao-logar.js"
import { _applyLoginStateNow } from "./login-persistencia.js"


const botaoLogar = document.getElementById("botao_logar")

botaoLogar.addEventListener("click", function (evento) {

    evento.preventDefault()

    const usuarioOuEmailLeitor = document.getElementById("input_usuario").value
    const senhaLeitor = document.getElementById("input_senha").value

    logarLeitor(usuarioOuEmailLeitor, senhaLeitor)

    
    const leitorLogado = localStorage.getItem("leitor logado") || ""

    // Verifica se há um usuário logado
    if (leitorLogado.trim() !== "") {
    // Seleciona o <span> dentro do botão "Entrar"
    const rotuloLogin = document.querySelector(".entrar-rotulo span")

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
    const checkbox = document.getElementById("checkbox-login");
    if (checkbox) checkbox.checked = false;

}


})