const reserveContainer = document.querySelector(".reserve-container")
const reserveButton = document.getElementById("livro-reservar")
const selectButton = document.getElementById("livro-selecionar")
const allContainers = document.querySelectorAll(".opacity05")

reserveButton.addEventListener("click", (event) => {
    event.preventDefault();

    reserveContainer.style.display = "flex";
    allContainers.forEach(container => {
        container.style.opacity = "0.2"
    })
})
