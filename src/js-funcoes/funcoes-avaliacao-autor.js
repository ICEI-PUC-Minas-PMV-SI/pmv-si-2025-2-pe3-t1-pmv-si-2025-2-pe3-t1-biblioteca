import { ClasseAvaliacaoAutor } from "../js-classes/classe-avaliacao-autor.js"
import {showAlertSync, showConfirmSync} from "./funcoes-de-dialogo.js"
import { obterDataHoraServidor, hoje } from "./funcoes-de-data-e-hora.js"

export async function avaliarAutor(leitor, autor){

    let concluiu = false

    const nota = parseInt(document.querySelector('input[name="rating"]:checked')?.value)

    if(!nota){

        await showAlertSync({
        title: "Atribua uma nota",
        message: "Ao avaliar um autor, é necessário atribuir uma nota de 1 a 5."
        })
        return concluiu
    }

    const comentario = document.getElementById("comentario").value

    const dataMs = await obterDataHoraServidor()
    const dataHoje = hoje(dataMs)

    if(!jaComentou(autor.id, leitor)){

      //capta o total de avaliações já feitas, mesmo que tenham sido apagadas
      let totalAvaliacoes = localStorage.getItem("total de avaliações - autores") || 0

      //o id da avaliação será o total de avaliações incrementado
      const idAvaliacao = ++totalAvaliacoes

      const texto = `Avaliado em ${dataHoje}`

      const avaliacao = new ClasseAvaliacaoAutor(idAvaliacao, texto, leitor.id, leitor.usuario, autor.id, autor.nomeAutor, nota, comentario)

      localStorage.setItem("total de avaliações - autores", totalAvaliacoes)

      ClasseAvaliacaoAutor.vetorAvaliacoes.push(avaliacao)

    } else if(jaComentou(autor.id, leitor)){

      const avaliacaoAnterior = ClasseAvaliacaoAutor.vetorAvaliacoes.find(a => a.idAutor === autor.id && a.usuario === leitor.usuario)

      avaliacaoAnterior.nota = nota
      avaliacaoAnterior.comentario = comentario
      avaliacaoAnterior.dataTexto = `Editado em ${dataHoje}`

    }

    localStorage.setItem(ClasseAvaliacaoAutor.chaveLS, JSON.stringify(ClasseAvaliacaoAutor.vetorAvaliacoes))

    concluiu = true

    if(comentario === ""){

        await showAlertSync({
        title: "Avaliação registrada",
        message: "A nota atribuída ao autor foi registrada com sucesso."
        })

        return concluiu
        
    } else{

    await showAlertSync({
        title: "Avaliação registrada",
        message: "Obrigado por sua avaliação. Agora sua avaliação pode ser visualizada na página do autor."
        })

        return concluiu
    }

}

export function calcularMediaAutor(id){

    
    let media = 0
    let soma = 0

    let notasAutor = []

    let i

    for(i=0; i<ClasseAvaliacaoAutor.vetorAvaliacoes.length;i++){

        if(ClasseAvaliacaoAutor.vetorAvaliacoes[i].idAutor === id){

            notasAutor.push(ClasseAvaliacaoAutor.vetorAvaliacoes[i].nota)
        }
    }

    let j

    for(j=0; j<notasAutor.length;j++){

        soma = soma + notasAutor[j]
    }

    media = soma/(notasAutor.length)

    // retorna a média arredondada para 1 casa decimal
    return media.toFixed(1)

}

// essa é a função que vai efetivamente preencher as estrelas representando a nota média recebida pelo autor, considerando todos os usuários que o avaliaram

