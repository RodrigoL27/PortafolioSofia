<?php
class Conexion {
    function ConexionBD() {
        $host = 'bokodunv0mr6n0ynpcyj-mysql.services.clever-cloud.com';
        $dbname = 'bokodunv0mr6n0ynpcyj';
        $username = 'utijatmm3tul4fmb';
        $password = '8N91YepQRaGb9fvWeS6g';

        try {
            $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $exp) {
            die("No se logró conectar con la base de datos: " . $exp->getMessage());
        }
    }
}



?>