function lsJsonMovie() {
    fetch('http://localhost:3000/movies')
        .then((response) => response.json())
        .then((data) => {
            var res = document.getElementById("res");
            var outraDiv = document.getElementById("outraDiv");

            // Limpar o conteúdo anterior
            res.innerHTML = '';

            // Usar um loop while para percorrer todos os itens do array
            var i = 0;
            while (i < data.length) {
                var novoItem = document.createElement('p');
                novoItem.textContent = JSON.stringify(data[i]);
                res.appendChild(novoItem);

                outraDiv.innerHTML += textContent = "Name: " + data[i].name+"<br>";
                outraDiv.innerHTML += "Imagem do filme: <br><img src='" + data[i].url + "' alt='" + data[i].name + "width='300' height='200''><br>";
                outraDiv.innerHTML += textContent = "Description: " + data[i].descripition
                +"<br><br>";
                outraDiv.innerHTML+= "<div class='btn btn-dark' style='text-align: center; border-style: solid; border-width: 1px;'><a href='editarFilme.html?id="+data[i].id+"'>Editar</a></div>";
                
                outraDiv.innerHTML+="<div class='btn btn-dark' style='text-align: center; border-style: solid; border-width: 1px;'><a style='color:red; id='excluir' href='excluirFilme.html?id="+data[i].id+"'>Excluir</a></div>";

                i++;
            }
        })
        .catch(error => console.log('Erro:', error))
}



$(document).ready(function() {
    const movieId = obterParametroDaURL('id');
  
    // Verificar se o ID do usuário está presente na URL
    if (movieId) {
      // Preencher o formulário de edição se o ID estiver presente
      preencherFormularioEdicao(movieId);
    }
  
    $('#editarFilme').submit(function(event) {
      event.preventDefault();
  
      const name = $('#nomeFilmeEditado').val();
      const urlEditado = $('#urlFilmeEditado').val();
      const descricaoFilme = $('#descricaoFilme').val();
  
      if (!name || !urlEditado || !descricaoFilme) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }
  
      const data = {
        "name": name,
        "url": urlEditado,
        "descripition": descricaoFilme
      };
      
  
      // Verificar se é uma operação de criação ou edição
      const requestType = movieId ? 'PUT' : 'POST';
      const url = movieId ? `http://localhost:3000/movies/${movieId}` : 'http://localhost:3000/movies';
  
      $.ajax({
        url: url,
        type: requestType,
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
          console.log(response);
          const mensagem = movieId ? 'Filme editado com sucesso' : `Usuário ${name} cadastrado com sucesso`;
          alert(mensagem);
          window.location.href = 'catalogo.html';
          // Adicione o código de manipulação de sucesso aqui
        },
        error: function(error) {
          console.error('Erro ao enviar para a API:', error);
          // Adicione o código de manipulação de erro aqui
        },
      });
    });
  
    // Função para preencher o formulário de edição
    function preencherFormularioEdicao(movieId) {
      // Obter dados do usuário por ID e preencher o formulário
      $.ajax({
        url: `http://localhost:3000/movies/${movieId}`,
        type: 'GET',
        dataType: 'json',
        success: function(movies) {
          $('#nomeEditar').val(movies.name);
          // Senha não é preenchida por motivos de segurança, você pode adicionar a lógica conforme necessário
          $('#descricaoFilmeEditar').val(movies.descricaoFilme);
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
  
  function excluirFilmeAoCarregar(){
  $(document).ready(function() {

    // Obter o ID do filme da URL
    const movieId = obterParametroDaURL('id');
  
    // Verificar se o ID do filme está presente na URL
    if (movieId) {
      // Chamar a função para excluir o filme ao carregar a página
      excluirFilme(movieId);
    }
  
    // Função para excluir o filme
    function excluirFilme(movieId) {
      const confirmacao = confirm('Deseja realmente excluir este filme?');
  
      if (!confirmacao) {
        return;
      }
  
      // Enviar solicitação de exclusão para a API
      $.ajax({
        url: `http://localhost:3000/movies/${movieId}`,
        type: 'DELETE',
        success: function(response) {
          console.log(response);
          alert('Filme excluído com sucesso');
          window.location.href = 'catalogo.html';
          // Adicione o código de manipulação de sucesso aqui
        },
        error: function(error) {
          console.error('Erro ao excluir filme:', error);
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
  
  