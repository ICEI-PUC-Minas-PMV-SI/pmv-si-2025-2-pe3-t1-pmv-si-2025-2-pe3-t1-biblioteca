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
  showAlert(opts).then(() => {
    if (typeof onClose === "function") onClose();
  });
}

export function showConfirmSync(opts = {}, onDecision) {
  showConfirm(opts).then((ok) => {
    if (typeof onDecision === "function") onDecision(ok);
  });
}
