import {ClasseLivro} from "../js-classes/classe-livro.js"

export function carregarJanelaReserva(isbn){

    let i

    for(i=0; i<ClasseLivro.vetorLivros.length; i++){
        
        console.log(i)
        console.log(isbn)
        console.log(ClasseLivro.vetorLivros[i].isbn)

        if(ClasseLivro.vetorLivros[i].isbn === isbn){

            const disponibilidade = ClasseLivro.vetorLivros[i].disponibilidade
            const titulo = ClasseLivro.vetorLivros[i].titulo
            const autor = ClasseLivro.vetorLivros[i].autor
            const genero = ClasseLivro.vetorLivros[i].genero
            const descricao = ClasseLivro.vetorLivros[i].descricaoCurta

            console.log(titulo)

            document.getElementById("capa-janela-reserva").src = `../img/capas/${isbn}.jpg`
            document.getElementById("capa-janela-reserva").alt = titulo
            document.getElementById("titulo-livro-janela-reserva").textContent = titulo
            document.getElementById("autor-janela-reserva").textContent = autor
            document.getElementById("genero-janela-reserva").textContent = genero
            document.getElementById("resumo").textContent = descricao

            break
        }
    }

}