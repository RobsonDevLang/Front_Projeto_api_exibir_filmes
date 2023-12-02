<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>inicio</title>
  <!-- <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script> -->
  <!-- <script src="script.js"></script> -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>
<header>
    <H1>Sitema de CRUD PHP/MySQL/HTML/CSS, JS E JQuery</H1>
  </header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Ínicio</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Catálogos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Top Filmes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true" disabled>Assinar</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Nome de um filme" aria-label="Search" disabled>
            <button class="btn btn-outline-success" type="submit" disabled>Pesquisar</button>
          </form>
        </div>
      </div>
    </nav>
    
<div id="areaCadastro">
        <hr>
        <h2>Editar</h2>
        <hr>
        <form method="POST">
            <p>nome:</p>
            <input name="nome" type="text" placeholder="nome" required>
            <p>senha:</p>
            <input name="senha" type="password" placeholder="senha" required>
            <p>e-mail:</p>
            <input name="email" type="email" placeholder="E-mail" required><BR><BR>
            <br><br>
            <button type="submit" name="submitBtn">enviar</button><br>
        </form>
        <br>
        <button id="logar">logar-se</button>
    </div>
    </body>
    </html>
    <?php 
require_once("conexao.php");

if (isset($_POST['submitBtn'])) {
        $id = $_GET['codigo'] ?? 0; // Defina um valor padrão se 'codigo' não estiver definido
        $nome = $_POST['nome'] ?? '';
        $senha = md5($_POST['senha']) ?? '';
        $email = $_POST['email'] ?? '';

        // Verifique se os campos obrigatórios estão preenchidos
        if (empty($nome) || empty($senha) || empty($email)) {
            throw new Exception("Todos os campos devem ser preenchidos");
        }

        $sql = "UPDATE cadastro SET usuario='$nome', senha='$senha', email='$email' WHERE id='$id'";
if ($conexao->query($sql) === TRUE) {
    echo "<script>
        alert('registro editado com sucesso');
        window.location.href='listUsers.php';
    </script>";
    $conexao->close();
    }   
   } else {
    // Display an error message if the SQL query fails
    echo "Error: " . $sql . "<br>" . $conexao->error;
}
?>
   