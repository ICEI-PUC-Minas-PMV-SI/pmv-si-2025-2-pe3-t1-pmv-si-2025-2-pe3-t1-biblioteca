import { showValidateFixSync } from "../js-funcoes/funcoes-de-dialogo.js";

/* =========================
   MÁSCARA DO TELEFONE
   ========================= */
export function initTelefoneMask(id = "telefone") {
  const tel = document.getElementById(id);
  if (!tel) return;

  const formatTelefoneBR = (value) => {
    const d = (value || "").replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  };

  tel.addEventListener("input", (e) => {
    const raw = e.target.value;
    e.target.value = formatTelefoneBR(raw);
    e.target.setSelectionRange(e.target.value.length, e.target.value.length);
  });

  tel.addEventListener("blur", () => {
    const digits = (tel.value || "").replace(/\D/g, "");
    if (!digits) { tel.value = ""; tel.setCustomValidity(""); return; }
    if (digits.length !== 11) {
      tel.setCustomValidity("Telefone deve ter 11 dígitos (ex.: (33) 98877-2211).");
    } else {
      tel.setCustomValidity("");
    }
  });
}

/* =========================
   MÁSCARA DO CPF
   ========================= */
const digitsOnlyCPF = (s) => (s || "").replace(/\D/g, "");
const isCPFComplete = (d) => /^\d{11}$/.test(d);

function formatCPF(value) {
  const d = digitsOnlyCPF(value).slice(0, 11);
  return d
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
}

function validarCPF(d) {
  if (!/^\d{11}$/.test(d)) return false;
  if (/^(\d)\1{10}$/.test(d)) return false;
  const n = d.split("").map(Number);

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += n[i] * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto !== n[9]) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += n[i] * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto !== n[10]) return false;

  return true;
}

export function initCPFMask({ cpf: cpfId = "cpf" } = {}) {
  const cpf = document.getElementById(cpfId);
  if (!cpf) return;

  let cpfDialogOpen = false;
  function showCpfDialog(title, message) {
    if (cpfDialogOpen) return;
    cpfDialogOpen = true;

    showValidateFixSync(
      { title, message },
      (continuar) => {
        if (continuar) {
          cpf.focus();
          cpf.select();
        } else {
          document.dispatchEvent(new CustomEvent("cadastro:cancelarAgora"));
        }
        cpfDialogOpen = false;
      }
    );
  }

  // formata enquanto digita e valida ao completar 11 dígitos
  cpf.addEventListener("input", () => {
    const pos = cpf.selectionStart;
    const prevLen = cpf.value.length;

    cpf.value = formatCPF(cpf.value);

    const newLen = cpf.value.length;
    const diff = newLen - prevLen;
    cpf.setSelectionRange(pos + (diff > 0 ? diff : 0), pos + (diff > 0 ? diff : 0));

    const d = digitsOnlyCPF(cpf.value);
    if (isCPFComplete(d)) {
      const ok = validarCPF(d);
      cpf.classList.toggle("cpf--invalid", !ok);
      if (!ok) showCpfDialog("CPF inválido", "O CPF informado não é válido. Verifique o campo.");
    } else {
      cpf.classList.remove("cpf--invalid");
    }
  });

  // >>> exibe mensagem no BLUR quando INCOMPLETO
  cpf.addEventListener("blur", () => {
    const d = digitsOnlyCPF(cpf.value);
    if (d.length === 0) { 
      // vazio: não incomoda, só limpa qualquer estado
      cpf.classList.remove("cpf--invalid");
      cpf.setCustomValidity("");
      return;
    }
    if (d.length < 11) {
      cpf.setCustomValidity("CPF deve ter 11 dígitos.");
      showCpfDialog("CPF incompleto", "Digite os 11 dígitos do CPF.");
      return;
    }
    // completou 11 → valida DV
    const ok = validarCPF(d);
    cpf.classList.toggle("cpf--invalid", !ok);
    cpf.setCustomValidity(ok ? "" : "CPF inválido.");
    if (!ok) showCpfDialog("CPF inválido", "O CPF informado não é válido. Verifique o campo.");
  });
}
/* =========================
   MÁSCARA DO CEP (formatação + mensagem no BLUR se INCOMPLETO)
   ========================= */
const cepInput = document.querySelector("#cep");

function formatCEP(value) {
  const d = (value || "").replace(/\D/g, "").slice(0, 8); // 33000-000
  if (d.length <= 5) return d;
  return `${d.slice(0, 5)}-${d.slice(5, 8)}`;
}

if (cepInput) {
  // formata enquanto digita
  cepInput.addEventListener("input", (e) => {
    const raw = e.target.value;
    e.target.value = formatCEP(raw);
    e.target.setSelectionRange(e.target.value.length, e.target.value.length);
  });

  let cepDialogOpen = false;
  function showCepDialog(title, message) {
    if (cepDialogOpen) return;
    cepDialogOpen = true;

    showValidateFixSync(
      { title, message },
      (continuar) => {
        if (continuar) {
          cepInput.focus();
          cepInput.select();
        } else {
          document.dispatchEvent(new CustomEvent("cadastro:cancelarAgora"));
        }
        cepDialogOpen = false;
      }
    );
  }

  // >>> exibe mensagem no BLUR quando INCOMPLETO (< 8 dígitos)
  cepInput.addEventListener("blur", () => {
    const digits = (cepInput.value || "").replace(/\D/g, "");

    if (digits.length === 0) {
     
      cepInput.value = "";
      cepInput.setCustomValidity("");
      return;
    }

    if (digits.length < 8) {
      cepInput.setCustomValidity("CEP deve ter 8 dígitos (ex.: 33000-000).");
      showCepDialog("CEP incompleto", "Digite os 8 dígitos do CEP (ex.: 33000-000).");
      return;
    }
    cepInput.setCustomValidity("");
  });
}