export function preencherEstrelas(media) {

  // pega os dois blocos de estrelas
  const blocoCima  = document.querySelector("#rating-media-topo .rating-display__stars");
  const blocoBaixo = document.querySelector("#rating-media-abaixo .rating-display__stars");

  if (!blocoCima) return;

  // sanitiza média
  let m = Number(media) || 0;
  m = Math.max(0, Math.min(5, m));          // força entre 0 e 5
  m = Math.floor(m * 10) / 10;              // arredonda para 1 casa
  const textoMedia = String(m).replace(".", ",");

  // função interna que preenche um bloco de estrelas
  function aplicarPreenchimento(bloco, { setTitle }) {
    if (!bloco) return;

    const wrappers = bloco.querySelectorAll(".estrela-wrapper");

    // aplica title só no bloco de cima
    if (setTitle) {
      bloco.title = `A nota média desse autor é de ${textoMedia} de 5`;
    } else {
      bloco.removeAttribute("title");
    }

    wrappers.forEach((wrapper, index) => {
      const mask = wrapper.querySelector(".estrela-wrapper__mask");
      if (!mask) return;

      const diff = m - index;               // diferença entre estrela atual e média
      let pct;

      if (diff >= 1) {
        pct = 100;                           // estrela cheia
      } else if (diff <= 0) {
        pct = 0;                             // estrela vazia
      } else {
        // estrela fracionada: calcula percentual exato...
        pct = diff * 100;

        // ... aplica boost de preenchimento
        pct = pct + 9;

        // impede passar de 100%
        pct = Math.min(pct, 100);
      }

      mask.style.width = `${pct}%`;
    });
  }

  // aplica no topo (com title) e na seção abaixo (sem title)
  aplicarPreenchimento(blocoCima,  { setTitle: true });
  aplicarPreenchimento(blocoBaixo, { setTitle: false });
}



// retorna a quantidade de avaliações que o autor recebeu
export function quantidadeAvaliacoes(id){

    let notasAutor = []

    let i

    for(i=0; i<ClasseAvaliacaoAutor.vetorAvaliacoes.length;i++){

        if(ClasseAvaliacaoAutor.vetorAvaliacoes[i].idAutor === id){

            notasAutor.push(ClasseAvaliacaoAutor.vetorAvaliacoes[i].nota)
        }
    }

    return notasAutor.length
}

export function preencherBarras(id){

  let vetorNotas = []

  let i

  for(i=0; i<ClasseAvaliacaoAutor.vetorAvaliacoes.length;i++){

    if(ClasseAvaliacaoAutor.vetorAvaliacoes[i].idAutor === id){

        vetorNotas.push(ClasseAvaliacaoAutor.vetorAvaliacoes[i].nota)

    }
  }

  //aqui está a quantidade total de classificações recebidas:
  const quantidadeTotal = vetorNotas.length

  //aqui estão as variáveis que guardarão a quantidade de notas 1, 2, 3, 4 e 5 que o autor recebeu, para calcular os percentuais e preencher as barras adequadamente
  const quantidadeNota1 = vetorNotas.filter(v => v === 1).length
  const quantidadeNota2 = vetorNotas.filter(v => v === 2).length
  const quantidadeNota3 = vetorNotas.filter(v => v === 3).length
  const quantidadeNota4 = vetorNotas.filter(v => v === 4).length
  const quantidadeNota5 = vetorNotas.filter(v => v === 5).length

  //aqui estão os percentuais em si
  const percentualNota1 = (quantidadeNota1/quantidadeTotal)*100 || 0
  const percentualNota2 = (quantidadeNota2/quantidadeTotal)*100 || 0
  const percentualNota3 = (quantidadeNota3/quantidadeTotal)*100 || 0
  const percentualNota4 = (quantidadeNota4/quantidadeTotal)*100 || 0
  const percentualNota5 = (quantidadeNota5/quantidadeTotal)*100 || 0

  // preenchendo as barras azuis
  document.documentElement.style.setProperty('--p-1-azul', percentualNota1 + '%')

  document.documentElement.style.setProperty('--p-2-azul', percentualNota2 + '%')

  document.documentElement.style.setProperty('--p-3-azul', percentualNota3 + '%')

  document.documentElement.style.setProperty('--p-4-azul', percentualNota4 + '%')

  document.documentElement.style.setProperty('--p-5-azul', percentualNota5 + '%')

  //mudando a barra direita das barras azuis, apenas quando necessário
  const percentuais = {

    1: percentualNota1,
    2: percentualNota2,
    3: percentualNota3,
    4: percentualNota4,
    5: percentualNota5
  }

  // colocando um title explicativo nas barras
  if(quantidadeTotal>0){
    document.querySelector(".container-barras-5").title = `${Math.round(percentualNota5)}% das classificações desse autor foram nota 5`
    document.querySelector(".container-barras-4").title = `${Math.round(percentualNota4)}% das classificações desse autor foram nota 4`
    document.querySelector(".container-barras-3").title = `${Math.round(percentualNota3)}% das classificações desse autor foram nota 3`
    document.querySelector(".container-barras-2").title = `${Math.round(percentualNota2)}% das classificações desse autor foram nota 2`
    document.querySelector(".container-barras-1").title = `${Math.round(percentualNota1)}% das classificações desse autor foram nota 1`
  }

  // carregando a numeração de classificações de cada nota:
  document.getElementById("numeracao-barra-1").textContent = quantidadeNota1
  document.getElementById("numeracao-barra-2").textContent = quantidadeNota2
  document.getElementById("numeracao-barra-3").textContent = quantidadeNota3
  document.getElementById("numeracao-barra-4").textContent = quantidadeNota4
  document.getElementById("numeracao-barra-5").textContent = quantidadeNota5

}

