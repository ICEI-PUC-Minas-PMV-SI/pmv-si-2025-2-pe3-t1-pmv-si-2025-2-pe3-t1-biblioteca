import { showAlertSync } from "../js-funcoes/funcoes-de-dialogo.js";
import { ClasseLeitor } from "../js-classes/classe-leitor.js";
import { showConfirmSync } from "../js-funcoes/funcoes-de-dialogo.js";

const slug = (texto) => {
  const slug = texto
    .toLowerCase()
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "") // remove marcas dos acentos
    .replace(/\s+/g, "-") // troca espaços por hífen
    .replace(/[^a-z0-9-]/g, ""); // remove caracteres especiais
  return slug;
};

const getLeitores = () =>
  JSON.parse(localStorage.getItem("lista de leitores")) || [];

const getleitor = () => {
  const leitores = getLeitores();
  const usuarioLogado = localStorage.getItem("leitor logado");

  if (!usuarioLogado) return null;

  const leitorAtual = leitores.find((l) => l.usuario === usuarioLogado);

  return leitorAtual || null;
};

const verificarDisponibilidade = (camposEditados) => {
  const leitores = getLeitores();
  const leitorAtual = getleitor();

  const novoUsuario = camposEditados.usuario?.trim().toLowerCase();
  const novoEmail = camposEditados.email?.trim().toLowerCase();
  const novoCPF = camposEditados.cpf?.trim().toLowerCase();

  for (const leitor of leitores) {
    if (leitor.usuario !== leitorAtual.usuario) {
      if (novoUsuario && leitor.usuario.toLowerCase() === novoUsuario) {
        return { disponivel: false, campo: "usuário" };
      }

      if (novoEmail && leitor.email.toLowerCase() === novoEmail) {
        return { disponivel: false, campo: "e-mail" };
      }

      if (novoCPF && leitor.cpf.toLowerCase() === novoCPF) {
        return { disponivel: false, campo: "cpf" };
      }
    }
  }

  return { disponivel: true };
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
  usuarioPadrao = getleitor();
  usuarioPadrao.meusGeneros.forEach((genero) => {
    const slugGenero = slug(genero);
    // const favorito = document.getElementById(slugGenero);
    const favorito = document.querySelector(`.${slugGenero}`);
    if (favorito) favorito.checked = true;
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

  const original = getleitor();
  preencherDados(original);
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

  const verificacao = verificarDisponibilidade({
    usuario: usuario.value,
    cpf: cpf.value,
    email: email.value,
  });

  if (!verificacao.disponivel) {
    showConfirmSync(
      {
        title: "Não foi possível alterar o seu cadastro",
        message: `O ${verificacao.campo} informado já está sendo utilizado por outro leitor.`,
        confirmText: `Cancelar edição`,
        cancelText: `Corrigir ${verificacao.campo}`,
      },

      (ok) => {
        if (!ok) return;

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

        document.getElementById("usuario").disabled = true;
        document.getElementById("nome").disabled = true;
        document.getElementById("sobrenome").disabled = true;
        document.getElementById("cpf").disabled = true;
        document.getElementById("telefone").disabled = true;
        document.getElementById("email").disabled = true;

        const original = getleitor();
        preencherDados(original);
      }
    );

    return;
  }

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

  preencherDados(getleitor());
});

const botaoEditarEndereco = document.getElementById("editar-endereco-lapis");

const editarFormulario = (camposEditados) => {
  const leitores = getLeitores();
  const leitorAntigo = getleitor();
  const index = leitores.findIndex((l) => l.usuario === leitorAntigo.usuario);

  if (index === -1) return;

  const usuarioEditado = { ...leitorAntigo, ...camposEditados };

  leitores[index] = usuarioEditado;

  localStorage.setItem("lista de leitores", JSON.stringify(leitores));
  localStorage.setItem("leitor logado", usuarioEditado.usuario);

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

  const original = getleitor();
  preencherDados(original);
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

  document.getElementById("cep").disabled = true;
  document.getElementById("rua").disabled = true;
  document.getElementById("numero-fachada").disabled = true;
  document.getElementById("bairro").disabled = true;
  document.getElementById("cidade").disabled = true;
  document.getElementById("estado").disabled = true;
});

document.getElementById("checkbox-genero-1").disabled = true;
document.getElementById("checkbox-genero-2").disabled = true;
document.getElementById("checkbox-genero-3").disabled = true;
document.getElementById("checkbox-genero-4").disabled = true;
document.getElementById("checkbox-genero-5").disabled = true;
document.getElementById("checkbox-genero-6").disabled = true;
document.getElementById("checkbox-genero-7").disabled = true;
document.getElementById("checkbox-genero-8").disabled = true;

document.querySelectorAll(".ancora-genero").forEach((checkbox) => {
  checkbox.style.opacity = "0.9";
});

const botaoEditarFavoritos = document.getElementById("editar-favoritos-lapis");

