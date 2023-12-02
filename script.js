function enviarParaApi() {
    const name = document.getElementById('nomeCadastro').value;
    const passenhasword = document.getElementById('senhaCadastro').value;
    const email = document.getElementById('emailCadastro').value;


    // Verifica se os campos não estão vazios
    if (nomeElement && senhaElement && emailElement) {
        const name = nomeElement.value;
        const senha = senhaElement.value;
        const email = emailElement.value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('password', senha);
    formData.append('email', email);

    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');

    fetch('http://localhost:3000/users', {
        method: 'POST',
        body: formData,
        headers: headers
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição. Código do status: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            alert('Resposta da API: ' + JSON.stringify(data));
            console.log('Resposta da API:', data);
        })
        .catch(error => {
            alert('Erro ao enviar para a API: ' + error.message);
            console.error('Erro ao enviar para a API:', error);
        });
    } else {
        console.error('Um ou mais elementos não foram encontrados.');
        alert('Um ou mais elementos não foram encontrados.');
    }
}





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