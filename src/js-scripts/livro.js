const reserveContainer = document.querySelector(".reserve-container")
const reserveButton = document.getElementById("livro-reservar")
const selectButton = document.getElementById("livro-selecionar")
const allContainers = document.querySelectorAll(".opacity05")
const buttonCancelReserve = document.getElementById("botao-cancelar-reserva")
const buttonConfirmReserve = document.getElementById("botao-confirmar-reserva")

reserveButton.addEventListener("click", (event) => {
    event.preventDefault();

    reserveContainer.style.display = "flex";
    allContainers.forEach(container => {
        container.style.opacity = "0.2"
    })
})

buttonCancelReserve.addEventListener("click", (event) => {
    event.preventDefault();

    reserveContainer.style.display = "none";
    allContainers.forEach(container => {
        container.style.opacity = "1"
    })
})
