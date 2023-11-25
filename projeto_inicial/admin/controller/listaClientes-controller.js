import { clienteService } from "../service/cliente-service.js";

const tabela = document.querySelector("[data-tabela]");

tabela.addEventListener("click", async (evento) => {
  let botaoDeExcluir =
    evento.target.className === "botao-simples botao-simples--excluir";
  if (botaoDeExcluir) {
    try {
      const trCliente = evento.target.closest("[data-id]");
      const idCliente = trCliente.dataset.id;
      await clienteService.removeCliente(idCliente);
      trCliente.remove();
    } catch (error) {
      console.log(error);
      window.location.href = "../telas/erro.html";
    }
  }
});

const criarNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement("tr");
  const conteudo = `
    <td class="td" data-td>${nome}</td>
                        <td>${email}</td>
                        <td>
                            <ul class="tabela__botoes-controle">
                                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                            </ul>
                        </td>
    `;
  linhaNovoCliente.innerHTML = conteudo;
  linhaNovoCliente.dataset.id = id;
  return linhaNovoCliente;
};

const render = async () => {
  try {
    const listaClientes = await clienteService.listaClientes();
    listaClientes.forEach((client) => {
      //console.log(client)
      tabela.appendChild(criarNovaLinha(client.nome, client.email, client.id));
    });
  } catch (error) {
    console.log(error); 
    window.location.href = "../telas/erro.html";
  }
};

render();
