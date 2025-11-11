import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"


export function selecionarLivro(leitor, livro) {


    if (ClasseLeitor.leitorLogado === "") {
        showAlertSync({
            title: "Usuário não logado",
            message: "Acesse sua conta para adicionar um livro à sua seleção."
        })
        return
    }

    //verificando se o livro já se encontra na seleção do leitor
    let duplicidade = false
    let i

    for(i=0;i<leitor.minhaSelecao.length;i++){

        if(leitor.minhaSelecao[i].tombo === livro.tombo){

            duplicidade = true
            break
        }
    }
    
    if(duplicidade){

        showAlertSync({
            title: "Livro já adicionado",
            message: "Este título já consta em sua seleção de livros."
        })
        return
    }

    //atualiza a lista de leitores pra incluir a nova seleção
    leitor.minhaSelecao.push(livro)
    localStorage.setItem("lista de leitores", JSON.stringify(ClasseLeitor.vetorLeitores))


    showAlertSync({
        title: "Seleção concluída",
        message: `${leitor?.nome || "Leitor"}, o livro '${livro.titulo}' foi adicionado à sua seleção!`
    }, () => {
        // window.location.href = "../../src/html-paginas/reservas.html";
    })

}




