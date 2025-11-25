// login-persistencia.js

const KEY_USER = "leitor logado";               // flag
const KEY_NAME = "nome do leitor logado";       // texto do rótulo
const containerLogin = document.querySelector(".menu_login")
const containerUsuario = document.querySelector(".menu_usuario")

function isLoggedIn() {
  const u = (localStorage.getItem(KEY_USER) || "").trim();
  const n = (localStorage.getItem(KEY_NAME) || "").trim();
  return u !== "" && n !== "";
}

function syncPersonalizadoUI() {
  // Sincroniza o conteúdo do card com o slide ativo do carrossel "p"
  const secao = document.getElementById("p-carrossel");
  if (!secao) return;

  const swiperEl = secao.querySelector(".swiper");

  // Atualiza Swiper (caso a seção tenha sido reexibida)
  try { swiperEl?.swiper?.update?.(); } catch(_) {}

  // Mostra o card correspondente ao slide ativo
  const activeImg = swiperEl?.querySelector(".swiper-slide-active img");
  if (activeImg && window.showCardFor) {
    // Pequeno delay para garantir que a seção já está visível no layout
    requestAnimationFrame(() => window.showCardFor(activeImg.id));
  }
}

function showPersonalizadoSections(show) {
  const carrosselP = document.getElementById("p-carrossel");
  const generosFav = document.getElementById("seus-generos-favoritos");

  if (show) {
    carrosselP?.classList.remove("escondido");
    generosFav?.classList.remove("escondido");
    // Sincroniza somente quando mostramos
    syncPersonalizadoUI();
  } else {
    carrosselP?.classList.add("escondido");
    generosFav?.classList.add("escondido");
  }
}

function applyLoginStateToUI() {
  const logged = isLoggedIn();

  // 1) Classe no body
  document.body.classList.toggle("is-logged", logged);

  // 2) Rótulo do botão (Entrar ↔ nome)
  const span = document.querySelector(".login_container span");
  if (span) {
    const nome = (localStorage.getItem(KEY_USER) || "").trim();
    span.textContent = logged ? nome : "Entrar";
    span.title = logged ? "Clique para acessar o menu de usuário." : "Clique para acessar o menu de login."
  }

  // 3) Mostrar/ocultar as seções personalizadas
  showPersonalizadoSections(logged);
}

// Atualiza ao carregar a página
document.addEventListener("DOMContentLoaded", applyLoginStateToUI);

// Sincroniza entre abas/janelas ou se outro script mudar as chaves
window.addEventListener("storage", (e) => {
  if (e.key === KEY_USER || e.key === KEY_NAME) applyLoginStateToUI();
});

// Exponho para você chamar após o login (ex.: no fluxo que valida a senha)
export function _applyLoginStateNow() {
  applyLoginStateToUI();
}

export function setLoggedOut() {
  localStorage.setItem(KEY_USER, "");
  localStorage.setItem(KEY_NAME, "");
  applyLoginStateToUI(); // volta rótulo para "Entrar", remove .is-logged e esconde seções
  containerLogin.classList.remove("visibility")
  containerUsuario.classList.remove("visibility")
}
