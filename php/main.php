<?php     
$to_email = 'name @ company . com';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: jakegads.dev';
mail($to_email,$subject,$message,$headers);
?>