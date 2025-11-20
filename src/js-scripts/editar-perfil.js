import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js";
import { ClasseLeitor } from "../js-classes/classe-leitor.js";

const getleitor = () => {
  const leitorAtual = ClasseLeitor.vetorLeitores.find(
      (l) => l.usuario === ClasseLeitor.leitorLogado
    );

  return leitorAtual;
};

const preencherDados = (leitorLogado) => {
  console.log("leitorLogado", leitorLogado);
  const usuario = document.getElementById("usuario");
  usuario.value = leitorLogado.usuario;
  usuario.disabled = true;

  const nome = document.getElementById("nome");
  nome.value = leitorLogado.nome;
  nome.disabled = true;

  const sobrenome = document.getElementById("sobrenome");
  sobrenome.value = leitorLogado.sobrenome;
  sobrenome.disabled = true;

  const cpf = document.getElementById("cpf");
  cpf.value = leitorLogado.cpf;
  cpf.disabled = true;

  const telefone = document.getElementById("telefone");
  telefone.value = leitorLogado.telefone;
  telefone.disabled = true;

  const email = document.getElementById("email");
  email.value = leitorLogado.email;
  email.disabled = true;

  const cep = document.getElementById("cep");
  cep.value = leitorLogado.cep;
  cep.disabled = true;

  const rua = document.getElementById("rua");
  rua.value = leitorLogado.rua;
  rua.disabled = true;

  const numeroFachada = document.getElementById("numero-fachada");
  numeroFachada.value = leitorLogado.numeroFachada;
  numeroFachada.disabled = true;

  const bairro = document.getElementById("bairro");
  bairro.value = leitorLogado.bairro;
  bairro.disabled = true;

  const cidade = document.getElementById("cidade");
  cidade.value = leitorLogado.cidade;
  cidade.disabled = true;

  const estado = document.getElementById("estado");
  estado.value = leitorLogado.estado;
  estado.disabled = true;

  const senha = document.getElementById("senha");
  senha.value = leitorLogado.senha;
  senha.disabled = true;

};

let usuarioPadrao = getleitor();
console.log("usuarioPadrao", usuarioPadrao);
preencherDados(usuarioPadrao);

// const checkboxGenero1 = document.getElementById("checkbox-genero-1");
// checkboxGenero1.value = leitorLogado.checkboxGenero1;
// checkboxGenero1.disabled = true

document.addEventListener("DOMContentLoaded", () => {
  const slug = (texto) => {
    const slug = texto
      .toLowerCase()
      .normalize("NFD") // remove acentos
      .replace(/[\u0300-\u036f]/g, "") // remove marcas dos acentos
      .replace(/\s+/g, "-") // troca espaços por hífen
      .replace(/[^a-z0-9-]/g, ""); // remove caracteres especiais
    console.log("slug", slug);
    return slug;
    //console.log(slug);
  };

  usuarioPadrao = getleitor();
  usuarioPadrao.meusGeneros.forEach((genero) => {
    const slugGenero = slug(genero);
    // const favorito = document.getElementById(slugGenero);
    const favorito = (document.querySelector(`.${slugGenero}`).checked = true);
    console.log(favorito);

    // if (favorito) {
    //     favorito.classList.add("selecionado");
    //     favorito.style.backgroundColor = "var(--azul-colombia)"
    //     console.log(`Marcado: #${slugGenero}`);
    // } else {
    //     console.warn(`Elemento não encontrado: #${slugGenero}`);
    // }
  });
});

const botaoEditar = document.getElementById("editar-dados-pessoais-lapis");

botaoEditar.addEventListener("click", function (evento) {
  evento.preventDefault();
  botaoEditar.setAttribute("hidden", "");
  document
    .getElementById("editar-dados-pessoais-confirmar")
    .removeAttribute("hidden");
  document
    .getElementById("editar-dados-pessoais-cancelar")
    .removeAttribute("hidden");
  document.getElementById("usuario").removeAttribute("disabled");
  document.getElementById("nome").removeAttribute("disabled");
  document.getElementById("sobrenome").removeAttribute("disabled");
  document.getElementById("cpf").removeAttribute("disabled");
  document.getElementById("telefone").removeAttribute("disabled");
  document.getElementById("email").removeAttribute("disabled");
});

const cancelarEditar = document.getElementById(
  "editar-dados-pessoais-cancelar"
);

