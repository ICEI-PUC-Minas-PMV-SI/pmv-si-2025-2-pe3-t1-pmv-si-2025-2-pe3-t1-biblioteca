
import { setLoggedOut } from "../js-scripts/login-persistencia.js";

function ensureLogoutDialog() {
  // Evita duplicar se já existir
  if (document.getElementById("dlg-logout")) return;

// src/js-funcoes/funcao-sair.js  (apenas o template do dialog)
const html = `
<dialog id="dlg-logout" class="dlg dlg--logout" aria-labelledby="dlg-logout-titulo" aria-describedby="dlg-logout-desc">
  <form method="dialog" class="dlg__form">
    <h3 id="dlg-logout-titulo" class="dlg__title">Confirmar logout</h3>
    <p id="dlg-logout-desc" class="dlg__desc">Você realmente deseja sair da sua conta?</p>
    <div class="dlg-actions">
        <button value="cancel"  id="btnCancelarLogout"  class="dlg-btn dlg-btn--secondary">Cancelar logout</button>  
        <button value="confirm" id="btnConfirmarLogout" class="dlg-btn dlg-btn--primary" autofocus>Confirmar logout</button>
    </div>
  </form>
</dialog>`;

  document.body.insertAdjacentHTML("beforeend", html);
}

function wireLogoutDialog() {
  const linkSair = document.getElementById("link_sair");
  const dlg = document.getElementById("dlg-logout");
  if (!linkSair || !dlg) return;

  linkSair.addEventListener("click", (e) => {
    e.preventDefault();

    // Fallback caso <dialog> não seja suportado
    if (!("showModal" in dlg)) {
      if (confirm("Você realmente deseja sair da sua conta?")) setLoggedOut();
      return;
    }
    dlg.showModal();
  });

  // Resultado do <form method="dialog">
  dlg.addEventListener("close", () => {
    if (dlg.returnValue === "confirm") setLoggedOut();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  ensureLogoutDialog();
  wireLogoutDialog();
});
