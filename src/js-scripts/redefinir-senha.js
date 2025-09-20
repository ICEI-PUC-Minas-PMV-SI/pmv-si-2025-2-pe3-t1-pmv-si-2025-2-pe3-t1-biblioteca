import { showAlertSync, showValidateFixSync, showConfirmSync } from "../js-funcoes/funcoes-de-dialogo.js";
import { logarDireto } from "../js-funcoes/funcao-logar.js"
import { _applyLoginStateNow } from "./login-persistencia.js";
import { ClasseLeitor } from "../js-classes/classe-leitor.js";

let vetorLeitores = JSON.parse(localStorage.getItem("lista de leitores")) || []

let indiceEncontrado 

(function initWhenReady() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

function init() {
  // ===== Config =====
  const OTP_EXPECTED = "123456"; // simulado

  // ===== Utils =====
  function blurNow(el) {
    if (!el) return;
    try { el.blur(); } catch {}
  }

  function focusOtpFirstAggressive(maxMs = 1200, stepMs = 50) {
    const first = document.querySelector("#otp .codigo-validacao__input");
    if (!first) return;
    const start = performance.now();

    (function loop() {
      try {
        first.focus({ preventScroll: true });
        first.select?.();
        first.setSelectionRange?.(0, 0);
      } catch {}

      if (document.activeElement !== first && performance.now() - start < maxMs) {
        setTimeout(loop, stepMs);
      }
    })();
  }

  function setOtpState(state) {
    if (!otpBox) return;
    otpBox.classList.remove("otp--erro", "otp--ok");
    if (state) otpBox.classList.add(state);
  }

  function shakeOtp() {
    if (!otpBox) return;
    otpBox.classList.remove("otp--erro");
    void otpBox.offsetWidth; // reflow
    otpBox.classList.add("otp--erro");
  }

  function showStep(step) {
    if (sec1) sec1.hidden = step !== 1;
    if (sec2) sec2.hidden = step !== 2;
    if (sec3) sec3.hidden = step !== 3;
  }

  // ===== DOM Refs =====
  const sec1 = document.getElementById("sec1");
  const sec2 = document.getElementById("sec2");
  const sec3 = document.getElementById("sec3");

  const inputEmail   = document.getElementById("redefinir-senha_email");
  const btnEnviar    = document.getElementById("enviar-codigo_botao-confirmar");
  const btnCancelar1 = document.getElementById("enviar-codigo_botao-cancelar");

  const otpBox = document.getElementById("otp");
  const inputs = document.querySelectorAll("#otp .codigo-validacao__input");
  const hidden = document.getElementById("codigo-validacao");

  const btnRedefinirSenha = document.getElementById("redefinir-senha_botao-confirmar")
  const btnCancelar3 = document.getElementById("redefinir-senha_botao-cancelar");

  otpBox?.addEventListener("animationend", () => otpBox.classList.remove("otp--erro"));

  // ===== Etapa 1 -> 2 =====
  btnEnviar?.addEventListener("click", () => {
    const email = (inputEmail?.value || "").trim();

    if (!email) {
      showAlertSync(
        { title: "Atenção", message: "Informe o e-mail para prosseguir." },
        () => {
          inputEmail?.focus();
        }
      );
      return;
    } 

  let existeEmail = false
  
  let i

  for (i = 0; i < vetorLeitores.length; i++) {
    if (email === vetorLeitores[i].email) {
      
      existeEmail = true
      indiceEncontrado = i

    } else {
      //não faz nada
    }
  }

  if(!existeEmail){

    showValidateFixSync(
        {
          title: "E-mail não encontrado",
          message: "O e-mail inserido não consta em nossa base de dados.",
          cancelText: "Cancelar procedimento",
          continueText: "Corrigir o e-mail",
        },
        (ok) => {

          if (ok) {
            inputEmail?.focus()
            
          } else {
            // Cancelar → redireciona pro index
            window.location.href = "../../index.html";
            
          }
        }
      );
  }

  if(existeEmail){
    blurNow(btnEnviar);

    showAlertSync(
      { title: "Código enviado", message: "Enviamos um código de 6 dígitos para seu e-mail." },
      () => {
        showStep(2);
        blurNow(document.activeElement);
        focusOtpFirstAggressive();
      }
    );
  }
  
});

  // Cancelar na etapa 1
  btnCancelar1?.addEventListener("click", (e) => {
     e.preventDefault();
   
     showConfirmSync(
       {
         title: "Cancelar redefinição de senha",
         message: "Todos os dados preenchidos serão perdidos.",
         confirmText: "Cancelar o procedimento",
         cancelText: "Continuar o procedimento",
       },
       (ok) => {
         if (ok) {
         // Cancelar → redireciona pro index
              window.location.href = "../../index.html"
       } else {
        finalizarCancelamento()
              
        }
      }
     );
  });

  // ===== OTP =====
  const hasOTP = inputs && inputs.length === 6;

  function updateHidden(code) {
    if (hidden) hidden.value = code;
  }

  function getOtpValue() {
    return Array.from(inputs).map((i) => i.value || "").join("");
  }

  function clearOtp() {
    inputs?.forEach((i) => (i.value = ""));
    updateHidden("");
  }

  function updateHiddenAndValidate() {
    const code = getOtpValue();
    updateHidden(code);

    if (code.length === (inputs ? inputs.length : 0)) {
      if (code === OTP_EXPECTED) {
        setOtpState("otp--ok");
        showStep(3);
        document.getElementById("nova-senha")?.focus();
      } else {
        // Apenas um shake ANTES da mensagem
        setOtpState("otp--erro");
        shakeOtp();

        // Caixa estilo confirm
        showValidateFixSync(
          {
            title: "Código inválido",
            message: "O código digitado não confere. Deseja tentar novamente?",
            cancelText: "Cancelar procedimento",
            continueText: "Inserir código novamente",
          },
          (ok) => {
            if (ok) {
              // Tentar de novo → limpa e volta pro 1º dígito
              clearOtp();
              blurNow(document.activeElement);
              focusOtpFirstAggressive();
            } else {
              // Cancelar → redireciona pro index
              window.location.href = "../../index.html";
            }
          }
        );
      }
    }
  }

  if (hasOTP) {
    inputs.forEach((inp, i) => {
      inp.addEventListener("input", (e) => {
        const t = e.target;
        t.value = String(t.value).replace(/\D/g, "").slice(0, 1);
        setOtpState(null);

        if (t.value && i < inputs.length - 1) {
          inputs[i + 1].focus();
        }
        updateHiddenAndValidate();
      });

      inp.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !inp.value && i > 0) {
          inputs[i - 1].focus();
        }
      });

      inp.addEventListener("paste", (e) => {
        const txt = (e.clipboardData || window.clipboardData)
          .getData("text")
          .replace(/\D/g, "")
          .slice(0, inputs.length);

        if (!txt) return;
        e.preventDefault();

        txt.split("").forEach((ch, idx) => {
          if (inputs[idx]) inputs[idx].value = ch;
        });

        const lastIdx = Math.min(txt.length, inputs.length) - 1;
        (inputs[lastIdx] || inp).focus();

        setOtpState(null);
        updateHiddenAndValidate();
      });
    });
  }

  // ===== Etapa 3 =====

    btnRedefinirSenha?.addEventListener("click", (e) => {

      e.preventDefault()

      const novaSenha = document.getElementById("nova-senha")
      const repitaNovaSenha = document.getElementById("repita-nova-senha")

      if(novaSenha.value !== repitaNovaSenha.value){

        showAlertSync({
          title: "Senhas diferentes",
          message: "As senhas digitadas não estão iguais. Repita o procedimento."
          });
        return

      }else{

        
        vetorLeitores[indiceEncontrado].senha = novaSenha.value
        
        localStorage.setItem("lista de leitores", JSON.stringify(vetorLeitores))
        ClasseLeitor.vetorLeitores = JSON.parse(localStorage.getItem("lista de leitores")) || []
      
        vetorLeitores = ClasseLeitor.vetorLeitores

        logarDireto(vetorLeitores[indiceEncontrado].usuario, novaSenha.value)
       
        
        const leitorLogado = localStorage.getItem("leitor logado") || "";
        
        // Verifica se há um usuário logado
        if (leitorLogado.trim() !== "") {
          // Seleciona o <span> dentro do botão "Entrar"
          const rotuloLogin = document.querySelector(".entrar-rotulo span");
      
          // Substitui o "Entrar" pelo nome de usuário
          if (rotuloLogin) {
            rotuloLogin.textContent = leitorLogado;
          }
      
          _applyLoginStateNow();
        }

      blurNow(document.activeElement);
      showAlertSync(
        { title: "Senha alterada com sucesso", message: "Você será redirecionado para a página inicial." },
        () => { window.location.href = "../../index.html"; }
      );

      }

    })
   btnCancelar3?.addEventListener("click", (e) => {
     e.preventDefault()
   
     showConfirmSync(
       {
         title: "Cancelar redefinição de senha",
         message: "Todos os dados preenchidos serão perdidos.",
         confirmText: "Cancelar o procedimento",
         cancelText: "Continuar o procedimento",
       },
       (ok) => {
         if (ok) {
          // Cancelar → redireciona pro index
              window.location.href = "../../index.html";
       } else {
              
       }
       
      }
     );
  });

  // inicial
  showStep(1);
}
