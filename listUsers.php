<!DOCTYPE html>
<html lang="pt-br">

<head>
  <link rel="stylesheet" href="style.css">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>inicio</title>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="script.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
  <div style="border-radius: 8px;">ola mundos</div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <!-- Navbar code remains unchanged -->
  </nav>
  <h1>Lista os usuario</h1>
  <hr>

  <table class="table table-dark table-hover table align-middle" id="userTable">
    <thead>
      <tr>
        <th style="width: 20%;text-align: center;border-style: solid; border-width: 1px;">usuario</th>
        <th style="width: 20%;text-align: center;border-style: solid; border-width: 1px;">senha</th>
        <th style="width: 20%;text-align: center;border-style: solid; border-width: 1px;">e-mail</th>
        <th style="width: 20%;text-align: center;border-style: solid; border-width: 1px;">EDITAR</th>
        <th style="width: 20%;text-align: center;border-style: solid; border-width: 1px;">EXCLUIR</th>
      </tr>
    </thead>
    <tbody>
      <!-- Table body remains empty as it will be populated dynamically with jQuery -->
    </tbody>
  </table>

  <script>
    $(document).ready(function () {
      // Make an AJAX request to fetch data from the API endpoint
      $.ajax({
        url: '/users',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
          // Iterate through the received data and populate the table
          $.each(data, function (index, user) {
            $('#userTable tbody').append(`
              <tr>
                <td style="width: 20%;border-style: solid; border-width: 1px;text-align: center;" class="teste">${user.username}</td>
                <td style="width: 20%;border-style: solid; border-width: 1px;text-align: center;">${user.password}</td>
                <td style="width: 20%;border-style: solid; border-width: 1px;text-align: center;">${user.email}</td>
                <td style="width: 20%;border-style: solid; border-width: 1px;text-align: center;border-radius: 7px;">
                  <a class="btn bg-transparent" href="editar.php?codigo=${user.id}">EDITAR</a>
                </td>
                <td style="width: 20%;border-style: solid; border-width: 1px;border-color: white;text-align: center;border-radius: 7px;">
                  <a class="btn bg-transparent" href="eliminar.php?codigo=${user.id}">ELIMINAR</a>
                </td>
              </tr>
            `);
          });
        },
        error: function (error) {
          console.error('Error fetching user data:', error);
        }
      });
    });
  </script>
</body>

</html>
