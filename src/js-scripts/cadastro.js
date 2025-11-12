import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { cadastrarLeitor } from "../js-funcoes/funcao-cadastrar.js"
import { showConfirmSync, showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"
import { logarDireto } from "../js-funcoes/funcao-logar.js"
import { _applyLoginStateNow } from "./login-persistencia.js"
import { initViaCEPAutofill } from "../js-scripts/cep-autocompletar.js"
import { initCPFMask, initTelefoneMask } from "../js-scripts/mascaras.js"

const formularioCadastro = document.querySelector(".formulario-cadastro")


function finalizarCancelamento() {
  // limpar UI de gêneros
  document.querySelectorAll(".checkbox-genero").forEach((cb) => (cb.checked = false))
  document.querySelectorAll(".ancora-genero.selecionado").forEach((a) => a.classList.remove("selecionado"))
  // resetar formulário
  formularioCadastro?.reset()
  // redirecionar
  window.location.href = "../../index.html"
}

// ouvir pedido de cancelamento imediato vindo das máscaras (CPF/CEP)
document.addEventListener("cadastro:cancelarAgora", finalizarCancelamento)

// Inicializa máscaras e ViaCEP quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  initViaCEPAutofill({
    cep: "cep",
    rua: "rua",
    numero: "numero-fachada", 
    bairro: "bairro",
    cidade: "cidade",
    estado: "estado",
  })
  initCPFMask({ cpf: "cpf" })
  initTelefoneMask("telefone")
})

// === CANCELAR CADASTRO  ===
const botaoCancelar = document.getElementById("botao-cancelar")
botaoCancelar?.addEventListener("click", (e) => {
  e.preventDefault()

  showConfirmSync(
    {
      title: "Cancelar cadastro",
      message: "Todos os dados preenchidos serão perdidos.",
      confirmText: "Cancelar cadastro",
      cancelText: "Continuar cadastro",
    },
    (ok) => {
      if (ok) finalizarCancelamento()
      // se escolher "Continuar cadastro", não faz nada
    }
  )
})

// === SUBMIT DO FORM ===
formularioCadastro.addEventListener("submit", function (evento) {
  evento.preventDefault()

  // variável do id, começa em 1 e vai incrementando 1 a cada novo cadastro
  const idLeitor = ClasseLeitor.numeroDeLeitores + 1

  // variáveis da identidade do leitor
  const nomeUsuarioLeitor = document.getElementById("usuario").value.trim()
  const nomeLeitor = document.getElementById("nome").value.trim()
  const sobrenomeLeitor = document.getElementById("sobrenome").value.trim()
  const cpfLeitor = document.getElementById("cpf").value.trim()
  const telefoneLeitor = document.getElementById("telefone").value.trim()
  const emailLeitor = document.getElementById("email").value.trim()

  // variáveis do endereço do leitor
  const cepLeitor = document.getElementById("cep").value.trim()
  const ruaLeitor = document.getElementById("rua").value.trim()
  const numeroFachadaLeitor = document.getElementById("numero-fachada").value.trim()
  const bairroLeitor = document.getElementById("bairro").value.trim()
  const cidadeLeitor = document.getElementById("cidade").value.trim()
  const estadoLeitor = document.getElementById("estado").value.trim()

  // vetor de gêneros favoritos do leitor (no mínimo 1, no máximo 3)
  const generosLeitor = Array.from(
    document.querySelectorAll(".checkbox-genero:checked")
  )
    .slice(0, 3)
    .map((cb) => {
      const ancora = document.querySelector(`label[for="${cb.id}"] .ancora-genero`)
      return ancora?.innerText?.trim()
    })
    .filter(Boolean)

  // variáveis da senha do leitor
  const senhaLeitor = document.getElementById("senha").value
  const repitaSenhaLeitor = document.getElementById("repita-senha").value

  // condicional que testa campos obrigatórios
  if (
    nomeUsuarioLeitor === "" ||
    nomeLeitor === "" ||
    sobrenomeLeitor === "" ||
    cpfLeitor === "" ||
    telefoneLeitor === "" ||
    emailLeitor === "" ||
    cepLeitor === "" ||
    ruaLeitor === "" ||
    numeroFachadaLeitor === "" ||
    bairroLeitor === "" ||
    cidadeLeitor === "" ||
    estadoLeitor === "" ||
    senhaLeitor === "" ||
    repitaSenhaLeitor === ""
  ) {
    return
  }

  if(generosLeitor.length > 0){

    cadastrarLeitor(
      idLeitor,
      nomeUsuarioLeitor,
      nomeLeitor,
      sobrenomeLeitor,
      cpfLeitor,
      telefoneLeitor,
      emailLeitor,
      cepLeitor,
      ruaLeitor,
      numeroFachadaLeitor,
      bairroLeitor,
      cidadeLeitor,
      estadoLeitor,
      generosLeitor,
      senhaLeitor,
      repitaSenhaLeitor
    )
  } else{

      showAlertSync({
        title: "Escolha pelo menos 1 gênero favorito",
        message: "Você deve escolher entre 1 e 3 gêneros favoritos."
    })
    return  
  }

  logarDireto(nomeUsuarioLeitor, senhaLeitor)

  const leitorLogado = localStorage.getItem("leitor logado") || ""

  // Verifica se há um usuário logado
  if (leitorLogado.trim() !== "") {
    // Seleciona o <span> dentro do botão "Entrar"
    const rotuloLogin = document.querySelector(".entrar-rotulo span")

    // Substitui o "Entrar" pelo nome de usuário
    if (rotuloLogin) {
      rotuloLogin.textContent = leitorLogado
    }

    _applyLoginStateNow()
  }
})
