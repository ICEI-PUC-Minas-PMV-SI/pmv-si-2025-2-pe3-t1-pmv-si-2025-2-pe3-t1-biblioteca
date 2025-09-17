import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"


export function cadastrarLeitor(id, usuario, nome, sobrenome, cpf, telefone, email, cep, rua, numeroFachada, bairro, cidade, estado, meusGeneros, senha, repita_senha) {

    if (senha !== repita_senha) {

        showAlertSync({
        title: "Senhas diferentes",
        message: "As senhas digitadas não estão iguais. Repita o procedimento."
        });
        return

    } else {

        let leitor = new ClasseLeitor(id, usuario, nome, sobrenome, cpf, telefone, email, cep, rua, numeroFachada, bairro, cidade, estado, meusGeneros, senha)

        ClasseLeitor.vetorLeitores.push(leitor)

        localStorage.setItem("lista de leitores", JSON.stringify(ClasseLeitor.vetorLeitores))

        showAlertSync({
            title: "Cadastro concluído",
            message: `${leitor.nome}, seu cadastro foi confirmado!`
        }, () => {
            window.location.href = "../../index.html";
        });

    }
}