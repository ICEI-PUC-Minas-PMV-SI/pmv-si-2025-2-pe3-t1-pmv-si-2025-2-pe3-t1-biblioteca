import { trocarAutor } from "../js-funcoes/funcao-trocar-autor.js"
import { ClasseAutor } from "../js-classes/classe-autor.js"
import { ClasseGenero } from "../js-classes/classe-genero.js"
import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { autoresSemelhantesId } from "../js-funcoes/funcao-autores-semelhantes.js"
import { autoresSemelhantesNome } from "../js-funcoes/funcao-autores-semelhantes.js"
import { carregarAncorasCarrossel } from "../js-funcoes/funcao-carrossel-autor.js"
import { salvarTopAcessos} from "../js-funcoes/funcao-autores-mais-acessados.js"
import { persistirLike } from "../js-funcoes/funcao-favorito-persistir-autor.js"
import { salvarTopAcessosGeneros } from "../js-funcoes/funcao-generos-mais-acessados.js"
import { calcularMediaAutor, preencherEstrelas, quantidadeAvaliacoes, preencherBarras, criarBlocoEstrelas, listarAvaliacoes, jaComentou } from "../js-funcoes/funcoes-avaliacao-autor.js"
import { ClasseAvaliacaoAutor } from "../js-classes/classe-avaliacao-autor.js"

window.addEventListener("DOMContentLoaded", () => {

    //encontrando o objeto leitor
    const usuarioLogado = localStorage.getItem("leitor logado") || ""

    let leitor

    let n

    for(n=0; n<ClasseLeitor.vetorLeitores.length;n++){

        if(ClasseLeitor.vetorLeitores[n].usuario === usuarioLogado){

            leitor = ClasseLeitor.vetorLeitores[n]

            break
        }
    }

    console.log(usuarioLogado)

    //trecho que carrega as informações do autor
    const id = sessionStorage.getItem("id_autor_redirecionamento")

    trocarAutor(id)
    
    //pegando o objeto autor específico
    let i
    let autor

    for(i=0;i<ClasseAutor.vetorAutores.length;i++){

        if(ClasseAutor.vetorAutores[i].id === id){

           
            autor = ClasseAutor.vetorAutores[i]
        
            break
        }
    }
    
    //captura o vetor retornado pela função com os ids dos autores semelhantes
    const vetorSemelhantesId = autoresSemelhantesId(id, autor.generos[0], autor.generoIrmao)
    //captura o vetor retornado pela função com os nomes dos autores semelhantes
    const vetorSemelhantesNome = autoresSemelhantesNome(id, autor.generos[0], autor.generoIrmao)

    let j

    for(j=0; j<5;j++){

        document.getElementById(`foto-${j+1}`).src = `../img/fotos-autores/${vetorSemelhantesId[j]}.jpg`
        document.getElementById(`foto-${j+1}`).alt = vetorSemelhantesNome[j]
        document.getElementById(`foto-${j+1}`).title = vetorSemelhantesNome[j]
        
    }

    carregarAncorasCarrossel(vetorSemelhantesId[0],vetorSemelhantesId[1],vetorSemelhantesId[2],vetorSemelhantesId[3],vetorSemelhantesId[4])

     //incrementa o número de acessos do autor
    ClasseAutor.vetorAutores[i].numeroDeAcessos++

    //esse trecho é para incrementar o número de acessos do objeto gênero associado ao autor
    let k
    console.log(autor.generos[0])
    for(k=0;k<8;k++){

        if (autor.generos[0] === ClasseGenero.vetorGeneros[k].nomeGenero){

            ClasseGenero.vetorGeneros[k].numeroDeAcessos++

            break
        }
    }

    //atualiza a lista de gêneros no local storage
    localStorage.setItem("lista de gêneros", JSON.stringify(ClasseGenero.vetorGeneros))
    
    //atualiza a lista de autores no local storage
    localStorage.setItem("lista de autores", JSON.stringify(ClasseAutor.vetorAutores))

    //chama a função que salva o vetor de 8 autores mais acessados no local storage
    salvarTopAcessos(8)
    //chama a função que salva o vetor de 3 gêneros mais acessados no local storage
    salvarTopAcessosGeneros(3)

    // nesse trecho serão as chamadas de funções relacionadas às avaliações
    
        const media = calcularMediaAutor(id)
    
        preencherEstrelas(media)
    
        document.getElementById("quantidade-avaliacoes").textContent = `${quantidadeAvaliacoes(id)} classificaçoes`
    
        if(quantidadeAvaliacoes(id) === 0){
    
            document.querySelector("#rating-media-topo .rating-display__stars").title = "Esse autor ainda não recebeu classificações"
        }
        if(quantidadeAvaliacoes(id)>0){
    
    
            if(quantidadeAvaliacoes(id) === 1){
    
                document.getElementById("quantidade-avaliacoes").textContent = "1 classificação"
            }
            else{
            document.getElementById("quantidade-avaliacoes").textContent = `${quantidadeAvaliacoes(id)} classificações`
            }
            document.getElementById("nota-avaliacao").textContent = String(media).replace(".",",")
            document.getElementById("nota-avaliacao").style.fontSize = "5.0rem";
        }
    
        preencherBarras(id)
    
        listarAvaliacoes(id)
    
        //escondendo a lixeira das avaliações que não pertencem ao leitor logado
        const lixeiras = document.querySelectorAll('[id^="lixeira-"]')
        
        if(!usuarioLogado){
    
            lixeiras.forEach(el => {
            el.style.display = "none" 
            })
        }
    
        //encontrando o id do comentário que pertence ao leitor, caso exista
        let z
        let idAvaliacaoAutor
    
        if(usuarioLogado){
            for(z=0; z<ClasseAvaliacaoAutor.vetorAvaliacoes.length;z++){
    
                if(ClasseAvaliacaoAutor.vetorAvaliacoes[z].usuario === leitor.usuario && ClasseAvaliacaoAutor.vetorAvaliacoes[z].idAutor === id){
    
                idAvaliacaoAutor = ClasseAvaliacaoAutor.vetorAvaliacoes[z].idAvaliacaoAutor
                break
                }
            }
    
            const manter = `lixeira-${idAvaliacaoAutor}` 
            
            lixeiras.forEach(el => {
                if (el.id === manter) {
                    el.style.display = ""     
                } else {
                    el.style.display = "none" 
                }
            })
        }
    
        if(jaComentou(id, leitor)){
    
            const botao = document.getElementById("adicionar-avaliacao")
    
            const texto = document.getElementById("texto-botao-avaliacao-autor")
            texto.textContent = "Editar sua avaliação"
        
            const lapis = document.createElement("img")
            lapis.src = "../img/icone_lapis_branco.svg"
            lapis.classList.add("icone-lapis")
            botao.appendChild(lapis)
    
            botao.title = "Você já avaliou esse autor. Clique para editar sua avaliação."
        }

    //trecho que permite a persistência do like
    
        if(!usuarioLogado){
            return
        }
    
        let vetorFavoritos = []
    
        vetorFavoritos = leitor.meusAutoresFavoritos

        persistirLike(vetorFavoritos)


})