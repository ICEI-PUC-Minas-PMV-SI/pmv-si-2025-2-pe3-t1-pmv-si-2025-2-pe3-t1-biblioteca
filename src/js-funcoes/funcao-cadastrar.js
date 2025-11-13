import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"


export async function cadastrarLeitor(id, usuario, nome, sobrenome, cpf, telefone, email, cep, rua, numeroFachada, bairro, cidade, estado, meusGeneros, senha, repita_senha) {

    ClasseLeitor.vetorLeitores = JSON.parse(localStorage.getItem("lista de leitores") || "[]")

    let i
    for (i=0;i<ClasseLeitor.vetorLeitores.length;i++){

        if (usuario === ClasseLeitor.vetorLeitores[i].usuario){

            await showAlertSync({
                title: "Nome de usuário indisponível",
                message: "Esse nome de usuário já existe. Insira um nome de usuário diferente."
            })
            return
        }else if (cpf === ClasseLeitor.vetorLeitores[i].cpf){

            await showAlertSync({
                title: "CPF já cadastrado",
                message: "Esse CPF já possui cadastro no sistema. Confira o CPF."
            })
            return
        }else if (email === ClasseLeitor.vetorLeitores[i].email){

            await showAlertSync({
                title: "E-mail já cadastrado",
                message: "Esse endereço de e-mail já possui cadastro no sistema. Insira um e-mail diferente."
            })
            return
        }
    }
    
    if (senha !== repita_senha) {

        await showAlertSync({
        title: "Senhas diferentes",
        message: "As senhas digitadas não estão iguais. Repita o procedimento."
        })
        return

    } else {


        
        let leitor = new ClasseLeitor(id, usuario, nome, sobrenome, cpf, telefone, email, cep, rua, numeroFachada, bairro, cidade, estado, meusGeneros, senha)

        ClasseLeitor.vetorLeitores.push(leitor)

        localStorage.setItem("lista de leitores", JSON.stringify(ClasseLeitor.vetorLeitores))

        await showAlertSync({
            title: "Cadastro concluído",
            message: `${leitor.nome}, seu cadastro foi confirmado!`
        })

        window.location.href = "../../index.html"

    }
}