cancelarEditar.addEventListener("click", function (evento) {
  evento.preventDefault();
  botaoEditar.setAttribute("hidden", "");
  document
    .getElementById("editar-dados-pessoais-lapis")
    .removeAttribute("hidden");
  document
    .getElementById("editar-dados-pessoais-cancelar")
    .setAttribute("hidden", "");
  document
    .getElementById("editar-dados-pessoais-confirmar")
    .setAttribute("hidden", "");
  //document.getElementById("usuario").setttribute("disabled")
  document.getElementById("usuario").disabled = true;
  document.getElementById("nome").disabled = true;
  document.getElementById("sobrenome").disabled = true;
  document.getElementById("cpf").disabled = true;
  document.getElementById("telefone").disabled = true;
  document.getElementById("email").disabled = true;
});

const confirmarEditar = document.getElementById(
  "editar-dados-pessoais-confirmar"
);
confirmarEditar.addEventListener("click", function (evento) {
  evento.preventDefault();
  const usuario = document.getElementById("usuario");
  const nome = document.getElementById("nome");
  const sobrenome = document.getElementById("sobrenome");
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const email = document.getElementById("email");

  editarFormulario({
    usuario: usuario.value,
    nome: nome.value,
    sobrenome: sobrenome.value,
    cpf: cpf.value,
    telefone: telefone.value,
    email: email.value,
  });


  botaoEditar.setAttribute("hidden", "");
  document
    .getElementById("editar-dados-pessoais-lapis")
    .removeAttribute("hidden");
  document
    .getElementById("editar-dados-pessoais-cancelar")
    .setAttribute("hidden", "");
  document
    .getElementById("editar-dados-pessoais-confirmar")
    .setAttribute("hidden", "");

});

const botaoEditarEndereco = document.getElementById("editar-endereco-lapis");

const editarFormulario = (camposEditados) => {
  const leitorAntigo = getleitor();
  const usuarioEditado = { ...leitorAntigo, ...camposEditados };
  const listaDeLeitores = [usuarioEditado];
  const leitorLogado = usuarioEditado.usuario;
  localStorage.setItem("lista de leitores", JSON.stringify(listaDeLeitores));
  localStorage.setItem("leitor logado", leitorLogado)
  preencherDados(usuarioEditado);
};

botaoEditarEndereco.addEventListener("click", function (evento) {
  evento.preventDefault();
  botaoEditarEndereco.setAttribute("hidden", "");
  document
    .getElementById("editar-endereco-confirmar")
    .removeAttribute("hidden");
  document.getElementById("editar-endereco-cancelar").removeAttribute("hidden");
  document.getElementById("cep").removeAttribute("disabled");
  document.getElementById("rua").removeAttribute("disabled");
  document.getElementById("numero-fachada").removeAttribute("disabled");
  document.getElementById("bairro").removeAttribute("disabled");
  document.getElementById("cidade").removeAttribute("disabled");
  document.getElementById("estado").removeAttribute("disabled");

  // const leitorAntigo = getleitor()
  // const usuarioEditado = { ...leitorAntigo, nome: "gustavo" }
  // const listaDeLeitores = [usuarioEditado]
  // localStorage.setItem("lista de leitores", JSON.stringify(listaDeLeitores));
  // preencherDados(usuarioEditado)
});

const cancelarEditarEndereco = document.getElementById(
  "editar-endereco-cancelar"
);

cancelarEditarEndereco.addEventListener("click", function (evento) {
  evento.preventDefault();
  botaoEditarEndereco.setAttribute("hidden", "");

  document.getElementById("cep").disabled = true;
  document.getElementById("rua").disabled = true;
  document.getElementById("numero-fachada").disabled = true;
  document.getElementById("bairro").disabled = true;
  document.getElementById("cidade").disabled = true;
  document.getElementById("estado").disabled = true;

  document.getElementById("editar-endereco-lapis").removeAttribute("hidden");

  document
    .getElementById("editar-endereco-cancelar")
    .setAttribute("hidden", "");
  document
    .getElementById("editar-endereco-confirmar")
    .setAttribute("hidden", "");

});

const confirmarEditarEndereco = document.getElementById(
  "editar-endereco-confirmar"
);
confirmarEditarEndereco.addEventListener("click", function (evento) {
  evento.preventDefault();
  const cep = document.getElementById("cep");
  const rua = document.getElementById("rua");
  const numeroFachada = document.getElementById("numero-fachada");
  const bairro = document.getElementById("bairro");
  const cidade = document.getElementById("cidade");
  const estado = document.getElementById("estado");

  editarFormulario({
    cep: cep.value,
    rua: rua.value,
    numeroFachada: numeroFachada.value,
    bairro: bairro.value,
    cidade: cidade.value,
    estado: estado.value,
  });

  document.getElementById("editar-endereco-lapis").removeAttribute("hidden");
  
  document
    .getElementById("editar-endereco-cancelar")
    .setAttribute("hidden", "");
  document
    .getElementById("editar-endereco-confirmar")
    .setAttribute("hidden", "");

  document.getElementById("checkbox-genero-1").disabled = true;
  document.getElementById("checkbox-genero-2").disabled = true;
  document.getElementById("checkbox-genero-3").disabled = true;
  document.getElementById("checkbox-genero-4").disabled = true;
  document.getElementById("checkbox-genero-5").disabled = true;
  document.getElementById("checkbox-genero-6").disabled = true;
  document.getElementById("checkbox-genero-7").disabled = true;
  document.getElementById("checkbox-genero-8").disabled = true;
});

