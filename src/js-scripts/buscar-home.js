const botaoBuscar = document.getElementById("botao-buscar-home");


botaoBuscar.addEventListener("click", function (evento) {
  evento.preventDefault();

  

  //capta o texto buscado antes de redirecionar para o acervo
  const busca = document.getElementById("busca-home").value.trim()
  if(!busca) return

  const KEY = "busca_pendente"

  //armazena o texto buscado na session storage para ser usado no acervo
  sessionStorage.setItem(KEY, JSON.stringify({ busca, tipo: "Todos os campos", autorun: true, source: "index" }))

  //redireciona para o acervo
  window.location.href = "./src/html-paginas/acervo.html"

  })

  document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("botao-buscar-home");
  if (!btn) return;
  btn.addEventListener("click", handleBuscaHome);

  const form = btn.closest("form");
  if (form) form.addEventListener("submit", handleBuscaHome);
});
