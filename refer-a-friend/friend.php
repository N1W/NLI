<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Email sent</title>
<meta http-equiv="Refresh" content="3; url=http://northlakesinsurance.com/refer-a-friend/">
<style>
	body{
		margin: 0;
		padding: 0;
	}
	.main{
		width: 100vw;
		height: 100vh;
		background: url("../img/header_bg.jpg");
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		text-align: center;
		font-size: 6vw;
		color: white;
	}
</style> 
</head>
<body>
<div class="main">
	<p>Thank You!</p>
	<p>Your message has been sent.</p>
</div>

<?php 

$sendto   = "patricia.cold@northlakesinsurance.com"; // почта, на которую будет приходить письмо
$username = $_POST['fullname'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['phone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты
$refname = $_POST['ref-fullname'];
$refmail = $_POST['ref-email'];
$reftel = $_POST['ref-phone'];
$refhow = $_POST['ref-know'];
$usertext= $_POST['message'];

// Формирование заголовка письма
$subject  = "NLI referral";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Message from site</h2>\r\n";
$msg .= "<p><strong>User:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>User email:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>User tel:</strong> ".$usertel ."</p>\r\n";
$msg .= "<p><strong>Referral's name:</strong> ".$refname ."</p>\r\n";
$msg .= "<p><strong>Referral's email:</strong> ".$refmail ."</p>\r\n";
$msg .= "<p><strong>Referral's tel:</strong> ".$reftel ."</p>\r\n";
$msg .= "<p><strong>How do you know Referral:</strong> ".$refhow ."</p>\r\n";
$msg .= "<p><strong>Message:</strong> ".$usertext ."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(mail($sendto, $subject, $msg, $headers, "-r patricia.cold@northlakesinsurance.com")) {
} else {
	echo "<center><img src='img/ne-otpravleno.png'></center>";
}

?>

</body>
</html>