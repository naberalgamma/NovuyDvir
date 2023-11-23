<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $phone = $_POST['phone'];

    $to = "dotafight@gmail.com";
    $subject = "Передзвоніть мені!";
    $message = "tel: " . ($data['phone'] ?? 'дані відсутні') . ", name: " . ($data['name'] ?? 'дані відсутні') . ", email: " . ($data['email'] ?? 'дані відсутні');

    $headers = "From: test202311@ukr.net\r\n";
    $headers .= "Reply-To: test202311@ukr.net\r\n";
    $headers .= "Content-type: text/html\r\n";

    mail($to, $subject, $message, $headers);
    http_response_code(200);
} else {
    http_response_code(405); // Method Not Allowed
}
?>