const selectSearch = document.getElementById("selectSearch")
const tipoDeBusca = document.getElementById("tipo-de-busca")
const listHidden = document.getElementById("list-hidden")

tipoDeBusca.addEventListener("click", (event) => {
    event.preventDefault()

    listHidden.classList.toggle("hidden")
})


