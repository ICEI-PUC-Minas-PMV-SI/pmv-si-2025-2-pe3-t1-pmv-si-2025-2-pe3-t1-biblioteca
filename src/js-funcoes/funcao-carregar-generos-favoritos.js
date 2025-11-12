//atribui o NOME dos gêneros correspondentes como id das âncoras da seção "Seus gêneros favoritos"

//estou colocando a função como assíncrona porque ela estava acontecendo antes do carregamento do DOM no index, então não estava pegando as âncoras no querySelectorAll
export async function carregarSeusFavoritos(vetorGenerosFavoritos){

    await new Promise(resolve => setTimeout(resolve, 100))

    let i

    for(i=0; i<vetorGenerosFavoritos.length;i++){

        console.log(i)

        //cria a div e atribui sua classe
        const containerAncora = document.createElement("div")
        containerAncora.classList.add("ancora-genero-favorito-container")

        //cria a ancora e atribui sua classe, title, texto e id
        const ancoraFavorito = document.createElement("a")
        ancoraFavorito.classList.add("ancora-genero-favorito")
        ancoraFavorito.title = `Clique para buscar livros de ${vetorGenerosFavoritos[i].toLowerCase()}`
        ancoraFavorito.id = vetorGenerosFavoritos[i]
        ancoraFavorito.textContent = vetorGenerosFavoritos[i]

        //atribui parentalidade
        const containerTodasAncoras = document.getElementById("secao-generos-favoritos")

        containerTodasAncoras.appendChild(containerAncora)

        containerAncora.appendChild(ancoraFavorito)

        //altera o cursor
        ancoraFavorito.style.cursor = "pointer"


    }
    
}