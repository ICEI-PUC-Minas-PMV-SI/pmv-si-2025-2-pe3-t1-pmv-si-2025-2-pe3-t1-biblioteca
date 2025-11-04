//retorna um objeto Date completo com o horário atual
export async function obterDataHoraServidor() {
  try {
    const resp = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo", { cache: "no-store" });
    const json = await resp.json();
    return new Date(json.unixtime * 1000); // instante correto
  } catch {
    return new Date();
  }
}

// retorna uma data (dd/mm/yyyy) a partir de um objeto Date() em milissegundos
export function hojeISO(dataMs) {
  const d = new Date(dataMs);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${dd}/${mm}/${yyyy}`;
}

// retorna uma hora (hh:mm) a partir de um objeto Date() em milissegundos no fuso de Brasília
export function horaBrasilia(dataMs) {
  const dataLocal = new Date(
    new Date(dataMs).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
  );
  const hh = String(dataLocal.getHours()).padStart(2, "0");
  const mm = String(dataLocal.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

