<?php
$pageTitle = "Contact Me";

if (($_SERVER["REQUEST_METHOD"]) == "POST"){
        $subject    = trim(filter_input(INPUT_POST,"subject", FILTER_SANITIZE_STRING));
        $name    = trim(filter_input(INPUT_POST,"name", FILTER_SANITIZE_STRING));
        $email   = trim(filter_input(INPUT_POST,"email", FILTER_SANITIZE_EMAIL));
        $message = trim(filter_input(INPUT_POST,"message", FILTER_SANITIZE_SPECIAL_CHARS));
        
        require 'libs/PHPMailer/PHPMailerAutoload.php';
        include "inc/mailer.php";

if ($subject == '') {$mail->Subject = 'INQUIRY';}
        
if ($_POST["address"] != "" ) {echo("Bad input.");exit;}

if ($mail->send()) {header("Location: thanks.php");}       

}

 
include "inc/header.php";
include "inc/contactForm.php";
?>
</main>
   
<?php include "inc/footer.php";?>
  








