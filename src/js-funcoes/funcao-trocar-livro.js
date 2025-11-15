import { ClasseLivro } from "../js-classes/classe-livro.js"

export function trocarLivro(isbn){

    let i

    for(i=0; i<ClasseLivro.vetorLivros.length; i++){

        if(ClasseLivro.vetorLivros[i].isbn === isbn) {

        
            const disponibilidade = ClasseLivro.vetorLivros[i].disponibilidade
            const titulo = ClasseLivro.vetorLivros[i].titulo
            const autor = ClasseLivro.vetorLivros[i].autor
            const genero = ClasseLivro.vetorLivros[i].genero
            const sinopse = ClasseLivro.vetorLivros[i].sinopse
            const isbn = ClasseLivro.vetorLivros[i].isbn
            const editora = ClasseLivro.vetorLivros[i].editora
            const edicao = ClasseLivro.vetorLivros[i].edicao
            const ano = ClasseLivro.vetorLivros[i].anoPublicacao
            const idioma = ClasseLivro.vetorLivros[i].idioma
            const paginas = ClasseLivro.vetorLivros[i].numeroDePaginas
            const chamada = ClasseLivro.vetorLivros[i].numeroChamada
            const capaId = ClasseLivro.vetorLivros[i].capaId

            document.getElementById("capa").src = `../img/capas/${capaId}.jpg`
            document.getElementById("disponibilidade").textContent = disponibilidade === true ? "Disponível" : "Indisponível"
            document.getElementById("titulo-livro").textContent = titulo
            document.getElementById("autor").textContent = autor
            document.getElementById("genero").textContent = genero
            document.getElementById("sinopse").textContent = sinopse
            document.getElementById("isbn").textContent = isbn
            document.getElementById("editora").textContent = editora
            document.getElementById("edicao").textContent = edicao
            document.getElementById("ano-de-publicacao").textContent = ano
            document.getElementById("idioma").textContent = idioma
            document.getElementById("paginas").textContent = paginas
            document.getElementById("chamada").textContent = chamada

            const reserveButton = document.getElementById("livro-reservar");
            const reserveDisponibility = document.getElementById("disponibilidade");
            if (reserveButton) {
                if (disponibilidade) {
                    return
                } else {
                    reserveDisponibility.style.backgroundColor = "var(--vermelho-alaranjado)";
                    reserveDisponibility.style.color = "var(--branco)"
                    reserveButton.style.cursor = "not-allowed";
                    reserveButton.disabled = true;
                    reserveButton.setAttribute("title", "Livro indisponível para reserva")
                    reserveButton.style.opacity = "0.7"
                    reserveButton.classList.remove("livro-botoes")
                }
            }
        }
    }
}

