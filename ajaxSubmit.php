<?php
// video PHP
$nombre = $_POST['nombre'];
$nombre = $_POST['email'];
$nombre = $_POST['mensaje'];

$header= 'From: ' .$email . "\r\n";
$header .= "X-Mailer: PHP/" .phpversion(). "\r\n";
$header .= "Mime-Version: 1.0 \r\n";

$comentario="Este mensaje fue enviado por: " .$nombre ."\r\n";
$comentario="Su E-mail es: " .$email ."\r\n";
$comentario="Su mensaje es: " .$mensaje ."\r\n";

$para ="takashivm97@gmail.com";
$asunto="Mensaje desde la pagina web";
mail($para,$asunto, utf8_encode($comentario), $header);


// video validar
$nombre = $_POST['nombre'];

echo json_encode(array(
    'Mensaje' => sprintf('Se recibió el correo de %s', $nombre),
));
 