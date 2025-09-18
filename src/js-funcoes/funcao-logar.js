import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"

export function logarLeitor(usuarioOuEmail, senha) {

    if(usuarioOuEmail === "" || senha ===""){

        showAlertSync({ title: "Atenção", message: "Preencha todos os campos!" });

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

                    showAlertSync({
                        title: "Boas-vindas",
                        message: `Bem-vindo(a), ${primeiroNomeLeitor}!`
                    });
                
                    return
        
                } else {

                    showAlertSync({
                        title: "Senha incorreta",
                        message: "Encontramos seu usuário/e-mail, mas sua senha está incorreta. Digite sua senha novamente."
                    });

                    return
                }
            }   
        }  
    
        showAlertSync({
            title: "Usuário não encontrado",
            message: "Desculpe, não encontramos seu usuário/e-mail na nossa base de dados. Repita o procedimento."
        });
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


      