botaoEditarFavoritos.addEventListener("click", function (evento) {
  evento.preventDefault();

  document.querySelectorAll(".ancora-genero").forEach((checkbox) => {
    checkbox.style.opacity = "1";
  });

  document
    .querySelectorAll(
      "body .formulario-edicao-perfil .quadro-generos .quadro-generos_campos label a"
    )
    .forEach((el) => {
      el.style.cursor = "pointer";
      el.classList.add("hover");
    });

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

  document
    .querySelectorAll(
      "body .formulario-edicao-perfil .quadro-generos .quadro-generos_campos label a"
    )
    .forEach((el) => {
      el.style.cursor = "not-allowed";
      el.classList.remove("hover");
    });

  document.querySelectorAll(".checkbox-genero").forEach((checkbox) => {
    document.querySelectorAll(".ancora-genero").forEach((ancora) => {
      const leitorAtual = getleitor();
      checkbox.checked = leitorAtual.meusGeneros.includes(ancora.value);
      checkbox.disabled;
      ancora.style.opacity = "0.9";
      checkbox.checked = false;

      leitorAtual.meusGeneros.forEach((genero) => {
        const slugGenero = slug(genero);
        // const favorito = document.getElementById(slugGenero);
        const favorito = document.querySelector(`.${slugGenero}`);
        if (favorito) favorito.checked = true;
      });
    });
  });
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

  document
    .querySelectorAll(
      "body .formulario-edicao-perfil .quadro-generos .quadro-generos_campos label a"
    )
    .forEach((el) => {
      el.style.cursor = "not-allowed";
      el.classList.remove("hover");
    });

  document.querySelectorAll(".ancora-genero").forEach((checkbox) => {
    checkbox.style.opacity = "0.9";
  });
});

const botaoEditarSenha = document.getElementById("editar-senha-lapis");

botaoEditarSenha.addEventListener("click", function (evento) {
  evento.preventDefault();
  botaoEditarSenha.setAttribute("hidden", "");
  document.getElementById("editar-senha-confirmar").removeAttribute("hidden");
  document.getElementById("editar-senha-cancelar").removeAttribute("hidden");
  senha.setAttribute("placeholder", "Digite a sua senha atual");
  document.getElementById("quadro-senhas").style.display = "grid";
  senha.disabled = false;
  senha.value = "";
});

const cancelarEditarSenha = document.getElementById("editar-senha-cancelar");

cancelarEditarSenha.addEventListener("click", function (evento) {
  evento.preventDefault();
  const novaSenha = document.getElementById("nova-senha");
  const confirmarNovaSenha = document.getElementById("confirmar-nova-senha");
  usuarioPadrao = getleitor();
  botaoEditarSenha.setAttribute("hidden", "");
  document.getElementById("editar-senha-lapis").removeAttribute("hidden");
  document.getElementById("editar-senha-cancelar").setAttribute("hidden", "");
  document.getElementById("editar-senha-confirmar").setAttribute("hidden", "");
  document.getElementById("quadro-senhas").style.display = "none";
  document.getElementById("senha").disabled = true;
  senha.value = usuarioPadrao.senha;
  novaSenha.value = "";
  confirmarNovaSenha.value = "";
  const original = getleitor();
  preencherDados(original);
});

const confirmarEditarSenha = document.getElementById("editar-senha-confirmar");
confirmarEditarSenha.addEventListener("click", function (evento) {
  evento.preventDefault();
  const senha = document.getElementById("senha");
  const novaSenha = document.getElementById("nova-senha");
  const confirmarNovaSenha = document.getElementById("confirmar-nova-senha");
  usuarioPadrao = getleitor();

  console.log("novaSenha.value", novaSenha.value);
  console.log("confirmarEditarSenha.value", confirmarEditarSenha.value);

  const campos = [
    { valor: senha.value, nome: "Senha" },
    { valor: novaSenha.value, nome: "Nova senha" },
    { valor: confirmarNovaSenha.value, nome: "Confirmar nova senha" },
  ];

  for (const campo of campos) {
    if (campo.valor === "") {
      showAlertSync({
        title: "Atenção",
        message: `Preencha todos os campos!`,
      });
      return;
    }
  }

  if (novaSenha.value === senha.value) {
    showAlertSync({
      title: "Informe uma nova senha",
      message: "A senha atual não pode ser reutilizada.",
    });
    novaSenha.value = "";
    confirmarNovaSenha.value = "";
    return;
  }

  if (senha.value !== usuarioPadrao.senha) {
    showAlertSync({
      title: "Senha incorreta",
      message:
        "Sua senha atual está incorreta. Digite sua senha atual novamente.",
    });
    return;
  } else if (
    novaSenha.value === confirmarNovaSenha.value &&
    confirmarNovaSenha !== ""
  ) {
    editarFormulario({
      senha: confirmarNovaSenha.value,
    });

    const usuarioAtual = getleitor();

    document.getElementById("editar-senha-lapis").removeAttribute("hidden");
    document.getElementById("editar-senha-cancelar").setAttribute("hidden", "");
    document
      .getElementById("editar-senha-confirmar")
      .setAttribute("hidden", "");
    document.getElementById("quadro-senhas").style.display = "none";
    document.getElementById("senha").disabled = true;
    senha.value = usuarioAtual.senha;

    novaSenha.value = "";
    confirmarNovaSenha.value = "";

    showAlertSync({
      title: "Senha alterada com sucesso",
      message: `Sua senha foi alterada. Utilize sua nova senha na próxima entrada no sistema.`,
    });
  } else
    showAlertSync({
      title: "Senhas diferentes",
      message:
        "As novas senhas digitadas não estão iguais. Repita o procedimento.",
    });
});
