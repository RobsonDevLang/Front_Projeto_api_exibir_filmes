<?php 
require_once("conexao.php");
// include_once("conexao.php");

$id=$_GET['codigo'];
$nome=$_GET['usuario'];

$sql="DELETE FROM cadastro WHERE id='$id'";
$consulta=mysqli_query($conexao,$sql);
 if($consulta==true){
    echo "<script>
        alert('registro eliminado com sucesso');
        window.location.href='listUsers.php';
    </script>";
 }else{
    "<script>
    window.location.href='listUsers.php';
    </script>";
 }
?>