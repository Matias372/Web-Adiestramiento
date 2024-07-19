<?php
// Incluir archivo de conexión
include_once 'Conexion.php';

header('Content-Type: application/json');

// Verificar si se proporcionó un nombre de curso
if (isset($_POST['cursoEliminar'])) {
    $nombreCurso = $_POST['cursoEliminar'];

    // Inicializar conexión a la base de datos
    $conexion = new Conexion();
    $conn = $conexion->conn;

    // Verificar la conexión
    if ($conn) {
        try {
            $conn->begin_transaction();

            // Obtener la imagen del curso que se va a eliminar
            $query = "SELECT Img FROM cursos WHERE Nombre = ?";
            $stmt_img = $conn->prepare($query);
            if (!$stmt_img) {
                throw new Exception('Error en la preparación de la consulta: ' . $conn->error);
            }
            $stmt_img->bind_param('s', $nombreCurso);

            if ($stmt_img->execute()) {
                $stmt_img->store_result();
                if ($stmt_img->num_rows > 0) {
                    $stmt_img->bind_result($imagenCurso);
                    $stmt_img->fetch();

                    // Eliminar la imagen del servidor si existe
                    if (!empty($imagenCurso) && file_exists($imagenCurso)) {
                        if (!unlink($imagenCurso)) {
                            throw new Exception('Error al eliminar la imagen del servidor.');
                        }
                    }
                } else {
                    throw new Exception('Curso no encontrado.');
                }
                $stmt_img->close();
            } else {
                throw new Exception('Error al ejecutar la consulta para obtener la imagen: ' . $stmt_img->error);
            }

            // Eliminar el curso de la base de datos
            $query_delete = "DELETE FROM cursos WHERE Nombre = ?";
            $stmt = $conn->prepare($query_delete);
            if (!$stmt) {
                throw new Exception('Error en la preparación de la consulta: ' . $conn->error);
            }

            // Vincular parámetros
            $stmt->bind_param('s', $nombreCurso);

            // Ejecutar consulta
            if ($stmt->execute()) {
                // Verificar si se eliminó algún curso
                if ($stmt->affected_rows > 0) {
                    $conn->commit();
                    // Curso eliminado correctamente
                    echo json_encode(array('success' => true, 'message' => 'Curso eliminado correctamente'));
                } else {
                    throw new Exception('Curso no encontrado.');
                }
            } else {
                throw new Exception('Error al ejecutar la consulta para eliminar el curso: ' . $stmt->error);
            }

            // Cerrar declaración
            $stmt->close();
        } catch (Exception $e) {
            $conn->rollback();
            echo json_encode(array('error' => $e->getMessage()));
        } finally {
            // Cerrar conexión
            $conn->close();
        }
    } else {
        // Si no se pudo establecer conexión a la base de datos
        echo json_encode(array('error' => 'Error de conexión a la base de datos'));
    }
} else {
    // Si no se proporcionó un nombre de curso válido
    echo json_encode(array('error' => 'Nombre de curso no proporcionado'));
}
?>
