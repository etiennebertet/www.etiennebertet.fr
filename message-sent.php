<?php
                $name = strip_tags($_POST['name']);
                $email = strip_tags($_POST['email']);
                $object = strip_tags($_POST['object']);
                $shape = htmlspecialchars($_POST['shape']);
                $message = htmlspecialchars($_POST['message']);

    if (
        (!isset($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
        || (!isset($_POST['message']) || empty($_POST['message']))
        || (!isset($_POST['name']) || empty($_POST['name']))
        || (!isset($_POST['shape']) || empty($_POST['shape']))
        || (!isset($_POST['object']) || empty($_POST['object']))
        ){

        echo('
<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8" />
        <title>Message not sent</title>
        <link rel="stylesheet" href="style.css" />
    </head>
<body>
<h2>You need to fill all fields to submit the form.</h2>'); return;

    }else{
        $secret="RecaptchaKey";
        $response= htmlspecialchars($_POST['g-recaptcha-response']);
        $remoteip= $_SERVER['REMOTE_ADDR'];
        $request="https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip";
    
        $get= file_get_contents($request);
        $decode = json_decode($get, true);
    }
?>
<?php/*
    //SMTP configuration to send email

    include('../SMTPconfig.php');
    include('../SMTPclass.php');

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $to = 'contactwebsite.eb@gmail.com';
        $from = 'etiennebertet@gmail.com';
        $subject = $object;
        $body = $email, $name, $shape, $message;
        $SMTPMail = new SMTPClient ($SmtpServer, $SmtpPort, $SmtpUser, $SmtpPass, $from, $to, $subject, $body);
        $SMTPChat = $SMTPMail->SendMail($to,$subject,$from,$body);
    }
*/?>


<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8" />
        <title>Confirmation message sent</title>
        <link rel="stylesheet" href="style.css" />
        <?php include('head.php');?>
    </head>
<body>
<!-----------------------------------------------Menu----------------------------------------------->

<?php include("header.php"); ?>

<!---------------------------------------------Form-Filter--------------------------------------------------->


<div class="article" id="messagesent">
                        <div class="article_title" id="contact_title">
                            <h1>Thank you</h1>
                            <img class="line_title" src="images/line.png" alt="line" width=500>
                        </div>
                        <div class="article_subtitle">
                            <h2>Your message has been sent. We'll get back to you soon.</h2>
                            <img id="comete" src="images/comete.png" width="100" alt="comete">
                        </div>
                        <div class="card">
                            <h3>Reminder of your information</h3>
                                <p><b>Name</b> :<p>
                                <p class="message_content"><?php echo strip_tags($name); ?></p>
                                <br/>
                                <p><b>E-mail</b> :</p>
                                <p class="message_content"><?php echo strip_tags($email); ?></p>
                                <br/>
                                <p><b>Subject</b> :</p>
                                <p class="message_content"><?php echo strip_tags($object); ?></p>
                                <br/>
                                <p><b>Favorite shape</b> :</p>
                                <p class="message_content"><?php echo strip_tags($shape); ?></p>
                                <br/>
                                <p><b>Message</b> :</p>
                                <p class="message_content"><?php echo htmlspecialchars($message); ?></p>
                        </div>   
                    </div>
<!-------------------------------------------Sending-Email------------------------------------------->

<?php

    $from = 'contact@etiennebertet.fr';

    $email_body =   "Name : ".$name." \n".
                    "Subject : ".$object." \n".
                    "His/her/them favorite shape : ".$shape." \n".
                    "Message : ".$message." \n".
                    "From ".$email." \n".

    $to = "contactwebsite.eb@gmail.com";

    $headers = "From: ".'contact@etiennebertet.fr'." \r\n";

    $headers .= "Reply-To: ".$email." \r\n";

    mail($to,$object,$email_body,$headers);
?>     

<!--------------------------------------------Secure-Email-Sending--------------------------------------->
<!------------------------------------------------Other-try---------------------------------------------->
<?php
/*
function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

/*if(IsInjected($email))
{
    echo "Bad email value!";
    exit;
}*/
?>

<!--------------------------------------------Footer------------------------------------------------->


    <?php include("footer.php"); ?>


</body>
</html>
