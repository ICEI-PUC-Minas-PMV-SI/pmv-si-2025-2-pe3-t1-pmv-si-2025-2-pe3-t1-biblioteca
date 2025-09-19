// MÁSCARA DO TELEFONE
const tel = document.querySelector('#telefone');

const formatTelefoneBR = (value) => {
  const d = value.replace(/\D/g, '').slice(0, 11); // só dígitos, máx 11
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0,2)}) ${d.slice(2)}`;
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
};

tel.addEventListener('input', (e) => {
  const raw = e.target.value;
  e.target.value = formatTelefoneBR(raw);
  e.target.setSelectionRange(e.target.value.length, e.target.value.length);
});

tel.addEventListener('blur', () => {
  const digits = tel.value.replace(/\D/g, '');
  if (!digits) {
    // se não digitou nada, deixa em branco (placeholder volta a aparecer)
    tel.value = '';
    tel.setCustomValidity('');
  } else if (digits.length !== 11) {
    // inválido: mostra erro
    tel.setCustomValidity('Telefone deve ter 11 dígitos (ex.: (33) 98877-2211).');
  } else {
    tel.setCustomValidity('');
  }
});
// ________________________

// MÁSCARA DO CPF
const cpfInput = document.querySelector('#cpf');

// Formata: 999.888.777-33
function formatCPF(value) {
  const d = (value || '').replace(/\D/g, '').slice(0, 11); // só dígitos, máx 11
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0,3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0,3)}.${d.slice(3,6)}.${d.slice(6)}`;
  return `${d.slice(0,3)}.${d.slice(3,6)}.${d.slice(6,9)}-${d.slice(9,11)}`;
}

// Validação dos dígitos verificadores do CPF
function isValidCPF(cpfDigits) {
  // precisa ter 11 dígitos
  if (!/^\d{11}$/.test(cpfDigits)) return false;

  // rejeita sequências repetidas (000..., 111..., etc.)
  if (/^(\d)\1{10}$/.test(cpfDigits)) return false;

  const nums = cpfDigits.split('').map(n => parseInt(n, 10));

  // 1º dígito verificador
  let sum1 = 0;
  for (let i = 0; i < 9; i++) sum1 += nums[i] * (10 - i);
  let d1 = (sum1 * 10) % 11;
  if (d1 === 10) d1 = 0;
  if (d1 !== nums[9]) return false;

  // 2º dígito verificador
  let sum2 = 0;
  for (let i = 0; i < 10; i++) sum2 += nums[i] * (11 - i);
  let d2 = (sum2 * 10) % 11;
  if (d2 === 10) d2 = 0;
  if (d2 !== nums[10]) return false;

  return true;
}

if (cpfInput) {
  cpfInput.addEventListener('input', (e) => {
    const raw = e.target.value;
    e.target.value = formatCPF(raw);
    // cursor simples no fim — estável o bastante para digitar e colar
    e.target.setSelectionRange(e.target.value.length, e.target.value.length);
  });

  cpfInput.addEventListener('blur', () => {
    const digits = cpfInput.value.replace(/\D/g, '');

    // se não digitou nada (ou apagou tudo), volta ao placeholder
    if (!digits) {
      cpfInput.value = '';
      cpfInput.setCustomValidity('');
      return;
    }

    if (!isValidCPF(digits)) {
      cpfInput.setCustomValidity('CPF inválido.');
      // Alerta visual do seu sistema
      if (typeof showAlertSync === 'function') {
        showAlertSync({
          title: 'CPF inválido',
          message: 'Confira o número informado. O CPF deve estar no formato 999.888.777-33 e possuir dígitos verificadores válidos.'
        });
      }
      // opcional: focar de volta no campo
      // cpfInput.focus();
    } else {
      cpfInput.setCustomValidity('');
    }
  });
}
// __________________

// MÁSCARA DO CEP
const cepInput = document.querySelector('#cep');

// Formata: 33000-000
function formatCEP(value) {
  const d = (value || '').replace(/\D/g, '').slice(0, 8); // só dígitos, máx 8
  if (d.length <= 5) return d;
  return `${d.slice(0,5)}-${d.slice(5,8)}`;
}

if (cepInput) {
  cepInput.addEventListener('input', (e) => {
    const raw = e.target.value;
    e.target.value = formatCEP(raw);
    // cursor no fim
    e.target.setSelectionRange(e.target.value.length, e.target.value.length);
  });

  cepInput.addEventListener('blur', () => {
    const digits = cepInput.value.replace(/\D/g, '');

    if (!digits) {
      // apagou tudo → volta pro placeholder
      cepInput.value = '';
      cepInput.setCustomValidity('');
      return;
    }

    if (digits.length !== 8) {
      cepInput.setCustomValidity('CEP deve ter 8 dígitos (ex.: 33000-000).');
      if (typeof showAlertSync === 'function') {
        showAlertSync({
          title: 'CEP inválido',
          message: 'Confira o número informado. O CEP deve ter 8 dígitos no formato 33000-000.'
        });
      }
    } else {
      cepInput.setCustomValidity('');
    }
  });
}
// ________________________________-

