<?php
include 'Conexion.php'; // Asegúrate de ajustar la ruta según sea necesario
$conexion = new Conexion();
$conn = $conexion->conn;

// Mostrar errores para depuración (puedes desactivar esto en producción)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Función para validar y guardar la imagen
function guardarImagen() {
    // Directorio donde se guardará la imagen
    $directorio = '../Resources/Img/Cursos/';
    
    // Verificar que el archivo es una imagen
    $check = getimagesize($_FILES['imagen']['tmp_name']);
    if ($check === false) {
        throw new Exception('El archivo subido no es una imagen.');
    }

    // Limitar el tamaño del archivo (por ejemplo, a 5MB)
    if ($_FILES['imagen']['size'] > 5000000) {
        throw new Exception('El archivo es demasiado grande.');
    }

    // Extensiones permitidas
    $extensionesPermitidas = ['jpg', 'jpeg', 'png', 'gif'];
    $extension = strtolower(pathinfo($_FILES['imagen']['name'], PATHINFO_EXTENSION));
    if (!in_array($extension, $extensionesPermitidas)) {
        throw new Exception('Tipo de archivo no permitido. Solo se permiten JPG, JPEG, PNG y GIF.');
    }

    // Obtener nombre y extensión del archivo
    $nombreCurso = preg_replace('/[^a-zA-Z0-9_-]/', '', $_POST['nombre']);
    $nombreArchivo = $nombreCurso . '_IMG';
    
    // Nombre completo del archivo con extensión
    $nombreCompleto = $nombreArchivo . '.' . $extension;
    
    // Ruta completa donde se guardará la imagen
    $rutaCompleta = $directorio . $nombreCompleto;

    // Guardar la imagen en el servidor
    if (move_uploaded_file($_FILES['imagen']['tmp_name'], $rutaCompleta)) {
        // Devolver la URL de la imagen para almacenar en la base de datos
        $urlImagen = $rutaCompleta;
        return $urlImagen;
    } else {
        throw new Exception('Error al guardar la imagen.');
    }
}

// Función para guardar los datos en la base de datos
function guardarDatos($urlImagen) {
    // Usar la conexión desde Conexion.php
    global $conn;

    // Preparar datos para la inserción en la base de datos
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $temario = $_POST['temario'];
    $precioDolares = $_POST['precioDolares'];
    $precioPesos = $_POST['precioPesos'];

    // Query para insertar datos (ajusta según tu estructura de tabla)
    $stmt = $conn->prepare('INSERT INTO cursos (Nombre, Descripcion, Img, Temario, PrecioUSD, Precio$) VALUES (?, ?, ?, ?, ?, ?)');
    if ($stmt === false) {
        throw new Exception('Error en la preparación de la consulta: ' . $conn->error);
    }

    $stmt->bind_param('ssssdd', $nombre, $descripcion, $urlImagen, $temario, $precioDolares, $precioPesos);
    if ($stmt->execute()) {
        // Éxito al guardar en la base de datos
        echo json_encode(['message' => 'Curso creado exitosamente.']);
    } else {
        // Error al guardar en la base de datos
        throw new Exception('Error al ejecutar la consulta: ' . $stmt->error);
    }

    $stmt->close();
    $conn->close();
}

// Lógica principal para procesar el formulario
try {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (!isset($_FILES['imagen'])) {
            throw new Exception('No se ha recibido la imagen.');
        }

        // Validar y guardar imagen
        $urlImagen = guardarImagen();

        // Validar y guardar datos en la base de datos usando la URL de la imagen
        guardarDatos($urlImagen);
    } else {
        throw new Exception('Método de solicitud no permitido.');
    }
} catch (Exception $e) {
    echo json_encode(['error' => 'Error: ' . $e->getMessage()]);
}
?>
