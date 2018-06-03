<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Email sent</title>
<meta http-equiv="Refresh" content="3; url=http://northlakesinsurance.com">
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
//require_once "recaptchalib.php";

// ваш секретный ключ
//$secret = "6LcePAATAAAAABjXaTsy7gwcbnbaF5XgJKwjSNwT";
 
// пустой ответ
//$response = null;
 
// проверка секретного ключа
//$reCaptcha = new ReCaptcha($secret);

$sendto   = "shevel.v.v@gmail.com"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['telephone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты

// Формирование заголовка письма
$subject  = "NLI site";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Message from site</h2>\r\n";
$msg .= "<p><strong>From: </strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Email: </strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Message: </strong> ".$usertel."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers, "-r shevel.v.v@gmail.com")) {
	
} else {
	echo "<center><img src='img/ne-otpravleno.png'></center>";
}

?>

</body>
</html>