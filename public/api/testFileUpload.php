<?php
/**
 * Submitされたファイルデータを取得
 */
$fileName = $_FILES['file'];

// レスポンスデータのContent-Typeを指定
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$data = array(
	'fileKey' => 'dammyfileKey',
	'fileName' => $fileName['name']
);

echo json_encode($data);
?>