document.getElementById("checkbox-genero-1").disabled = true;
  document.getElementById("checkbox-genero-2").disabled = true;
  document.getElementById("checkbox-genero-3").disabled = true;
  document.getElementById("checkbox-genero-4").disabled = true;
  document.getElementById("checkbox-genero-5").disabled = true;
  document.getElementById("checkbox-genero-6").disabled = true;
  document.getElementById("checkbox-genero-7").disabled = true;
  document.getElementById("checkbox-genero-8").disabled = true;

const botaoEditarFavoritos = document.getElementById("editar-favoritos-lapis");

botaoEditarFavoritos.addEventListener("click", function (evento) {
  evento.preventDefault();
  botaoEditarFavoritos.setAttribute("hidden", "");
  document
    .getElementById("editar-favoritos-confirmar")
    .removeAttribute("hidden");
  document
    .getElementById("editar-favoritos-cancelar")
    .removeAttribute("hidden");

  document.getElementById("checkbox-genero-1").disabled = false;
  document.getElementById("checkbox-genero-2").disabled = false;
  document.getElementById("checkbox-genero-3").disabled = false;
  document.getElementById("checkbox-genero-4").disabled = false;
  document.getElementById("checkbox-genero-5").disabled = false;
  document.getElementById("checkbox-genero-6").disabled = false;
  document.getElementById("checkbox-genero-7").disabled = false;
  document.getElementById("checkbox-genero-8").disabled = false;
});

const cancelarEditarFavoritos = document.getElementById(
  "editar-favoritos-cancelar"
);

cancelarEditarFavoritos.addEventListener("click", function (evento) {
  evento.preventDefault();
  botaoEditarFavoritos.setAttribute("hidden", "");
  
  const generos = [];
  if (document.getElementById("checkbox-genero-1").checked) {
    generos.push("Divulgação científica");
  }
  if (document.getElementById("checkbox-genero-2").checked) {
    generos.push("Filosofia");
  }

  if (document.getElementById("checkbox-genero-3").checked) {
    generos.push("Mistério");
  }

  if (document.getElementById("checkbox-genero-4").checked) {
    generos.push("Psicologia");
  }

  if (document.getElementById("checkbox-genero-5").checked) {
    generos.push("Romance");
  }

  if (document.getElementById("checkbox-genero-6").checked) {
    generos.push("Sociologia");
  }

  if (document.getElementById("checkbox-genero-7").checked) {
    generos.push("Ficção científica");
  }

  if (document.getElementById("checkbox-genero-8").checked) {
    generos.push("Fantasia");
  }


  if (generos.length > 0) {
    editarFormulario({
      meusGeneros: generos,
    });
  } else {
    showAlertSync({
      title: "Escolha pelo menos 1 gênero favorito",
      message: "Você deve escolher entre 1 e 3 gêneros favoritos.",
    });
    return;
  }

  document.getElementById("editar-favoritos-lapis").removeAttribute("hidden");

  document
    .getElementById("editar-favoritos-cancelar")
    .setAttribute("hidden", "");
  document
    .getElementById("editar-favoritos-confirmar")
    .setAttribute("hidden", "");

  document.getElementById("checkbox-genero-1").disabled = true;
  document.getElementById("checkbox-genero-2").disabled = true;
  document.getElementById("checkbox-genero-3").disabled = true;
  document.getElementById("checkbox-genero-4").disabled = true;
  document.getElementById("checkbox-genero-5").disabled = true;
  document.getElementById("checkbox-genero-6").disabled = true;
  document.getElementById("checkbox-genero-7").disabled = true;
  document.getElementById("checkbox-genero-8").disabled = true;

  if(document.getElementById("checkbox-genero-1").disabled) {
    document.getElementById("checkbox-genero-1").style.cursor = "not-allowed"
  }

    
});

const editarFavoritosConfirmar = document.getElementById(
  "editar-favoritos-confirmar"
);