// essa função será chamada pela função listarAvaliacoes par a criação dinâmica das estrelas do comentário deixado pelo leitor
export function criarBlocoEstrelas(nota) {
  const rating = document.createElement("section");
  rating.classList.add("rating-display");

  const stars = document.createElement("div");
  stars.classList.add("rating-display__stars");
  rating.appendChild(stars);

  const pathD = "M12 2l3.09 6.26 6.91.99-5 4.86 \
1.18 6.89L12 17.77 5.82 21 \
l1.18-6.89-5-4.86 6.91-.99L12 2z";

  for (let s = 1; s <= 5; s++) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("estrela-wrapper");

    // SVG base (vazia)
    const baseSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    baseSvg.setAttribute("viewBox", "0 0 24 24");
    baseSvg.classList.add("estrela-svg", "estrela-svg--empty", "estrela-wrapper__base");

    const basePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    basePath.setAttribute("d", pathD);
    baseSvg.appendChild(basePath);

    // Máscara + SVG preenchida
    const maskDiv = document.createElement("div");
    maskDiv.classList.add("estrela-wrapper__mask");

    const filledSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    filledSvg.setAttribute("viewBox", "0 0 24 24");
    filledSvg.classList.add("estrela-svg", "estrela-svg--filled");

    const filledPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    filledPath.setAttribute("d", pathD);
    filledSvg.appendChild(filledPath);

    // aqui decidimos se essa estrela é cheia ou vazia
    if (s <= nota) {
      maskDiv.style.width = "100%"; // estrela cheia
    } else {
      maskDiv.style.width = "0%";   // estrela vazia
    }

    maskDiv.appendChild(filledSvg);

    wrapper.appendChild(baseSvg);
    wrapper.appendChild(maskDiv);
    stars.appendChild(wrapper);
  }

  return rating;
}

    
export async function listarAvaliacoes(id){

  // vetor que vai receber somente as avaliações do autor da página
  let vetor = []

  let i

  for(i=0; i<ClasseAvaliacaoAutor.vetorAvaliacoes.length;i++){

    if(ClasseAvaliacaoAutor.vetorAvaliacoes[i].idAutor === id){

      vetor.push(ClasseAvaliacaoAutor.vetorAvaliacoes[i])

    }
  }

  let j

  for(j=0;j<vetor.length;j++){

    if(vetor[j].comentario !=""){

      const secao = document.querySelector(".exibicao-avaliacoes")

      // criando o container geral do comentário e atribuindo hierarquia
      const containerComentario = document.createElement("div")
      containerComentario.classList.add("container-comentario")
      secao.appendChild(containerComentario)

      // criando o container do nome de usuário e data e atribuindo hierarquia
      const containerNomeData = document.createElement("div")
      containerNomeData.classList.add("container-nome-data-avaliacao")
      

      //criando o span que contém o nome de usuário do leitor que comentou e atribuindo hierarquia
      const usuario = document.createElement("span")
      usuario.classList.add("nome-avaliador")
      containerNomeData.appendChild(usuario)

      //criando o span que contém a data do comentário e atribuindo hierarquia
      const data = document.createElement("span")
      data.classList.add("data-avaliacao")
      containerNomeData.appendChild(data)

      const estrelas = criarBlocoEstrelas(vetor[j].nota)
      
      //criando o parágrafo que contém o comentário e atribuindo hierarquia
      const comentario = document.createElement("p")
      comentario.classList.add("comentario-exibicao")
      
      //criando o container que engloba tudo acima, pra separar da lixeira
      const containerExcetoLixeira = document.createElement("div")
      containerExcetoLixeira.classList.add("container-exceto-lixeira")

      const containerLixeira = document.createElement("div")
      containerLixeira.classList.add("lixeira-comentario-autor")

      const botaoLixeira = document.createElement("button");
      containerLixeira.appendChild(botaoLixeira)
      botaoLixeira.className = "btn-trash";
      botaoLixeira.type = "button";
      botaoLixeira.id = `lixeira-${vetor[j].idAvaliacaoAutor}`;

      botaoLixeira.setAttribute("aria-label", "Remover avaliação");
      botaoLixeira.title = "Remover avaliação";
      // Cria o SVG
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("width", "24");
      svg.setAttribute("height", "24");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "1.8");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      svg.classList.add("icon-trash");

      // Adiciona os caminhos
      const paths = [
        { d: "M3 6h18" },
        { d: "M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6" },
        { d: "M10 11v6M14 11v6" },
      ];

      // Retângulo do corpo
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", "5");
      rect.setAttribute("y", "6");
      rect.setAttribute("width", "14");
      rect.setAttribute("height", "15");
      rect.setAttribute("rx", "2");
      svg.appendChild(rect);

      // Cria os paths e adiciona ao SVG
      paths.forEach((p) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", p.d);
        svg.appendChild(path);
      });

      // Junta SVG dentro do botão
      botaoLixeira.appendChild(svg);

      //atribuindo a hierarquia do container-comentario
      containerComentario.appendChild(containerExcetoLixeira)
      containerComentario.appendChild(containerLixeira)
      containerExcetoLixeira.appendChild(containerNomeData)
      containerExcetoLixeira.appendChild(estrelas)
      containerExcetoLixeira.appendChild(comentario)
      
      usuario.textContent = vetor[j].usuario
      data.textContent = vetor[j].dataTexto
      comentario.textContent = vetor[j].comentario
      estrelas.title = `Nota ${vetor[j].nota} de 5`
    }
  }
}

export function removerAvaliacao(avaliacao){

  
  let removeu = false

  const indice = ClasseAvaliacaoAutor.vetorAvaliacoes.indexOf(avaliacao)
  
  if(indice!== -1){

    ClasseAvaliacaoAutor.vetorAvaliacoes.splice(indice, 1)

    localStorage.setItem("lista de avaliações - autores",JSON.stringify( ClasseAvaliacaoAutor.vetorAvaliacoes))
    
    removeu = true
    return removeu

  }
    
}

export function jaComentou(id, leitor){

  let ja = false

  let i

  const usuarioLogado = localStorage.getItem("leitor logado") || ""
  if(usuarioLogado != ""){
    for(i=0; i<ClasseAvaliacaoAutor.vetorAvaliacoes.length;i++){

      if(ClasseAvaliacaoAutor.vetorAvaliacoes[i].usuario === leitor.usuario && ClasseAvaliacaoAutor.vetorAvaliacoes[i].idAutor === id){

        ja = true
      } 
    }
  }
  return ja
}