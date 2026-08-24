<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


// ==========================================
// 1. COMPROBAR QUE SEA UNA PETICIÓN POST
// ==========================================

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die("El formulario no fue enviado mediante POST.");
}


// ==========================================
// 2. CONEXIÓN A LA BASE DE DATOS
// ==========================================

$host     = "localhost";
$usuario  = "root";
$password = "";
$database = "mi_pagina";

$conexion = new mysqli($host, $usuario, $password, $database);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}


// ==========================================
// 3. CAPTURAR LOS DATOS DEL FORMULARIO
// ==========================================

$nombre  = $_POST['nombre'] ?? '';
$correo  = $_POST['correo'] ?? '';
$asunto  = $_POST['asunto'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';


// ==========================================
// 4. SUBIR ARCHIVO
// ==========================================

$nombre_archivo = null;
$directorio = "uploads/";

if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {

    if (!file_exists($directorio)) {
        mkdir($directorio, 0777, true);
    }

    $nombre_archivo = time() . "_" . basename($_FILES['archivo']['name']);

    move_uploaded_file(
        $_FILES['archivo']['tmp_name'],
        $directorio . $nombre_archivo
    );
}


// ==========================================
// 5. GUARDAR EN MYSQL
// ==========================================

$stmt = $conexion->prepare(
    "INSERT INTO mensajes 
    (nombre, correo, asunto, mensaje, archivo_nombre) 
    VALUES (?, ?, ?, ?, ?)"
);

if (!$stmt) {
    die("Error al preparar la consulta: " . $conexion->error);
}

$stmt->bind_param(
    "sssss",
    $nombre,
    $correo,
    $asunto,
    $mensaje,
    $nombre_archivo
);


if (!$stmt->execute()) {

    die("Error al guardar en la base de datos: " . $stmt->error);

}


// ==========================================
// 6. ENVIAR CORREO CON PHPMailer
// ==========================================

$mail = new PHPMailer(true);

try {

    // --------------------------------------
    // Configuración SMTP de Gmail
    // --------------------------------------

    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;

    // TU CORREO DE GMAIL
    $mail->Username   = 'ossauver@gmail.com';

    // CONTRASEÑA DE APLICACIÓN DE GOOGLE
    $mail->Password   = 'zbva jkyd coak josn';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;


    // --------------------------------------
    // Remitente y destinatario
    // --------------------------------------

    $mail->setFrom(
        'ossauver@gmail.com',
        'portafolio'
    );

    $mail->addAddress(
        'ossauver@gmail.com'
    );


    // --------------------------------------
    // Responder directamente al visitante
    // --------------------------------------

    $mail->addReplyTo(
        $correo,
        $nombre
    );


    // --------------------------------------
    // Contenido del correo
    // --------------------------------------

    $mail->isHTML(true);

    $mail->Subject = $asunto;

    $mail->Body = "
        <h2>Nuevo mensaje desde tu portafolio</h2>

        <p>
            <strong>Nombre:</strong> 
            {$nombre}
        </p>

        <p>
            <strong>Correo:</strong> 
            {$correo}
        </p>

        <p>
            <strong>Asunto:</strong> 
            {$asunto}
        </p>

        <hr>

        <p>
            <strong>Mensaje:</strong>
        </p>

        <p>
            " . nl2br(htmlspecialchars($mensaje)) . "
        </p>
    ";


    // --------------------------------------
    // Adjuntar archivo
    // --------------------------------------

    if ($nombre_archivo !== null) {

        $mail->addAttachment(
            $directorio . $nombre_archivo
        );

    }


    // --------------------------------------
    // Enviar
    // --------------------------------------

    $mail->send();


    // ======================================
    // TODO SALIÓ BIEN
    // ======================================

    echo "¡Guardado y enviado con éxito!";


} catch (Exception $e) {

    // El mensaje sí quedó guardado en MySQL,
    // pero hubo un problema enviando el correo.

    echo "Guardado en la base de datos, pero no se pudo enviar el correo: "
         . $mail->ErrorInfo;

}


// ==========================================
// 7. CERRAR CONEXIONES
// ==========================================

$stmt->close();
$conexion->close();

?>