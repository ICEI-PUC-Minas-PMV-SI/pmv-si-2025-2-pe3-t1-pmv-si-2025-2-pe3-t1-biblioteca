export async function persistirLike(vetorISBN){

    await new Promise(resolve => setTimeout(resolve, 10))

    //pega o isbn do livro carregado na página do livro
    const isbn = sessionStorage.getItem("isbn_redirecionamento")

    let i

    //encontrando o leitor logado
    for(i=0; i<vetorISBN.length;i++){

        if(isbn === vetorISBN[i]){

            document.getElementById("like").checked = true
            document.getElementById("rotulo-like").title = "Desfazer curtida"
            
            break
        }
    }
}