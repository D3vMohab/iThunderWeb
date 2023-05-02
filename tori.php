<?php 
$apiToken = "5947991166:AAGycvpk1wX_g3tht0avB5xaB6O3_3aGQ7s"; 
 
$data = [ 
 'chat_id' => '@demo', 
 'text' => 'Welcome to my world' 
]; 
 
$response = file_get_contents("http://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) ); 
?>
