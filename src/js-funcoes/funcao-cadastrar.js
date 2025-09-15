import { ClasseLeitor } from "../js-classes/classe-leitor.js"
import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js"


export function cadastrarLeitor(id, usuario, nome, sobrenome, cpf, telefone, email, rua, numeroFachada, bairro, cidade, estado, senha, repita_senha) {

    if (senha !== repita_senha) {

        showAlertSync({
        title: "Senhas diferentes",
        message: "As senhas digitadas não estão iguais. Repita o procedimento."
        });
        return

    } else {

        let leitor = new ClasseLeitor(id, usuario, nome, sobrenome, cpf, telefone, email, rua, numeroFachada, bairro, cidade, estado, senha)

            showAlertSync({
                title: "Cadastro concluído",
                message: `${leitor.nome}, você foi cadastrado com sucesso!`
            }, () => {
             window.location.href = "../../index.html";
            });

        ClasseLeitor.vetorLeitores.push(leitor)

        localStorage.setItem("lista de leitores", JSON.stringify(ClasseLeitor.vetorLeitores))

        window.location.href = "../../index.html";

    }
}