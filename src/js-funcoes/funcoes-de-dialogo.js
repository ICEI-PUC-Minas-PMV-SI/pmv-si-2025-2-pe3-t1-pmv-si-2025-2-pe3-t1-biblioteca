function createDialogBase(kind = "alert") {
  const dlg = document.createElement("dialog");
  dlg.className = `dlg dlg--${kind}`;
  dlg.innerHTML = `
    <form method="dialog" class="dlg__form">
      <h3 class="dlg__title"></h3>
      <p class="dlg__desc"></p>
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
      <button class="dlg-btn dlg-btn--primary" value="ok" type="submit">${okText}</button>
    `;

    document.body.appendChild(dlg);

    dlg.addEventListener("close", () => {
      dlg.remove();
      resolve(); // nada para devolver
    });

    if (dlg.showModal) dlg.showModal();
    else {
      // Fallback raro (navegadores muito antigos)
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

    if (dlg.showModal) dlg.showModal();
    else {
      const ok = window.confirm(message);
      dlg.remove();
      resolve(ok);
    }
  });
}

// Wrappers "síncronos" (por callback) sobre as Promises existentes
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

