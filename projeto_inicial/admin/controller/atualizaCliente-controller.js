import { clienteService } from "../service/cliente-service.js";

(async () => {
  const PegaURL = new URL(window.location);
  const id = PegaURL.searchParams.get("id");
  const inputNome = document.querySelector("[data-nome]");
  const inputEmail = document.querySelector("[data-email]");
  const formulario = document.querySelector("[data-form]");

  try {
    const dados = await clienteService.editCliente(id);
    inputNome.value = dados.nome;
    inputEmail.value = dados.email;
  } catch (error) {
    console.log(error);
    window.location.href = "../telas/erro.html";
  }

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await clienteService.atualizaCliente(
        id,
        inputNome.value,
        inputEmail.value
      );
      window.location.href = "../telas/edicao_concluida.html";
    } catch (error) {
      console.log(error);
      window.location.href = "../telas/erro.html";
    }
  });
})();
