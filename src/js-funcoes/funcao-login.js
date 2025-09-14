import { ClasseLeitor } from "../js-classes/classe-leitor.js"

export function logarLeitor(usuarioOuEmail, senha) {

    if(usuarioOuEmail === "" || senha ===""){

        alert("Preencha todos os campos!")

        return

    } else {
    
        let i

        for (i = 0; i < ClasseLeitor.numeroDeLeitores; i++) {

             if (usuarioOuEmail === ClasseLeitor.vetorLeitores[i].email || usuarioOuEmail === ClasseLeitor.vetorLeitores[i].usuario) {

                if (senha === ClasseLeitor.vetorLeitores[i].senha) {

                    ClasseLeitor.leitorLogado = ClasseLeitor.vetorLeitores[i]

                    const usuario = ClasseLeitor.leitorLogado.usuario

                    const primeiroNomeLeitor = ClasseLeitor.leitorLogado.nome

                    localStorage.setItem("leitor logado", JSON.stringify(usuario))
                    localStorage.setItem("nome do leitor logado", JSON.stringify(primeiroNomeLeitor))

                    confirm(`Bem vindo, ${ClasseLeitor.vetorLeitores[i].nome}!`)

                    // window.location.href = "../../index.html"
                
                    return
        
                } else {

                    alert("Encontramos seu usuário/e-mail, mas sua senha está incorreta! Repita o procedimento.")

                    return
                }

            }   
        }  
    
        alert("Desculpe, não encontramos seu usuário/e-mail na nossa base de dados. Repita o procedimento.")
    } 
}

      


