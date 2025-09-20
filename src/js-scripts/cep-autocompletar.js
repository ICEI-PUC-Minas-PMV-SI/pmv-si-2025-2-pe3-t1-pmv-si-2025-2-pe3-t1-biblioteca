import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js";

// ATENÇÃO: POSSUI CÓDIGO ASSÍNCRONO

// ---------- Configuração rápida ----------
const IDS = {
  cep: "cep",
  rua: "rua",
  numero: "numeroFachada",
  bairro: "bairro",
  cidade: "cidade",
  estado: "estado",
};

// ---------- Utilidades ----------
const onlyDigits = (s) => (s || "").replace(/\D/g, "");
const isCEPValido = (digits) => /^\d{8}$/.test(digits);

// Pequena ajuda visual enquanto busca (barra indeterminada após o input CEP)
function setLoading(el, on = true) {
  const BAR_ID = "cep-loading-bar";
  let bar = document.getElementById(BAR_ID);

  if (on) {
    if (!bar) {
      bar = document.createElement("div");
      bar.id = BAR_ID;
      bar.className = "cep-loading-bar";
      // insere a barra logo após o input CEP
      el.insertAdjacentElement("afterend", bar);
    }
  } else {
    bar?.remove();
  }
}


// Desabilita/rehabilita campos enquanto preenche
function toggleAddressDisabled(disabled = true) {
  const { rua, bairro, cidade, estado } = getEls();
  [rua, bairro, cidade, estado].forEach((el) => el && (el.disabled = disabled));
}

function getEls() {
  return {
    cep: document.getElementById(IDS.cep),
    rua: document.getElementById(IDS.rua),
    numero: document.getElementById(IDS.numero),
    bairro: document.getElementById(IDS.bairro),
    cidade: document.getElementById(IDS.cidade),
    estado: document.getElementById(IDS.estado),
  };
}

// ---------- Núcleo ViaCEP ----------
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
  const { rua, bairro, cidade, estado, numero } = getEls();
  if (rua) rua.value = data.logradouro || "";
  if (bairro) bairro.value = data.bairro || "";
  if (cidade) cidade.value = data.localidade || "";
  if (estado) estado.value = data.uf || "";

  // Se o número estiver vazio, joga o foco pra lá
  if (numero && !numero.value) numero.focus();
}

// Evita sobreposição de requisições
let currentAbort = null;

async function handleCEPInputLookup() {
  const { cep } = getEls();
  if (!cep) return;

  const digits = onlyDigits(cep.value);
  if (!isCEPValido(digits)) return; // espera formar 8 dígitos

  // Aborta requisição anterior, se houver
  if (currentAbort) currentAbort.abort();
  currentAbort = new AbortController();

  try {
    setLoading(cep, true);
    toggleAddressDisabled(true);

    const data = await consultarViaCEP(digits, { signal: currentAbort.signal });
    preencherEndereco(data);
  } catch (err) {
    // Mensagens enxutas para o usuário
    let message = "Não foi possível buscar o CEP. Tente novamente.";
    if (err.name === "AbortError") return; // usuário digitou de novo; ignora
    if (err.code === "CEP_NOT_FOUND") message = "CEP não encontrado. Confira o número.";

    await showAlertSync({ title: "Atenção", message });
  } finally {
    setLoading(cep, false);
    toggleAddressDisabled(false);
  }
}

// ---------- Inicialização pública ----------
export function initViaCEPAutofill(customIds = {}) {
  Object.assign(IDS, customIds); // permite sobrescrever IDs se necessário

  const { cep } = getEls();
  if (!cep) return;

  // 1) Buscar ao sair do campo
  cep.addEventListener("blur", () => {
    handleCEPInputLookup();
  });

  // 2) Buscar assim que 8 dígitos forem digitados
  cep.addEventListener("input", () => {
    const digits = onlyDigits(cep.value);
    if (digits.length === 8) handleCEPInputLookup();
  });
}