editarFavoritosConfirmar.addEventListener("click", function (evento) {
  evento.preventDefault();
  botaoEditarFavoritos.setAttribute("hidden", "");
  
  const generos = [];
  if (document.getElementById("checkbox-genero-1").checked) {
    generos.push("Divulgação científica");
  }
  if (document.getElementById("checkbox-genero-2").checked) {
    generos.push("Filosofia");
  }

  if (document.getElementById("checkbox-genero-3").checked) {
    generos.push("Mistério");
  }

  if (document.getElementById("checkbox-genero-4").checked) {
    generos.push("Psicologia");
  }

  if (document.getElementById("checkbox-genero-5").checked) {
    generos.push("Romance");
  }

  if (document.getElementById("checkbox-genero-6").checked) {
    generos.push("Sociologia");
  }

  if (document.getElementById("checkbox-genero-7").checked) {
    generos.push("Ficção científica");
  }

  if (document.getElementById("checkbox-genero-8").checked) {
    generos.push("Fantasia");
  }

  if (generos.length > 0) {
    editarFormulario({
      meusGeneros: generos,
    });
  } else {
    showAlertSync({
      title: "Escolha pelo menos 1 gênero favorito",
      message: "Você deve escolher entre 1 e 3 gêneros favoritos.",
    });
    return;
  }

  document.getElementById("editar-favoritos-lapis").removeAttribute("hidden");

  document
    .getElementById("editar-favoritos-cancelar")
    .setAttribute("hidden", "");
  document
    .getElementById("editar-favoritos-confirmar")
    .setAttribute("hidden", "");

  document.getElementById("checkbox-genero-1").disabled = true;
  document.getElementById("checkbox-genero-2").disabled = true;
  document.getElementById("checkbox-genero-3").disabled = true;
  document.getElementById("checkbox-genero-4").disabled = true;
  document.getElementById("checkbox-genero-5").disabled = true;
  document.getElementById("checkbox-genero-6").disabled = true;
  document.getElementById("checkbox-genero-7").disabled = true;
  document.getElementById("checkbox-genero-8").disabled = true;
});

const botaoEditarSenha = document.getElementById("editar-senha-lapis");

botaoEditarSenha.addEventListener("click", function (evento) {
  evento.preventDefault();
  botaoEditarSenha.setAttribute("hidden", "");
  document.getElementById("editar-senha-confirmar").removeAttribute("hidden");
  document.getElementById("editar-senha-cancelar").removeAttribute("hidden");
  document.getElementById("editar-senha-confirmar").removeAttribute("hidden");
  senha.setAttribute("placeholder", "Digite a sua senha atual")
  document.getElementById("quadro-senhas").style.display = "flex";
  senha.disabled = false;
  senha.value = ""
});

const cancelarEditarSenha = document.getElementById("editar-senha-cancelar");

cancelarEditarSenha.addEventListener("click", function (evento) {
  evento.preventDefault();
  usuarioPadrao = getleitor()
  botaoEditarSenha.setAttribute("hidden", "");
  document.getElementById("editar-senha-lapis").removeAttribute("hidden");
  document.getElementById("editar-senha-cancelar").setAttribute("hidden", "");
  document.getElementById("editar-senha-confirmar").setAttribute("hidden", "");
  document.getElementById("quadro-senhas").style.display = "none";
  document.getElementById("senha").disabled = true;
  senha.value = usuarioPadrao.senha;
});

const confirmarEditarSenha = document.getElementById("editar-senha-confirmar");
confirmarEditarSenha.addEventListener("click", function (evento) {
  evento.preventDefault();
  const senha = document.getElementById("senha");
  const novaSenha = document.getElementById("nova-senha");
  const confirmarNovaSenha = document.getElementById("confirmar-nova-senha");
  usuarioPadrao = getleitor()

  console.log("novaSenha.value", novaSenha.value);
  console.log("confirmarEditarSenha.value", confirmarEditarSenha.value);

  if (senha.value !== usuarioPadrao.senha) {
    alert("A senha atual está incorreta!")
    return
  } else if (novaSenha.value === confirmarNovaSenha.value) {
    editarFormulario({
      senha: confirmarNovaSenha.value,
    })

    document.getElementById("editar-senha-lapis").removeAttribute("hidden");
    document.getElementById("editar-senha-cancelar").setAttribute("hidden", "");
    document.getElementById("editar-senha-confirmar").setAttribute("hidden", "");
    document.getElementById("quadro-senhas").style.display = "none";
    document.getElementById("senha").disabled = true;
    senha.value = usuarioPadrao.senha;

    alert("Sua senha foi alterada com sucesso!")
  } else if (!novaSenha.value) {
    alert("Digite uma nova senha")
    return
  } else alert("As senhas devem ser digitadas iguais");
});
