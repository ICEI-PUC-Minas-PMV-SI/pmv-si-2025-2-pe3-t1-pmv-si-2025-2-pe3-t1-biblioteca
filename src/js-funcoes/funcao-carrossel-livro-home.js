//atribui o ISBN dos livros correspondentes como id das âncoras do carrossel de livros mais acessados na página inicial

import { ClasseLivro } from "../js-classes/classe-livro.js"

export function carregarAncorasCarrossel(isbn1, isbn2, isbn3, isbn4, isbn5, isbn6, isbn7, isbn8){

    const vetorISBNs = [isbn1, isbn2, isbn3, isbn4, isbn5, isbn6, isbn7, isbn8]

    const ancoras = document.querySelectorAll(".mais-acessados")

    let i

    for(i=0; i<ancoras.length; i++){

        //atribui como id de cada âncora do carrossel o isbn do livro correspondente
        ancoras[i].id =  vetorISBNs[i]
    }

    let j
    let k

    for(j=0;j<ClasseLivro.vetorLivros.length;j++){

        for(k=0;k<ancoras.length;k++){

            if(ClasseLivro.vetorLivros[j].isbn === ancoras[k].id){
                
                document.getElementById(`capa-${k+1}`).src = `./src/img/capas/${ClasseLivro.vetorLivros[j].isbn}.jpg`
                document.getElementById(`capa-${k+1}`).alt = ClasseLivro.vetorLivros[j].titulo
            }
        }   
    }     
}