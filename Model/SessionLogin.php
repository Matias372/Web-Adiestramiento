<?php
require_once '../../Model/Conexion.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Consulta para verificar las credenciales
    $sql = "SELECT id, username, password FROM usuarios WHERE username=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        // Usuario encontrado
        $row = $result->fetch_assoc();
        // Verificar la contraseña
        if (password_verify($password, $row['password'])) {
            // Inicio de sesión exitoso
            $_SESSION['id'] = $row['id'];
            $_SESSION['username'] = $row['username'];

            // Redireccionar a la página de inicio o dashboard
            header("Location: ../../Visual/Html/AdminDog.html");
            exit();
        } else {
            // Contraseña incorrecta
            echo "Usuario o contraseña incorrectos.";
        }
    } else {
        // Usuario no encontrado
        echo "Usuario o contraseña incorrectos.";
    }

    // Cerrar la declaración preparada
    $stmt->close();
}
$conn->close();
?>
