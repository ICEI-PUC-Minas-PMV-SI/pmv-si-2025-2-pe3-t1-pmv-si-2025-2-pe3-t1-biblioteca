import { expirarReserva } from "./funcao-expirar-reserva.js"

const mensagemPadraoReserva = document.getElementById("mensagem-padrao-reserva")

export async function criarMinhasReservas(livro, reserva) {

    //chama a função que checa se a reserva expirou e, em caso positivo, altera os valores da expiração no local storage (atributos "expirou" e "status")
    const estaExpirada = await expirarReserva(reserva)

    const main = document.querySelector("main")

    mensagemPadraoReserva.style.display = "none"

    const containerReserva = document.createElement("section")
    containerReserva.classList.add("container-reserva")

    const containerCapa = document.createElement("section")
    containerCapa.classList.add("container-capa")

    const imagemCapa = document.createElement("img")
    imagemCapa.src = `../img/capas/${livro.capaId}.jpg`
    imagemCapa.alt = livro.altCapa
    imagemCapa.classList.add("capa")
    imagemCapa.id = livro.capaId

    const containerInformacaoLivro = document.createElement("section")
    containerInformacaoLivro.classList.add("container-informacoes-livro")

    const tituloDoLivro = document.createElement("h3")
    tituloDoLivro.classList.add("titulo")
    tituloDoLivro.textContent = livro.titulo

    const containerAutorEGenero = document.createElement("div")
    containerAutorEGenero.classList.add("autor-e-genero")

    const autorDoLivro = document.createElement("span")
    autorDoLivro.classList.add("autor")
    autorDoLivro.textContent = livro.autor

    const generoDoLivro = document.createElement("span")
    generoDoLivro.classList.add("genero")
    generoDoLivro.textContent = livro.genero

    const resumoDoLivro = document.createElement("span")
    resumoDoLivro.classList.add("resumo")
    resumoDoLivro.textContent = livro.descricaoCurta

    const containerInformacaoReserva = document.createElement("section")
    containerInformacaoReserva.classList.add("container-informacoes-reserva")

    const containerStatusReserva = document.createElement("section")
    containerStatusReserva.classList.add("container-status-reserva")

    const statusReserva = document.createElement("span")
    statusReserva.classList.add("status-reserva")
    statusReserva.textContent = reserva.status

    const horaLimiteRetirada = document.createElement("span")
    horaLimiteRetirada.classList.add("hora-limite-retirada")

    if(!estaExpirada){

        horaLimiteRetirada.textContent = `Você pode retirar este livro até ${reserva.diaSemanaDataLimite}, dia ${reserva.dataLimite}, às ${reserva.horarioLimite}`
    } else {

        horaLimiteRetirada.textContent = `Sua reserva expirou na ${reserva.diaSemanaDataLimite}, dia ${reserva.dataLimite}, às ${reserva.horarioLimite}`
    }

    const numeroChamada = document.createElement("span")
    numeroChamada.classList.add("numero-chamada")
    numeroChamada.textContent = "N° de chamada: " + livro.numeroChamada

    const botaoCancelarReserva = document.createElement("button")
    botaoCancelarReserva.classList.add("botao-cancelar-reserva")
    botaoCancelarReserva.textContent = "Cancelar"
    botaoCancelarReserva.id = `botao-cancelar-reserva/${reserva.idReserva}/`
    botaoCancelarReserva.title = "Clique para cancelar essa reserva"

    if (estaExpirada) {
        containerCapa.style.opacity = "0.3";
        tituloDoLivro.style.opacity = "0.3";
        containerAutorEGenero.style.opacity = "0.3";
        resumoDoLivro.style.opacity = "0.3";
        numeroChamada.style.opacity = "0.3";
        botaoCancelarReserva.style.opacity = "0.3";
        botaoCancelarReserva.classList.add("botao-reserva-expirada")
        botaoCancelarReserva.style.cursor = "not-allowed"
        botaoCancelarReserva.title = "Esta reserva está expirada"
        containerReserva.style.borderColor = "rgba(15, 4, 4, 0.2)";

        statusReserva.style.backgroundColor = "var(--vermelho-alaranjado)"
    }

    main.appendChild(containerReserva)
    containerReserva.append(containerCapa, containerInformacaoLivro)
    containerCapa.appendChild(imagemCapa)   
    containerInformacaoLivro.append(tituloDoLivro, containerAutorEGenero, resumoDoLivro, containerInformacaoReserva)
    containerInformacaoReserva.append(containerStatusReserva, botaoCancelarReserva)
    containerAutorEGenero.append(autorDoLivro, generoDoLivro)
    containerStatusReserva.append(statusReserva, horaLimiteRetirada, numeroChamada)
    
}