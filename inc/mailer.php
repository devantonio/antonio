<?php 


if(isset($_POST["subject"]) && isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])){
	
//if (($_SERVER["REQUEST_METHOD"]) == "POST"){
        $subject = trim(filter_input(INPUT_POST,"subject", FILTER_SANITIZE_STRING));
        $name    = trim(filter_input(INPUT_POST,"name", FILTER_SANITIZE_STRING));
        $email   = trim(filter_input(INPUT_POST,"email", FILTER_SANITIZE_EMAIL));
        $message = trim(filter_input(INPUT_POST,"message", FILTER_SANITIZE_SPECIAL_CHARS));
        if(!empty($email)){if(!empty($name)){if(!empty($message)){
       require  '../libs/PHPMailer/PHPMailerAutoload.php';
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

if ($subject == '') {$mail->Subject = 'INQUIRY';}
        
if ($_POST["address"] !== "") {echo("Bad input.");exit;}

if ($mail->send()) {echo('<div><p>Thank you '  .$name.'!' . ' Your message has been sent.</p></div>');}       

}
}}}
?>