<?php
class Conexion {
    function ConexionBD() {
        $host = 'bsqd8wkyzrcfy5m0ujxt-mysql.services.clever-cloud.com';
        $dbname = 'bsqd8wkyzrcfy5m0ujxt';
        $username = 'u7xnpuhe1qmcdoao';
        $password = 'VzZYSSiz3YIUA1tswjqQ';

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