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

        const data = {
            "name": name,
            "password": password,
            "email": email
        };

        console.log(data);

        $.ajax({
            url: 'http://localhost:3000/users',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                console.log(response);
                // Adicione o código de manipulação de sucesso aqui
            },
            error: function(error) {
                console.error('Erro ao enviar para a API:', error);
                // Adicione o código de manipulação de erro aqui
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