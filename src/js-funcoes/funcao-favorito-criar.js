import { ClasseLivro } from "../js-classes/classe-livro.js"


export function criarFavoritos(vetorFavoritos){

    let j
    let k

    //encontra o título dos livros:
    for(j=0;j<ClasseLivro.vetorLivros.length;j++){
        for(k=0;k<vetorFavoritos.length;k++){

            //se achar o ISBN do favorito entre os livros da lista de livros, vai criar o elemento na página de favoritos
            if(vetorFavoritos[k] === ClasseLivro.vetorLivros[j].isbn){

                //cria a div que vai conter tanto a âncora quanto o botão de lixeira:
                const container = document.createElement("div")
                container.className = "container-do-favorito"

                //cria a âncora que conterá o favorito
                const ancoraFavorito = document.createElement("a")
                ancoraFavorito.className = "capa-favorito"
                ancoraFavorito.href = ""
                ancoraFavorito.id = vetorFavoritos[k]
                ancoraFavorito.title = `Clique para ir para a página do livro`

                //cria a imagem que contém a capa do livro:
                const imagem = document.createElement("img")
                imagem.src = `../img/capas/${vetorFavoritos[k]}.jpg`
                imagem.alt = ClasseLivro.vetorLivros[j].titulo

                //cria o span que contém o título do livro
                const tituloFavorito = document.createElement("span")
                tituloFavorito.textContent = ClasseLivro.vetorLivros[j].titulo

                //Esse trecho cria todos os elementos necessários para o botão de excluir favorito

                // Cria o botão
                const botaoLixeira = document.createElement("button")
                botaoLixeira.className = "btn-trash";
                botaoLixeira.type = "button"
                botaoLixeira.id = `lixeira-${vetorFavoritos[k]}`
                botaoLixeira.setAttribute("aria-label", "Remover dos favoritos")
                botaoLixeira.title = "Remover dos favoritos"

                // Cria o SVG
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
                svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
                svg.setAttribute("viewBox", "0 0 24 24")
                svg.setAttribute("width", "24")
                svg.setAttribute("height", "24")
                svg.setAttribute("fill", "none")
                svg.setAttribute("stroke", "currentColor")
                svg.setAttribute("stroke-width", "1.8")
                svg.setAttribute("stroke-linecap", "round")
                svg.setAttribute("stroke-linejoin", "round")
                svg.classList.add("icon-trash")

                // Adiciona os caminhos
                const paths = [
                { d: "M3 6h18" },
                { d: "M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6" },
                { d: "M10 11v6M14 11v6" }
                ]

                // Retângulo do corpo
                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
                rect.setAttribute("x", "5")
                rect.setAttribute("y", "6")
                rect.setAttribute("width", "14")
                rect.setAttribute("height", "15")
                rect.setAttribute("rx", "2")
                svg.appendChild(rect)

                // Cria os paths e adiciona ao SVG
                paths.forEach(p => {
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
                path.setAttribute("d", p.d)
                svg.appendChild(path)
                })

                // Junta SVG dentro do botão
                botaoLixeira.appendChild(svg)

                //atribui parentalidade ("div" como filho da section de favoritos")
                const secao = document.getElementById("grade-favoritos")
                secao.appendChild(container)

                //atribui parentalidade ("a" como filho da div container)
                container.appendChild(ancoraFavorito)

                //atribui parentalidade ("button" como filho da div container)
                container.appendChild(botaoLixeira)

                //atribui a parentalidade ("a" como pai de "img" e "span")
                ancoraFavorito.appendChild(imagem)
                ancoraFavorito.appendChild(tituloFavorito)

            }
        }

    }



}