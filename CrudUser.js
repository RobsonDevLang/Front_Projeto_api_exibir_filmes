//cadastrar
$(document).ready(function() {
  $('#cadastro').submit(function(event) {
    event.preventDefault();

    const name = $('#nomeCadastro').val();
    const password = $('#senhaCadastro').val();
    const email = $('#emailCadastro').val();

    if (!name || !password || !email) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    // Calcular o hash SHA-256 da senha
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

    const data = {
      "name": name,
      "password": hashedPassword,
        //  "password": password,
      "email": email
    };
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(response) {
        console.log(response);
        alert(`Usuario ${name} cadastrado com sucesso`);
        window.location.href = 'index.html';
        // Adicione o código de manipulação de sucesso aqui
      },
      error: function(error) {
        console.error('Erro ao enviar para a API:', error);
        // Adicione o código de manipulação de erro aqui
      },
    });
  });
});

 // Login
 $(document).ready(function() {
  $('#login').submit(function(event) {
    event.preventDefault();

    const nomeLogin = $('#nomeLogin').val();
    const loginPassword = $('#senhaLogin').val();

    if (!nomeLogin || !loginPassword) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    // Simulando autenticação com base em um arquivo JSON
    $.getJSON('http://localhost:3000/users', function(usuarios) {
      const usuarioEncontrado = usuarios.find(usuario => usuario.name === nomeLogin);

      if (usuarioEncontrado) {
        // Calcular o hash SHA-256 da senha
        const hashedLoginPassword = CryptoJS.SHA256(loginPassword).toString(CryptoJS.enc.Hex);

        // Primeiro teste com SHA-256
        if (usuarioEncontrado.password === hashedLoginPassword) {
          alert('Login bem-sucedido');
          window.location.href = 'listUsers.html';
          // Redirecione ou execute outras ações após o login bem-sucedido
        } else {
          // Segundo teste sem SHA-256
          if (usuarioEncontrado.password === loginPassword) {
            alert('Login bem-sucedido (sem SHA-256)');
            window.location.href = 'listUsers.html';
            // Redirecione ou execute outras ações após o login bem-sucedido
          } else {
            alert('Senha incorreta. Tente novamente.');
          }
        }
      } else {
        alert('Usuário não encontrado. Tente novamente.');
      }
    });
  });
});

function lsJson() {
    fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data) => {
            var res = document.getElementById("res");

            // Limpar o conteúdo anterior
            res.innerHTML = '';

            // Usar um loop while para percorrer todos os itens do array
            var i = 0;
            while (i < data.length) {
                var novoItem = document.createElement('p');
                novoItem.textContent = JSON.stringify(data[i]);
                res.appendChild(novoItem);
                i++;
            }
        })
        .catch(error => console.log('Erro:', error))
}

// Função para preencher a tabela
// Função para preencher a tabela com dados
function preencherTabela() {
  $.ajax({
    url: 'http://localhost:3000/users',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      // Limpar a tabela
      $('#userTable tbody').empty();

      // Preencher a tabela com os dados do JSON
      data.forEach(function(user) {
        $('#userTable tbody').append(`
          <tr>
            <td style="text-align: center;border-style: solid; border-width: 1px;">${user.name}</td>
            <td style="text-align: center;border-style: solid; border-width: 1px;">${user.password}</td>
            <td style="text-align: center;border-style: solid; border-width: 1px;">${user.email}</td>
            <td style="text-align: center;border-style: solid; border-width: 1px;"><a href="editar.html?id=${user.id}">Editar</a></td>
            <td style="text-align: center;border-style: solid; border-width: 1px; color:red."><a style="color: red; id="excluir" href="excluir.html?id=${user.id}">Excluir</a></td>
          </tr>
        `);
      });
    },
    error: function(error) {
      console.error('Erro ao obter dados do JSON:', error);
      // Adicione o código de manipulação de erro aqui
    }
  });
}


  
//EDITAR
$(document).ready(function() {
  const userId = obterParametroDaURL('id');

  // Verificar se o ID do usuário está presente na URL
  if (userId) {
    // Preencher o formulário de edição se o ID estiver presente
    preencherFormularioEdicao(userId);
  }

  $('#editar').submit(function(event) {
    event.preventDefault();

    const name = $('#nomeEditar').val();
    const password = $('#senhaEditar').val();
    const email = $('#emailEditar').val();

    if (!name || !password || !email) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    // Calcular o hash SHA-256 da senha
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

    const data = {
      "name": name,
      "password": hashedPassword,
      "email": email
    };

    // Verificar se é uma operação de criação ou edição
    const requestType = userId ? 'PUT' : 'POST';
    const url = userId ? `http://localhost:3000/users/${userId}` : 'http://localhost:3000/users';

    $.ajax({
      url: url,
      type: requestType,
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(response) {
        console.log(response);
        const mensagem = userId ? 'Usuário atualizado com sucesso' : `Usuário ${name} cadastrado com sucesso`;
        alert(mensagem);
        window.location.href = 'index.html';
        // Adicione o código de manipulação de sucesso aqui
      },
      error: function(error) {
        console.error('Erro ao enviar para a API:', error);
        // Adicione o código de manipulação de erro aqui
      },
    });
  });

  // Função para preencher o formulário de edição
  function preencherFormularioEdicao(userId) {
    // Obter dados do usuário por ID e preencher o formulário
    $.ajax({
      url: `http://localhost:3000/users/${userId}`,
      type: 'GET',
      dataType: 'json',
      success: function(user) {
        $('#nomeEditar').val(user.name);
        // Senha não é preenchida por motivos de segurança, você pode adicionar a lógica conforme necessário
        $('#emailEditar').val(user.email);
      },
      error: function(error) {
        console.error('Erro ao obter dados do usuário:', error);
        // Adicione o código de manipulação de erro aqui
      }
    });
  }

  // Função para obter parâmetros da URL
  function obterParametroDaURL(nomeParametro) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nomeParametro);
  }
});

function excluirAoCarregar(){
$(document).ready(function() {

  // Obter o ID do usuário da URL
  const userId = obterParametroDaURL('id');

  // Verificar se o ID do usuário está presente na URL
  if (userId) {
    // Chamar a função para excluir o usuário ao carregar a página
    excluirUsuario(userId);
  }

  // Função para excluir o usuário
  function excluirUsuario(userId) {
    const confirmacao = confirm('Deseja realmente excluir este usuário?');

    if (!confirmacao) {
      return;
    }

    // Enviar solicitação de exclusão para a API
    $.ajax({
      url: `http://localhost:3000/users/${userId}`,
      type: 'DELETE',
      success: function(response) {
        console.log(response);
        alert('Usuário excluído com sucesso');
        window.location.href = 'listUsers.html';
        // Adicione o código de manipulação de sucesso aqui
      },
      error: function(error) {
        console.error('Erro ao excluir usuário:', error);
        // Adicione o código de manipulação de erro aqui
      },
    });
  }

  // Função para obter parâmetros da URL
  function obterParametroDaURL(nomeParametro) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nomeParametro);
  }
});
};


