import { ClasseLeitor } from "../js-classes/classe-leitor.js"

export function removerSelecao(isbn){
 
    const leitor = ClasseLeitor.vetorLeitores.find(
    (l) => l.usuario === ClasseLeitor.leitorLogado
    );

    const indice = leitor.minhaSelecao.findIndex(r => r.isbn === isbn )

    if(indice !== -1) {
        leitor.minhaSelecao.splice(indice,1)
        localStorage.setItem("lista de leitores", JSON.stringify(ClasseLeitor.vetorLeitores))
    }

}
