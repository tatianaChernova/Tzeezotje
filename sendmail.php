<?php
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && !empty($_POST['name'])) {
  $message = 'Name: ' . $_POST['name'] . ' ';
  $message .= 'Email: ' . $_POST['email'] . ' ';
  if(!empty($_POST['request'])) {
      $message .= 'Special request: ' . $_POST['request'] . ' ';
  }
  $mailTo = "tatiana.chernova.work@gmail.com";
  $subject = "New reservation"; 
  $headers= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8\r\n";
  $headers .= "From: info@site.ru <info@site.ru>\r\n";
  if(mail($mailTo, $subject, $message, $headers)) {
      echo "Thank you, ".$_POST['name'].", for ypur reservation!"; 
  } else {
      echo "Error! Please try again"; 
  }
}

?>