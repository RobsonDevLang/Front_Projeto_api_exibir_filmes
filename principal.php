<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>principal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="areaBoasvindas">
        <h1>bem-vindo</h1>
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
        <aside>
            <ul>
                <li><a href="listUsers.php">usuários</a></li>
                <!-- <li>alunos</li>
                <li>cursos</li>
                <li>usuário</li> -->
            </ul>
        </aside>
    </div>
</body>

</html>