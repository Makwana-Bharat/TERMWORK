<?php
session_start();
header('Access-Control-Allow-Origin: *');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require("PHPMailer/PHPMailer.php");
require("PHPMailer/Exception.php");
require("PHPMailer/SMTP.php");

$mail = new PHPMailer(true);

$OTP = rand(0, 9) . rand(0, 9) . rand(0, 9) . rand(0, 9) . rand(0, 9) . rand(0, 9);
$body = "Verify Your Account Using <hr><h2><strong>OTP: <strong><b>$OTP</b></h2><br><hr><sapn style='color:red'>* Don't Share It..!!!";
try {
    if (empty($_POST["EMAIL"]))
        throw new Exception("Email Not Fount");
    $to = $_POST['EMAIL'];
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = '2022makwanabharat@gmail.com';
    $mail->Password   = 'ewieevjcnilctlfm';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    //Recipients
    $mail->setFrom('2022makwanabharat@gmail.com', 'AJAX-Codder');
    $mail->addAddress($to, "Account Verification");     //Add a recipient
    //Content
    $mail->isHTML(true);                                   //Set email format to HTML
    $mail->Subject = "Create New Account";
    $mail->Body    = $body;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $mail->send();

    $response = array(
        "status" => "success",
        "message" => "OTP Send..",
        "OTP" => $OTP
    );
} catch (Exception $e) {
    $response = array(
        "status" => "error",
        "message" => "Failed to insert data"
    );
}
echo json_encode($response);
