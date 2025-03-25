<?php
include 'conexion.php'; // Incluye la conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar los datos del formulario
    $nombre = $_POST['user_name'] ?? '';
    $correo = $_POST['user_mail'] ?? '';
    $trabajo = $_POST['user_trab'] ?? '';
    $busca = $_POST['user_busca'] ?? ''; // Valor de "Estoy en busca de"
    $presupuesto = $_POST['user_presupuesto'] ?? ''; // Valor de "Presupuesto"
    $detalles = $_POST['user_message'] ?? '';

    // Conectar a la base de datos
    $conexion = new Conexion();
    $conn = $conexion->ConexionBD();

    // Insertar los datos en la base de datos
    try {
        $sql = "INSERT INTO contactame (Nombre, CorreoElectronico, Trabajo, BuscaDe, Presupuesto, Detalles) 
                VALUES (:nombre, :correo, :trabajo, :busca, :presupuesto, :detalles)";
        
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':trabajo', $trabajo);
        $stmt->bindParam(':busca', $busca); // Usar 'BuscaDe' en la consulta
        $stmt->bindParam(':presupuesto', $presupuesto);
        $stmt->bindParam(':detalles', $detalles);
        
        $stmt->execute();
        header("Location: ../index.html?success=true");

        exit();
    } catch (PDOException $e) {
        echo "<script>console.log('no se pudo');</script>". $e->getMessage();
    }
}
?>