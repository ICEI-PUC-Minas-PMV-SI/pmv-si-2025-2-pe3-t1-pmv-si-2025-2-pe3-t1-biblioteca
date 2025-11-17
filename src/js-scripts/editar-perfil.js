const vetorLeitores = JSON.parse(localStorage.getItem("lista de leitores")) || []
const leitorLogado = vetorLeitores.find((leitor) => leitor.usuario === localStorage.getItem("leitor logado"))

console.log(vetorLeitores)
console.log(leitorLogado)


const usuario = document.getElementById("usuario");
usuario.value = leitorLogado.usuario;

const nome = document.getElementById("nome");
nome.value = leitorLogado.nome;

const sobrenome = document.getElementById("sobrenome");
sobrenome.value = leitorLogado.sobrenome;

const cpf = document.getElementById("cpf");
cpf.value = leitorLogado.cpf;

const telefone = document.getElementById("telefone");
telefone.value = leitorLogado.telefone;

const email = document.getElementById("email");
email.value = leitorLogado.email;

const cep = document.getElementById("cep");
cep.value = leitorLogado.cep;

const rua = document.getElementById("rua");
rua.value = leitorLogado.rua;

const numeroFachada = document.getElementById("numero-fachada");
numeroFachada.value = leitorLogado.numeroFachada;

const bairro = document.getElementById("bairro");
bairro.value = leitorLogado.bairro;

const cidade = document.getElementById("cidade");
cidade.value = leitorLogado.cidade;

const estado = document.getElementById("estado");
estado.value = leitorLogado.estado;

document.addEventListener("DOMContentLoaded", () => {

    const slug = (texto) => {

        const slug = texto
            .toLowerCase()
            .normalize("NFD")               // remove acentos
            .replace(/[\u0300-\u036f]/g, "")// remove marcas dos acentos
            .replace(/\s+/g, "-")           // troca espaços por hífen
            .replace(/[^a-z0-9-]/g, "");    // remove caracteres especiais
        console.log("slug", slug);
        return slug;
        //console.log(slug);
    }


    leitorLogado.meusGeneros.forEach((genero) => {
        const slugGenero = slug(genero);
        const favorito = document.getElementById(slugGenero);
        console.log(favorito);

        if (favorito) {
            favorito.classList.add("selecionado");
            favorito.style.backgroundColor = "var(--azul-colombia)"
            console.log(`Marcado: #${slugGenero}`);
        } else {
            console.warn(`Elemento não encontrado: #${slugGenero}`);
        }
    });


});




const botaoEditar = document.getElementById("editar-dados-pessoais-lapis");


botaoEditar.addEventListener("click", function (evento) {
    evento.preventDefault()
    botaoEditar.setAttribute("hidden", "")
    document.getElementById("editar-dados-pessoais-confirmar").removeAttribute("hidden")
    document.getElementById("editar-dados-pessoais-cancelar").removeAttribute("hidden")
})


const cancelarEditar = document.getElementById("editar-dados-pessoais-cancelar");

cancelarEditar.addEventListener("click", function (evento) {
    evento.preventDefault()
    botaoEditar.setAttribute("hidden", "")
    document.getElementById("editar-dados-pessoais-lapis").removeAttribute("hidden")
    document.getElementById("editar-dados-pessoais-cancelar").setAttribute("hidden", "")
    document.getElementById("editar-dados-pessoais-confirmar").setAttribute("hidden", "")
})




const botaoEditarEndereco = document.getElementById("editar-endereco-lapis");


botaoEditarEndereco.addEventListener("click", function (evento) {
    evento.preventDefault()
    botaoEditarEndereco.setAttribute("hidden", "")
    document.getElementById("editar-endereco-confirmar").removeAttribute("hidden")
    document.getElementById("editar-endereco-cancelar").removeAttribute("hidden")
})


const cancelarEditarEndereco = document.getElementById("editar-endereco-cancelar");

cancelarEditarEndereco.addEventListener("click", function (evento) {
    evento.preventDefault()
    botaoEditarEndereco.setAttribute("hidden", "")
    document.getElementById("editar-endereco-lapis").removeAttribute("hidden")
    document.getElementById("editar-endereco-cancelar").setAttribute("hidden", "")
    document.getElementById("editar-endereco-confirmar").setAttribute("hidden", "")
})






const botaoEditarFavoritos = document.getElementById("editar-favoritos-lapis");


botaoEditarFavoritos.addEventListener("click", function (evento) {
    evento.preventDefault()
    botaoEditarFavoritos.setAttribute("hidden", "")
    document.getElementById("editar-favoritos-confirmar").removeAttribute("hidden")
    document.getElementById("editar-favoritos-cancelar").removeAttribute("hidden")
})


const cancelarEditarFavoritos = document.getElementById("editar-favoritos-cancelar");

cancelarEditarFavoritos.addEventListener("click", function (evento) {
    evento.preventDefault()
    botaoEditarFavoritos.setAttribute("hidden", "")
    document.getElementById("editar-favoritos-lapis").removeAttribute("hidden")
    document.getElementById("editar-favoritos-cancelar").setAttribute("hidden", "")
    document.getElementById("editar-favoritos-confirmar").setAttribute("hidden", "")
})





const botaoEditarSenha = document.getElementById("editar-senha-lapis");


botaoEditarSenha.addEventListener("click", function (evento) {
    evento.preventDefault()
    botaoEditarSenha.setAttribute("hidden", "")
    document.getElementById("editar-senha-confirmar").removeAttribute("hidden")
    document.getElementById("editar-senha-cancelar").removeAttribute("hidden")
    document.getElementById("editar-senha-confirmar").removeAttribute("hidden")
    document.getElementById("nova-senha").removeAttribute("hidden")
    document.getElementById("confirmar-nova-senha").removeAttribute("hidden")


})


const cancelarEditarSenha = document.getElementById("editar-senha-cancelar");

cancelarEditarSenha.addEventListener("click", function (evento) {
    evento.preventDefault()
    botaoEditarSenha.setAttribute("hidden", "")
    document.getElementById("editar-senha-lapis").removeAttribute("hidden")
    document.getElementById("editar-senha-cancelar").setAttribute("hidden", "")
    document.getElementById("editar-senha-confirmar").setAttribute("hidden", "")
})