import { showValidateFixSync } from "../js-funcoes/funcoes-de-dialogo.js"

// ---------- Config ----------
const IDS_CEP = {
  cep: "cep",
  rua: "rua",
  numero: "numeroFachada",
  bairro: "bairro",
  cidade: "cidade",
  estado: "estado",
};

// ---------- Utils ----------
const onlyDigitsCEP = (s) => (s || "").replace(/\D/g, "");
const isCEPValido = (digits) => /^\d{8}$/.test(digits);

function setLoading(el, on = true) {
  const BAR_ID = "cep-loading-bar";
  let bar = document.getElementById(BAR_ID);
  if (on) {
    if (!bar) {
      bar = document.createElement("div");
      bar.id = BAR_ID;
      bar.className = "cep-loading-bar";
      el.insertAdjacentElement("afterend", bar);
    }
  } else {
    bar?.remove();
  }
}

function toggleAddressDisabled(disabled = true) {
  const { rua, bairro, cidade, estado } = getElsCEP();
  [rua, bairro, cidade, estado].forEach((el) => el && (el.disabled = disabled));
}

function getElsCEP() {
  return {
    cep: document.getElementById(IDS_CEP.cep),
    rua: document.getElementById(IDS_CEP.rua),
    numero: document.getElementById(IDS_CEP.numero),
    bairro: document.getElementById(IDS_CEP.bairro),
    cidade: document.getElementById(IDS_CEP.cidade),
    estado: document.getElementById(IDS_CEP.estado),
  };
}

// ---------- Núcleo ----------
async function consultarViaCEP(cepDigits, { signal } = {}) {
  const url = `https://viacep.com.br/ws/${cepDigits}/json/`;
  const resp = await fetch(url, { signal, cache: "no-store" });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const data = await resp.json();
  if (data.erro) {
    const err = new Error("CEP não encontrado");
    err.code = "CEP_NOT_FOUND";
    throw err;
  }
  return data;
}

function preencherEndereco(data) {
  const { rua, bairro, cidade, estado, numero } = getElsCEP();
  if (rua) rua.value = data.logradouro || "";
  if (bairro) bairro.value = data.bairro || "";
  if (cidade) cidade.value = data.localidade || "";
  if (estado) estado.value = data.uf || "";
  if (numero && !numero.value) numero.focus();
}

// Evita sobreposição de requisições e duplicidade de diálogo
let currentAbort = null;
let viaCepDialogOpen = false;

function showCepApiErrorOnce(message) {
  if (viaCepDialogOpen) return;
  viaCepDialogOpen = true;

  showValidateFixSync(
    { title: "CEP inválido", message },
    (continuar) => {
      if (continuar) {
        const { cep } = getElsCEP();
        cep?.focus();
        cep?.select();
      } else {
        // encerra cadastro sem abrir outra caixa
        document.dispatchEvent(new CustomEvent("cadastro:cancelarAgora"));
      }
      viaCepDialogOpen = false;
    }
  );
}

async function handleCEPInputLookup() {
  const { cep } = getElsCEP();
  if (!cep) return;

  const digits = onlyDigitsCEP(cep.value);
  if (!isCEPValido(digits)) return; // só busca quando tiver 8 dígitos

  // Aborta requisição anterior, se houver
  if (currentAbort) currentAbort.abort();
  currentAbort = new AbortController();

  try {
    setLoading(cep, true);
    toggleAddressDisabled(true);

    const data = await consultarViaCEP(digits, { signal: currentAbort.signal });
    preencherEndereco(data);
  } catch (err) {
    if (err.name === "AbortError") return;

    let message = "Não foi possível buscar o CEP. Tente novamente.";
    if (err.code === "CEP_NOT_FOUND") message = "CEP não encontrado. Verifique o campo.";

    showCepApiErrorOnce(message);
  } finally {
    setLoading(cep, false);
    toggleAddressDisabled(false);
  }
}

// ---------- Init ----------
export function initViaCEPAutofill(customIds = {}) {
  Object.assign(IDS_CEP, customIds);
  const { cep } = getElsCEP();
  if (!cep) return;

  if (cep.dataset.viacepInit === "1") return;
  cep.dataset.viacepInit = "1";

  cep.addEventListener("blur", handleCEPInputLookup);
  cep.addEventListener("input", () => {
    const digits = onlyDigitsCEP(cep.value);
    if (digits.length === 8) handleCEPInputLookup();
  });
}
