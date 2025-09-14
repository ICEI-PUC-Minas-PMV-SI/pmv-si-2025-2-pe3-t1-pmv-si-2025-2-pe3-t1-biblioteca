import { ClasseLeitor } from "../js-classes/classe-leitor.js";
import { cadastrarLeitor } from "../js-funcoes/funcao-cadastrar.js";

const formularioCadastro = document.querySelector(".formulario-cadastro")

formularioCadastro.addEventListener("submit", function(evento) {
    
    evento.preventDefault()
    
    //variável do id, começa em 1 e vai incrementando 1 a cada novo cadastro
    const idLeitor = ClasseLeitor.numeroDeLeitores + 1

    //variáveis da identidade do leitor
    const nomeUsuarioLeitor = document.getElementById("usuario").value.trim()
    const nomeLeitor = document.getElementById("nome").value.trim()
    const sobrenomeLeitor = document.getElementById("sobrenome").value.trim()
    const cpfLeitor = document.getElementById("cpf").value.trim()
    const telefoneLeitor = document.getElementById("telefone").value.trim()
    const emailLeitor = document.getElementById("email").value.trim()
    
    //variáveis do endereço do leitor
    const ruaLeitor = document.getElementById("rua").value.trim()
    const numeroFachadaLeitor = document.getElementById("numero-fachada").value.trim()
    const bairroLeitor = document.getElementById("bairro").value.trim()
    const cidadeLeitor = document.getElementById("cidade").value.trim()
    const estadoLeitor = document.getElementById("estado").value.trim()


    //variáveis da senha do leitor
    const senhaLeitor = document.getElementById("senha").value
    const repitaSenhaLeitor = document.getElementById("repita-senha").value

    //condicional que testa se os campos obrigatórios foram preenchidos
    if(nomeUsuarioLeitor === "" || nomeLeitor === "" || sobrenomeLeitor === "" || cpfLeitor === "" ||telefoneLeitor === "" || emailLeitor === ""  || ruaLeitor === "" || numeroFachadaLeitor === "" || bairroLeitor === "" || cidadeLeitor === "" || estadoLeitor === "" ||  senhaLeitor === "" || repitaSenhaLeitor ==="" ){

        alert("Preencha todos os campos!")

        return
        
    }   

   cadastrarLeitor(idLeitor, nomeUsuarioLeitor, nomeLeitor, sobrenomeLeitor, cpfLeitor, telefoneLeitor, emailLeitor, ruaLeitor, numeroFachadaLeitor, bairroLeitor, cidadeLeitor, estadoLeitor, senhaLeitor, repitaSenhaLeitor)

})