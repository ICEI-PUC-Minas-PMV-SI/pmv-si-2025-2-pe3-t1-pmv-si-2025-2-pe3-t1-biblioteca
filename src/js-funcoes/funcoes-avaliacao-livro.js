import { ClasseAvaliacaoLivro } from "../js-classes/classe-avaliacao-livro.js"
import {showAlertSync} from "./funcoes-de-dialogo.js"


export async function avaliarLivro(leitor, livro){

    let concluiu = false

    const nota = parseInt(document.querySelector('input[name="rating"]:checked')?.value)

    if(!nota){

        await showAlertSync({
        title: "Atribua uma nota",
        message: "Ao avaliar um livro, é necessário atribuir uma nota de 1 a 5."
        })
        return concluiu
    }

    const comentario = document.getElementById("comentario").value

    const idAvaliacao = ClasseAvaliacaoLivro.vetorAvaliacoes.length + 1

    const avaliacao = new ClasseAvaliacaoLivro(idAvaliacao, leitor.id, livro.isbn, livro.titulo, nota, comentario)

    ClasseAvaliacaoLivro.vetorAvaliacoes.push(avaliacao)

    localStorage.setItem(ClasseAvaliacaoLivro.chaveLS, JSON.stringify(ClasseAvaliacaoLivro.vetorAvaliacoes))

    concluiu = true

    if(comentario === ""){

        await showAlertSync({
        title: "Avaliação registrada",
        message: "A nota atribuída ao livro foi registrada com sucesso."
        })

        return concluiu
        
    } else{

    await showAlertSync({
        title: "Avaliação registrada",
        message: "Obrigado por sua avaliação. Agora sua avaliação pode ser visualizada na página do livro."
        })

        return concluiu
    }

}

export function calcularMediaLivro(isbn){

    
    let media = 0
    let soma = 0

    let notasLivro = []

    let i

    for(i=0; i<ClasseAvaliacaoLivro.vetorAvaliacoes.length;i++){

        if(ClasseAvaliacaoLivro.vetorAvaliacoes[i].isbnLivro === isbn){

            notasLivro.push(ClasseAvaliacaoLivro.vetorAvaliacoes[i].nota)
        }
    }

    let j

    for(j=0; j<notasLivro.length;j++){

        soma = soma + notasLivro[j]
    }

    media = soma/(notasLivro.length)

    // retorna a média arredondada para 1 casa decimal
    return media.toFixed(1)

}

// essa é a função que vai efetivamente preencher as estrelas representando a nota média recebida pelo livro, considerando todos os usuários que o avaliaram

export function preencherEstrelas(media) {
  const blocoCima  = document.querySelector("#rating-media-topo .rating-display__stars");
  const blocoBaixo = document.querySelector("#rating-media-abaixo .rating-display__stars");

  if (!blocoCima) return;

  let m = Number(media) || 0;
  m = Math.max(0, Math.min(5, m));
  m = Math.floor(m * 10) / 10;

  const textoMedia = String(m).replace(".", ",");

  function aplicarPreenchimento(bloco, { setTitle }) {
    if (!bloco) return;

    const wrappers = bloco.querySelectorAll(".estrela-wrapper");

    if (setTitle) {
      bloco.title = `${textoMedia} estrelas`;
    } else {
      bloco.removeAttribute("title");
    }

    wrappers.forEach((wrapper, index) => {
      const mask = wrapper.querySelector(".estrela-wrapper__mask");
      if (!mask) return;

      const diff = m - index;
      let pct;
      if (diff >= 1) pct = 100;
      else if (diff <= 0) pct = 0;
      else pct = diff * 100;

      mask.style.width = `${pct}%`;
    });
  }

  aplicarPreenchimento(blocoCima,  { setTitle: true  });
  aplicarPreenchimento(blocoBaixo, { setTitle: false });
}



// retorna a quantidade de avaliações que o livro recebeu
export function quantidadeAvaliacoes(isbn){

    let notasLivro = []

    let i

    for(i=0; i<ClasseAvaliacaoLivro.vetorAvaliacoes.length;i++){

        if(ClasseAvaliacaoLivro.vetorAvaliacoes[i].isbnLivro === isbn){

            notasLivro.push(ClasseAvaliacaoLivro.vetorAvaliacoes[i].nota)
        }
    }

    return notasLivro.length
}