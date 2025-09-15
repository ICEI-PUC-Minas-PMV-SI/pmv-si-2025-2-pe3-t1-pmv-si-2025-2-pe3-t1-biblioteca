const KEY_USER = "leitor logado";               // seu “flag”
const KEY_NAME = "nome do leitor logado";       // pode ser útil depois

function isLoggedIn() {
  const u = (localStorage.getItem(KEY_USER) || "").trim();
  const n = (localStorage.getItem(KEY_NAME) || "").trim();
  return u !== "" && n !== "";
}

function applyLoginStateToUI() {
  // 1) classe no body para o CSS decidir qual menu abre
  document.body.classList.toggle("is-logged", isLoggedIn());

  // 2) rótulo do botão (Entrar ↔ nome)
  const span = document.querySelector(".entrar-rotulo span");
  if (span) {
    const u = (localStorage.getItem(KEY_USER) || "").trim();
    span.textContent = u !== "" ? u : "Entrar";
  }
}

// Atualiza ao carregar a página
document.addEventListener("DOMContentLoaded", applyLoginStateToUI);

// Sincroniza entre abas/janelas ou se outro script mudar as chaves
window.addEventListener("storage", (e) => {
  if (e.key === KEY_USER || e.key === KEY_NAME) applyLoginStateToUI();
});

// Exponho para você chamar após o login
export function _applyLoginStateNow() { applyLoginStateToUI(); }
function updateHeaderLoginLabel() {
  const span = document.querySelector(".entrar-rotulo span");
  if (!span) return;
  const usuario = (localStorage.getItem(KEY_USER) || "").trim();
  span.textContent = usuario !== "" ? usuario : "Entrar";
}

// Atualiza no carregamento
document.addEventListener("DOMContentLoaded", updateHeaderLoginLabel);

// Sincroniza entre abas/janelas e também se outra parte do código mudar as chaves
window.addEventListener("storage", (e) => {
  if (e.key === KEY_USER || e.key === KEY_NAME) updateHeaderLoginLabel();
});

export function setLoggedOut() {
  localStorage.setItem("leitor logado", "");
  localStorage.setItem("nome do leitor logado", "");
  applyLoginStateToUI(); // volta rótulo para "Entrar" e remove .is-logged
  const chk = document.getElementById("checkbox-login");
  if (chk) chk.checked = false; // fecha o painel
}

