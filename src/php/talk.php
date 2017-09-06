<?php
//php implimentation
//and set env like this.
//export A3RT_API_KEY_Talk="XXXXXXXXXXXXXX"

use GuzzleHttp\Client;
require "vendor/autoload.php";

$sApiKey = getenv('A3RT_API_KEY_Talk');
$text = "馬が走っています。";
$base_url = 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk';
$query = ['apikey'=>$sApiKey,'query'=>$text]; 
print var_export($query , true);

$client = new Client();
$res = $client->post($base_url, $query);

$response_body = $res->getBody();
$response_body = json_decode($response_body, true);

print var_export($response_body , true);


?>
