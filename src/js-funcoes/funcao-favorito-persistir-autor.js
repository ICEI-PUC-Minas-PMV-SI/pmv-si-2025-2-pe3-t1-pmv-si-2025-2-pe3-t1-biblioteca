export async function persistirLike(vetorID){

    await new Promise(resolve => setTimeout(resolve, 10))

    //pega o isbn do livro carregado na página do livro
    const id = sessionStorage.getItem("id_autor_redirecionamento")

    let i

    //encontrando o leitor logado
    for(i=0; i<vetorID.length;i++){

        if(id === vetorID[i]){

            document.getElementById("like").checked = true
            document.getElementById("rotulo-like").title = "Desfazer curtida"
            
            break
        }
    }
}