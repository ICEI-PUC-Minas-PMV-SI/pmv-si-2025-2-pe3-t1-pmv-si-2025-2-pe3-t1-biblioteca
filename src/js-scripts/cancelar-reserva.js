import { showConfirmSync, showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { cancelarReserva } from "../js-funcoes/funcao-cancelar-reserva.js"

document.addEventListener("click", (e) => {
  const alvo = e.target.closest(".botao-cancelar-reserva")
  if (!alvo) return

  e.preventDefault()

  const idReserva = Number(alvo.id.split("/")[1])
  const leitor = ClasseLeitor.vetorLeitores.find(l => l.usuario === ClasseLeitor.leitorLogado)
  const reserva = leitor?.minhasReservas?.find(r => r.idReserva === idReserva)
  if (!reserva) return

  showConfirmSync(
    {
      title: "Prosseguir com o cancelamento",
      message: "Deseja cancelar sua reserva?",
      confirmText: "Cancelar essa reserva",
      cancelText: "Manter essa reserva",
    },
    (ok) => {
      if (!ok) return

      // Mostra o alerta e SÓ DEPOIS executa o cancelamento
      showAlertSync(
        {
          title: "Reserva cancelada",
          message: "Sua reserva foi cancelada e agora o livro está disponível para outros leitores.",
          okText: "OK",
        },
        () => {
          cancelarReserva(reserva, leitor)
          // Se quiser recarregar depois do OK, faça aqui:
          // window.location.reload()
        }
      )
    }
  )
})
