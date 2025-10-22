import { ClasseLeitor } from "../js-classes/classe-leitor.js"

export function adicionarFavorito(isbn){

    const usuarioLogado = localStorage.getItem("leitor logado")

    let i

    for(i=0; i<ClasseLeitor.vetorLeitores.length;i++){

        if(ClasseLeitor.vetorLeitores[i].usuario === usuarioLogado){

            ClasseLeitor.vetorLeitores[i].meusFavoritos.push(isbn)

            localStorage.setItem("lista de leitores", JSON.stringify(ClasseLeitor.vetorLeitores))

            break
            
        }
    }
}