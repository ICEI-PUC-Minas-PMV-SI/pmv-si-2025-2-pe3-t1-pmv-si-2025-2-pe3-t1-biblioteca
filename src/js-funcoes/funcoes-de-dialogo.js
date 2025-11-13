function createDialogBase(kind = "alert") {
  const dlg = document.createElement("dialog");
  dlg.className = `dlg dlg--${kind}`;


  const uid = Math.random().toString(36).slice(2, 8);
  const titleId = `dlg-title-${uid}`;
  const descId  = `dlg-desc-${uid}`;

  dlg.innerHTML = `
    <form method="dialog" class="dlg__form" role="dialog" aria-modal="true" aria-labelledby="${titleId}" aria-describedby="${descId}">
      <h3 class="dlg__title" id="${titleId}"></h3>
      <p class="dlg__desc" id="${descId}"></p>
      <div class="dlg-actions"></div>
    </form>
  `;
  return dlg;
}

export function showAlert({ title = "Aviso", message = "", okText = "OK" } = {}) {
  return new Promise((resolve) => {
    const dlg = createDialogBase("alert");
    dlg.querySelector(".dlg__title").textContent = title;
    dlg.querySelector(".dlg__desc").textContent = message;

    const actions = dlg.querySelector(".dlg-actions");
    actions.innerHTML = `
      <button class="dlg-btn dlg-btn--primary" value="ok" type="submit" autofocus>${okText}</button>
    `;

    document.body.appendChild(dlg);

    dlg.addEventListener("close", () => {
      dlg.remove();
      resolve();
    });

    if (typeof dlg.showModal === "function") {
      dlg.showModal();
    } else {
      // Fallback raríssimo
      window.alert(message);
      dlg.remove();
      resolve();
    }
  });
}

export function showConfirm({
  title = "Confirmação",
  message = "",
  confirmText = "Confirmar",
  cancelText = "Cancelar",
} = {}) {
  return new Promise((resolve) => {
    const dlg = createDialogBase("confirm");
    dlg.querySelector(".dlg__title").textContent = title;
    dlg.querySelector(".dlg__desc").textContent = message;

    const actions = dlg.querySelector(".dlg-actions");
    actions.innerHTML = `
      <button class="dlg-btn dlg-btn--secondary" value="cancel" type="submit">${cancelText}</button>
      <button class="dlg-btn dlg-btn--primary"   value="confirm" type="submit" autofocus>${confirmText}</button>
    `;

    document.body.appendChild(dlg);

    dlg.addEventListener("close", () => {
      const ok = dlg.returnValue === "confirm";
      dlg.remove();
      resolve(ok);
    });

    if (typeof dlg.showModal === "function") {
      dlg.showModal();
    } else {
      const ok = window.confirm(message);
      dlg.remove();
      resolve(ok);
    }
  });
}

export function showAlertSync(opts = {}, onClose) {
  const p = showAlert(opts);        // Promise que resolve quando o diálogo fecha

  if (typeof onClose === "function") {
    p.then(() => onClose());
  }

  return p;                         // dá pra usar await
}


export function showConfirmSync(opts = {}, onDecision) {
  showConfirm(opts).then((ok) => {
    if (typeof onDecision === "function") onDecision(ok);
  });
}


//Função de diálogo específica para correção de campos CPF e CEP
export function showValidateFixSync(
  {
    title = "Campo inválido",
    message = "",
    continueText = "Corrigir campo",   // direita
    cancelText = "Cancelar cadastro",   // esquerda
  } = {},
  callback
) {
  const dlg = document.createElement("dialog");
  dlg.className = "dlg dlg--confirm dlg--validate";
  dlg.tabIndex = -1; // permite focar o <dialog> e evitar foco em botões

  // Layout: [Cancelar] [Corrigir] — ambos SEM classe de "primary" ou "secondary"
  dlg.innerHTML = `
    <form method="dialog" class="dlg__form" role="dialog" aria-modal="true">
      <h3 class="dlg__title"></h3>
      <p class="dlg__desc"></p>
      <div class="dlg-actions dlg-actions--reversed">
        <button type="button" class="dlg-btn dlg__btn--cancel"  value="cancel" id= "botao-cancelar-cpf-cep">${cancelText}</button>
        <button type="submit" class="dlg-btn dlg__btn--confirm" value="continue">${continueText}</button>
      </div>
    </form>
  `;

  dlg.querySelector(".dlg__title").textContent = title;
  dlg.querySelector(".dlg__desc").textContent = message;

  // cancelar (esquerda)
  dlg.querySelector(".dlg__btn--cancel")?.addEventListener("click", () => {
    dlg.close("cancel");
  });

  document.body.appendChild(dlg);
  dlg.showModal();

  // foco neutro no <dialog> para não acender contorno em nenhum botão
  dlg.focus({ preventScroll: true });

  dlg.addEventListener("close", () => {
    const ok = dlg.returnValue === "continue"; // true se clicou "Corrigir campo"
    try { callback && callback(ok); } finally { dlg.remove(); }
  });
}
