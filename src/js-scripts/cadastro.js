// ../js-scripts/cadastro.js
import { ClasseLeitor } from "../js-classes/classe-leitor.js";
import { cadastrarLeitor } from "../js-funcoes/funcao-cadastrar.js";
import { showConfirmSync } from "../js-funcoes/funcoes-de-dialogo.js";

const formularioCadastro = document.querySelector(".formulario-cadastro");

// === CANCELAR CADASTRO (fora do submit, com showConfirmSync boolean) ===
const botaoCancelar = document.getElementById("botao-cancelar");
botaoCancelar?.addEventListener("click", (e) => {
  e.preventDefault();

  showConfirmSync(
    {
      title: "Cancelar cadastro",
      message: "Todos os dados preenchidos serão perdidos.",
      confirmText: "Cancelar cadastro",
      cancelText: "Continuar cadastro",
    },
    (ok) => {
      if (!ok) return; // usuário escolheu "Continuar cadastro"

      // limpar UI de gêneros
      document.querySelectorAll(".checkbox-genero").forEach((cb) => {
        cb.checked = false;
      });
      document
        .querySelectorAll(".ancora-genero.selecionado")
        .forEach((a) => a.classList.remove("selecionado"));

      // resetar formulário
      formularioCadastro.reset();

      // redirecionar (opcional)
      window.location.href = "../../index.html";
    }
  );
});

// === SUBMIT DO FORM ===
formularioCadastro.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // variável do id, começa em 1 e vai incrementando 1 a cada novo cadastro
  const idLeitor = ClasseLeitor.numeroDeLeitores +1;

  // variáveis da identidade do leitor
  const nomeUsuarioLeitor = document.getElementById("usuario").value.trim();
  const nomeLeitor = document.getElementById("nome").value.trim();
  const sobrenomeLeitor = document.getElementById("sobrenome").value.trim();
  const cpfLeitor = document.getElementById("cpf").value.trim();
  const telefoneLeitor = document.getElementById("telefone").value.trim();
  const emailLeitor = document.getElementById("email").value.trim();

  // variáveis do endereço do leitor
  const cepLeitor = document.getElementById("cep").value.trim();
  const ruaLeitor = document.getElementById("rua").value.trim();
  const numeroFachadaLeitor = document.getElementById("numero-fachada").value.trim();
  const bairroLeitor = document.getElementById("bairro").value.trim();
  const cidadeLeitor = document.getElementById("cidade").value.trim();
  const estadoLeitor = document.getElementById("estado").value.trim();

  // vetor de gêneros favoritos do leitor (no máximo 3)
  const generosLeitor = Array.from(
    document.querySelectorAll(".checkbox-genero:checked")
  )
    .slice(0, 3) // cinto de segurança
    .map((cb) => {
      const ancora = document.querySelector(`label[for="${cb.id}"] .ancora-genero`);
      return ancora?.innerText?.trim();
    })
    .filter(Boolean);

  // variáveis da senha do leitor
  const senhaLeitor = document.getElementById("senha").value;
  const repitaSenhaLeitor = document.getElementById("repita-senha").value;

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
    alert("Preencha todos os campos!"); // pode trocar por showAlert se quiser padronizar
    return;
  }

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
  );
});

const generos = document.querySelectorAll(".quadro-genero_campo-1, .quadro-genero_campo-2, .quadro-genero_campo-3, .quadro-genero_campo-4, .quadro-genero_campo-5, .quadro-genero_campo-6")

generos.forEach((genero) => {
  genero.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(genero)
  })
})