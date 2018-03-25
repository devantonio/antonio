<?php 
//$mail->SMTPDebug = 2;                               // Enable verbose debug output
$mail = new PHPMailer;
$mail->isSMTP();                                   // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'devantonio.inq@gmail.com';                 // SMTP username
$mail->Password = 'Datpiff0';                           // SMTP password
$mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom($email, $name);
$mail->addAddress('devantonio.inq@gmail.com');     // Add a recipient             
$mail->addReplyTo($email, $name);                        // Set email format to HTML

$mail->Subject = $subject;
$mail->Body    = $message;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
?>