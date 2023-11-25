async function listaClientes() {
  return fetch("http://localhost:3000/profile")
  .then(resposta => {
    if(resposta.ok) {
      return resposta.json();
    }
    throw new Error('Não foi possível pegar os dados da API');
  });
}

const criarCliente = (nome, email) => {
  return fetch("http://localhost:3000/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  })
  .then(resposta => {
    if(resposta.ok) {
      return resposta.body;
    }
    throw new Error('Não foi possível criar o novo Cliente');
  });
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  }).then(
    reposta => {
      if(!reposta.ok){
        throw new Error('Não foi possível remover o Cliente');
    }
})
};

const editCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`)
  .then((resposta) => {
    if(resposta.ok) {
      return resposta.json();
    }
    throw new Error('Não foi possível editar o Cliente');
  });
};

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    if(resposta.ok) {
      return resposta.json();
    }
    throw new Error('Não foi possível atualizar o Cliente');
  });
};

export const clienteService = {
  listaClientes,
  criarCliente,
  removeCliente,
  editCliente,
  atualizaCliente,
};

