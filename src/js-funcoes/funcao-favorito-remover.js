import { ClasseLeitor } from "../js-classes/classe-leitor.js"

export function removerFavorito(isbn){

    const usuarioLogado = localStorage.getItem("leitor logado")

    let i

    for(i=0; i<ClasseLeitor.vetorLeitores.length;i++){

        if(ClasseLeitor.vetorLeitores[i].usuario === usuarioLogado){

            const indice = ClasseLeitor.vetorLeitores[i].meusFavoritos.indexOf(isbn)

            if(indice!== -1){

                ClasseLeitor.vetorLeitores[i].meusFavoritos.splice(indice,1)
            }

            localStorage.setItem("lista de leitores", JSON.stringify(ClasseLeitor.vetorLeitores))

            break
            
        }
    }

}