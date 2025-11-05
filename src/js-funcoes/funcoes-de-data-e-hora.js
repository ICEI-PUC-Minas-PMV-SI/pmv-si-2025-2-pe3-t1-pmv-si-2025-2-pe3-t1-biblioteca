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

// calcula o instante-limite (em ms) respeitando o horário de Brasília
export function calcularLimiteReserva(dataMs) {
  const baseUTC = new Date(dataMs);

  // Extrai campos de data/hora no fuso de Brasília sem gerar string ambígua
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(baseUTC);

  const get = (type) => Number(parts.find(p => p.type === type).value);
  const y = get("year");
  const m = get("month");   // 1–12
  const d = get("day");     // 1–31
  const hh = get("hour");   // 0–23
  const mm = get("minute"); // 0–59

  // Dia da semana no fuso local: 0=Dom,1=Seg,...,6=Sáb
  const dw = new Date(y, m - 1, d, hh, mm, 0, 0).getDay();

  const ABRE = 7;
  const FECHA = 20;
  const MS = (h) => h * 60 * 60 * 1000;

  // helpers para construir instantes no fuso local (máquina do usuário)
  const ts = (yy, mo, dd, hr, mi) => new Date(yy, mo - 1, dd, hr, mi, 0, 0).getTime();

  // Segunda (1) a Quinta (4)
  if (dw >= 1 && dw <= 4) {
    if (hh >= ABRE && hh < FECHA) {
      // Regra 1: dentro do horário → +24h
      return dataMs + MS(24);
    } else {
      // Regra 2: após 20:00 → dia seguinte às 20:00
      return ts(y, m, d + 1, FECHA, 0);
    }
  }

  // Sexta (5)
  if (dw === 5) {
    if (hh < ABRE) {
      // Regra 3: sexta antes de abrir → sexta às 20:00
      return ts(y, m, d, FECHA, 0);
    }
    if (hh >= ABRE && hh < FECHA) {
      // Regra 4: sexta no horário útil → mesmo horário na próxima segunda
      const diasParaSeg = (1 - dw + 7) % 7 || 7; // para sexta, dá 3
      return ts(y, m, d + diasParaSeg, hh, mm);
    }
    // Regra 5: sexta após 20:00 → segunda às 20:00
    const diasParaSeg = (1 - dw + 7) % 7 || 7; // 3
    return ts(y, m, d + diasParaSeg, FECHA, 0);
  }

  // Sábado (6) ou Domingo (0) → segunda às 20:00
  if (dw === 6 || dw === 0) {
    const diasParaSeg = (1 - dw + 7) % 7 || 7; // sáb->2, dom->1
    return ts(y, m, d + diasParaSeg, FECHA, 0);
  }
}
