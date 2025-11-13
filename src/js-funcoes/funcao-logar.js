import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"

export async function logarLeitor(usuarioOuEmail, senha) {

    if(usuarioOuEmail === "" || senha ===""){

        await showAlertSync({ title: "Atenção", message: "Preencha todos os campos!" });

        return

    } else {
    
        let i

        for (i = 0; i < ClasseLeitor.numeroDeLeitores; i++) {

            if (usuarioOuEmail === ClasseLeitor.vetorLeitores[i].email || usuarioOuEmail === ClasseLeitor.vetorLeitores[i].usuario) {

                if (senha === ClasseLeitor.vetorLeitores[i].senha) {

                    ClasseLeitor.leitorLogado = ClasseLeitor.vetorLeitores[i]

                    const usuario = ClasseLeitor.leitorLogado.usuario

                    const primeiroNomeLeitor = ClasseLeitor.leitorLogado.nome

                    localStorage.setItem("leitor logado", usuario)
                    localStorage.setItem("nome do leitor logado", primeiroNomeLeitor)

                    //captura os elementos que devem aparecer na página inicial somente após o login
                    const carrosselPersonalizado = document.getElementById("p-carrossel")
                    const secaoGenerosFavoritos = document.getElementById("seus-generos-favoritos")

                    //remove a classe desses elementos que os deixa escondidos
                    carrosselPersonalizado.classList.remove("escondido")
                    secaoGenerosFavoritos.classList.remove("escondido")

                    await showAlertSync({
                        title: "Boas-vindas",
                        message: `Bem-vindo(a), ${primeiroNomeLeitor}!`
                    })

                    window.location.reload()
                    return
                    
                } else {

                    await showAlertSync({
                        title: "Senha incorreta",
                        message: "Encontramos seu usuário/e-mail, mas sua senha está incorreta. Digite sua senha novamente."
                    })

                    return
                }
            }  
        }
        
    } 
    
}

export function logarDireto (usuario, senha){

    let i

    for (i = 0; i < ClasseLeitor.numeroDeLeitores; i++) {

        if (usuario === ClasseLeitor.vetorLeitores[i].usuario) {

            if (senha === ClasseLeitor.vetorLeitores[i].senha) {

                ClasseLeitor.leitorLogado = ClasseLeitor.vetorLeitores[i]

                const usuario = ClasseLeitor.leitorLogado.usuario
                const primeiroNomeLeitor = ClasseLeitor.leitorLogado.nome

                localStorage.setItem("leitor logado", usuario)
                localStorage.setItem("nome do leitor logado", primeiroNomeLeitor)

            }
        }
    }

}
