<?php
// Datos de conexión a la base de datos
$servidor = 'localhost';
$nombre_bd = 'mi_base_de_datos';
$user = 'root';
$password = '';

// Crear la conexión
$conn = new mysqli($servidor, $user, $password, $nombre_bd);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para obtener los datos
$sql = "SELECT horas, cantidad FROM incidentes";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    // Recorrer cada fila y almacenarla en el array $data
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "0 resultados";
}

$conn->close();

// Devolver los datos en formato JSON
echo json_encode($data);
?>
