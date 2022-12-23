<?php
/**
 * SubmitされたJSONデータを取得
 */
$json = file_get_contents('php://input');

// レスポンスデータのContent-Typeを指定
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

echo $json;
?>
